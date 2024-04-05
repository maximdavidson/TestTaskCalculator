import React, { useState } from "react";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";
import { AddNumberCommand, SelectOperatorCommand, PerformOperationCommand, ResetCommand } from '../../commands/Calculator';

function CalculatorComponent(){
   const [displayValue, setDisplayValue] = useState('0');
   const [operator, setOperator] = useState(null);
   const [value, setValue] = useState(null);
   const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

   const handleButtonClick = (buttonValue) => {
      if ('0123456789'.includes(buttonValue)) {
         if (waitingForSecondOperand) {
            setDisplayValue(buttonValue);
            setWaitingForSecondOperand(false);
         } else {
            setDisplayValue(displayValue === '0' ? buttonValue : displayValue + buttonValue);
         }
      } else if ('+-*/'.includes(buttonValue)) {
         const selectOperatorCommand = new SelectOperatorCommand(calculator, buttonValue);
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
        if(displayValue !== '0' && displayValue.length > 1){
          setDisplayValue(displayValue.slice(0, -1));
        } else {
          setDisplayValue('0')
        }
      }
   };

   // Функции для выполнения команд
   const addNumber = (number) => {
      if (waitingForSecondOperand) {
         setDisplayValue(String(number));
         setWaitingForSecondOperand(false);
      } else {
         setDisplayValue(displayValue === '0' ? String(number) : displayValue + number);
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
         setDisplayValue(String(newValue));
         setValue(null);
         setOperator(null);
      }
   };

   const reset = () => {
      setDisplayValue('0');
      setValue(null);
      setOperator(null);
   };

   const calculator = {
      addNumber,
      selectOperator,
      performOperation,
      reset
   };

   return (
      <div>
        <Display displayValue={displayValue} />
        <Keypad onButtonClick={handleButtonClick} />
      </div>
    );
}

function calculate(firstValue, operator, secondValue) {
   let result;
   if (operator === '+') {
      result =  firstValue + secondValue;
   } else if (operator === '-') {
      result =  firstValue - secondValue;
   } else if (operator === '*') {
      result =  firstValue * secondValue;
   } else if (operator === '/') {
      result =  firstValue / secondValue;
   } else {
      result =  secondValue;
   }

   return parseFloat(result.toFixed(3));
}

export default CalculatorComponent;