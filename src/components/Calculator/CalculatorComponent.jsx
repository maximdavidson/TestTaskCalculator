import React, { useState } from 'react';
import Display from '@components/Display/Display';
import Keypad from '@components/Keypad/Keypad';
import {
	SelectOperatorCommand,
	PerformOperationCommand,
	ResetCommand,
} from '@commands/Calculator';
import History from '@components/History/History';
import ControlPanel from '@components/History/ControlPanel';
import { useHistoryContext } from '@components/History/HistoryContext';
import calculate from './Calculate';
import {
	CalculatorContainer,
	CalculatorWrapper,
	HistoryWrapper,
	TogglePositionWrapper,
} from './styled';

function CalculatorComponent() {
	const [displayValue, setDisplayValue] = useState('0');
	const [operator, setOperator] = useState(null);
	const [value, setValue] = useState(null);
	const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
	const [history, setHistory] = useState([]);
	const [isHistoryVisible, setIsHistoryVisible] = useState(false);
	const { addHistoryItem } = useHistoryContext();
	const [inputSequence, setInputSequence] = useState('');

	const handleButtonClick = (buttonValue) => {
		if ('0123456789'.includes(buttonValue)) {
			if (displayValue.length >= 10 && !waitingForSecondOperand) {
				return;
			}
			if (waitingForSecondOperand) {
				setDisplayValue(buttonValue);
				setWaitingForSecondOperand(false);
			} else {
				setDisplayValue(
					displayValue === '0' ? buttonValue : inputSequence + buttonValue,
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
			setInputSequence('');
		} else if (buttonValue === 'C') {
			const resetCommand = new ResetCommand(calculator);
			resetCommand.execute();
		} else if (buttonValue === '.') {
			if (!displayValue.includes('.')) {
				setDisplayValue(displayValue + '.');
				setInputSequence((prev) => prev + '.');
			}
		} else if (buttonValue === 'CE') {
			if (displayValue.length > 1) {
				const newDisplayValue = displayValue.slice(0, -1);
				setDisplayValue(newDisplayValue);
				setInputSequence((prev) => prev.slice(0, -1));
			} else {
				setDisplayValue('0');
				setInputSequence('');
			}
		} else if (buttonValue === '+/-') {
			if (displayValue !== '0') {
				setDisplayValue((prevValue) => parseFloat(prevValue) * -1);
				setInputSequence((prev) => parseFloat(prev) * -1);
			}
			return;
		} else if ('%'.includes(buttonValue)) {
			const selectOperatorCommand = new SelectOperatorCommand(
				calculator,
				buttonValue,
			);
			selectOperatorCommand.execute();
		}

		if (
			buttonValue !== '=' &&
			buttonValue !== 'C' &&
			buttonValue !== 'CE' &&
			buttonValue !== '.'
		) {
			setInputSequence((prev) => prev + buttonValue);
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
		setInputSequence('');
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
		<CalculatorContainer>
			<CalculatorWrapper>
				<Display displayValue={inputSequence || displayValue} />
				<Keypad onButtonClick={handleButtonClick} />
			</CalculatorWrapper>
			<HistoryWrapper>
				<TogglePositionWrapper>
					<h2>History</h2>
					<ControlPanel onToggleHistory={toggleHistoryVisibility} />
				</TogglePositionWrapper>
				{isHistoryVisible && <History history={history} />}
			</HistoryWrapper>
		</CalculatorContainer>
	);
}

export default CalculatorComponent;
