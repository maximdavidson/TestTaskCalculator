import {
	BracketCommand,
	PerformOperationCommand,
	ResetCommand,
	SelectOperatorCommand,
} from '@commands/Calculator';
import Display from '@components/Display/Display';
import ControlPanel from '@components/History/ControlPanel';
import History from '@components/History/History';
import { useHistoryContext } from '@components/History/HistoryContext';
import Keypad from '@components/Keypad/Keypad';
import {
	HISTORY_DEFAULT_VISIBILITY,
	MAX_DISPLAY_LENGTH,
} from '@constants/calculator';
import React, { useState } from 'react';

import {
	addNumber,
	performOperation,
	processBracket,
	reset,
	selectOperator,
} from './calculatorFunctions';
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
	const [isHistoryVisible, setIsHistoryVisible] = useState(
		HISTORY_DEFAULT_VISIBILITY,
	);
	const { addHistoryItem } = useHistoryContext();
	const [inputSequence, setInputSequence] = useState('');

	const handleAddNumber = (number) =>
		addNumber(
			number,
			displayValue,
			setDisplayValue,
			waitingForSecondOperand,
			setWaitingForSecondOperand,
		);
	const handleSelectOperator = (selectedOperator) =>
		selectOperator(
			selectedOperator,
			displayValue,
			setDisplayValue,
			setOperator,
			setValue,
			setWaitingForSecondOperand,
		);
	const handlePerformOperation = () =>
		performOperation(
			operator,
			value,
			displayValue,
			setDisplayValue,
			setValue,
			setOperator,
			addHistoryItem,
			history,
			setHistory,
		);
	const handleReset = () =>
		reset(setDisplayValue, setInputSequence, setValue, setOperator);

	const handleProcessBracket = (bracket) =>
		processBracket(bracket, displayValue, setDisplayValue, setInputSequence);

	const calculator = {
		addNumber: handleAddNumber,
		selectOperator: handleSelectOperator,
		performOperation: handlePerformOperation,
		reset: handleReset,
		processBracket: handleProcessBracket,
	};

	const handleButtonClick = (buttonValue) => {
		if ('0123456789'.includes(buttonValue)) {
			if (
				displayValue.length >= MAX_DISPLAY_LENGTH &&
				!waitingForSecondOperand
			) {
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
			// Если есть открытая скобка, выполняем операцию внутри скобок
			if (inputSequence.includes('(')) {
				const lastOpenBracketIndex = inputSequence.lastIndexOf('(');
				const expressionInsideBrackets = inputSequence.slice(
					lastOpenBracketIndex + 1,
				);
				processBracket(
					')',
					expressionInsideBrackets,
					setDisplayValue,
					setInputSequence,
					setValue,
					setOperator,
					addHistoryItem,
					history,
					setHistory,
				);
				// После операции внутри скобок сохраняем результат для последующей операции
				setOperator(null);
				// Значение для последующей операции равно результату внутри скобок
				setValue(parseFloat(displayValue));
			}
			// После операции внутри скобок выполняем основную операцию
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
		} else if (buttonValue === '(' || buttonValue === ')') {
			const bracketCommand = new BracketCommand(
				calculator,
				buttonValue,
				displayValue,
				operator,
				history,
			);
			bracketCommand.execute();
		}

		if (
			buttonValue !== '=' &&
			buttonValue !== 'C' &&
			buttonValue !== 'CE' &&
			buttonValue !== '(' &&
			buttonValue !== '.'
		) {
			setInputSequence((prev) => prev + buttonValue);
		}
	};

	const toggleHistoryVisibility = (isVisible) => {
		setIsHistoryVisible(isVisible);
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
