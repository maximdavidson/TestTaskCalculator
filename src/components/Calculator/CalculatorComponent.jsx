import React, { useState } from 'react';
import Display from '@components/Display/Display';
import Keypad from '@components/Keypad/Keypad';
import {
  SelectOperatorCommand,
  PerformOperationCommand,
  ResetCommand,
} from '@commands/Calculator';
import c from './CalculatorComponent.module.css';
import History from '@components/History/History';
import ControlPanel from '@components/History/ControlPanel';
import { useHistoryContext } from '@components/History/HistoryContext';
import calculate from './Calculate';

function CalculatorComponent() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [value, setValue] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const [history, setHistory] = useState([]);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  const { addHistoryItem } = useHistoryContext();

  const handleButtonClick = (buttonValue) => {
    if (displayValue.length >= 18) {
      return;
    }
    if ('0123456789'.includes(buttonValue)) {
      if (waitingForSecondOperand) {
        setDisplayValue(buttonValue);
        setWaitingForSecondOperand(false);
      } else {
        setDisplayValue(
          displayValue === '0' ? buttonValue : displayValue + buttonValue,
        );
      }
    } else if ('+-*/'.includes(buttonValue)) {
      const selectOperatorCommand = new SelectOperatorCommand(
        calculator,
        buttonValue,
      );
      selectOperatorCommand.execute();
    } else if (buttonValue === '=') {
      const performOperationCommand = new PerformOperationCommand(calculator);
      performOperationCommand.execute();
    } else if (buttonValue === 'C') {
      const resetCommand = new ResetCommand(calculator);
      resetCommand.execute();
    } else if (buttonValue === '.') {
      if (!displayValue.includes('.')) {
        setDisplayValue(displayValue + '.');
      }
    } else if (buttonValue === 'CE') {
      if (displayValue !== '0' && displayValue.length > 1) {
        setDisplayValue(displayValue.slice(0, -1));
      } else {
        setDisplayValue('0');
      }
    } else if (buttonValue === '+/-') {
      setDisplayValue((prevValue) => {
        if (prevValue !== '0') {
          // Если текущее значение не равно нулю, меняем его знак
          return (parseFloat(prevValue) * -1).toString();
        } else {
          return prevValue;
        }
      });
      return;
    } else if ('%'.includes(buttonValue)) {
      const selectOperatorCommand = new SelectOperatorCommand(
        calculator,
        buttonValue,
      );
      selectOperatorCommand.execute();
    }
  };

  // Функции для выполнения команд
  const addNumber = (number) => {
    if (waitingForSecondOperand) {
      setDisplayValue(String(number));
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(
        displayValue === '0' ? String(number) : displayValue + number,
      );
    }
  };

  const selectOperator = (selectedOperator) => {
    setOperator(selectedOperator);
    setValue(parseFloat(displayValue));
    setWaitingForSecondOperand(true);
  };

  const performOperation = () => {
    if (operator && value != null) {
      const currentValue = parseFloat(displayValue);
      const newValue = calculate(value, operator, currentValue);
      const operation = `${value} ${operator} ${currentValue} = ${newValue}`;
      setHistory([...history, operation]);
      setDisplayValue(String(newValue));
      setValue(null);
      setOperator(null);
      addHistoryItem(operation);
    }
  };

  const reset = () => {
    setDisplayValue('0');
    setValue(null);
    setOperator(null);
  };

  const toggleHistoryVisibility = (isVisible) => {
    setIsHistoryVisible(isVisible);
  };

  const calculator = {
    addNumber,
    selectOperator,
    performOperation,
    reset,
  };

  return (
    <div className={c.calculator_container}>
      <div className={c.calculator}>
        <Display displayValue={displayValue} />
        <Keypad onButtonClick={handleButtonClick} />
      </div>
      <div className={c.history}>
        <div className={c.toggle_position}>
          <h2>History</h2>
          <ControlPanel onToggleHistory={toggleHistoryVisibility} />
        </div>
        {isHistoryVisible && <History history={history} />}
      </div>
    </div>
  );
}

export default CalculatorComponent;
