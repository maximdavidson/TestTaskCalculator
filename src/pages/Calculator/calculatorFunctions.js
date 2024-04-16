import calculate from './Calculate';

export const addNumber = (
	number,
	displayValue,
	setDisplayValue,
	waitingForSecondOperand,
	setWaitingForSecondOperand,
) => {
	if (waitingForSecondOperand) {
		setDisplayValue(String(number));
		setWaitingForSecondOperand(false);
	} else {
		setDisplayValue(
			displayValue === '0' ? String(number) : displayValue + number,
		);
	}
};

export const selectOperator = (
	selectedOperator,
	displayValue,
	setDisplayValue,
	setOperator,
	setValue,
	setWaitingForSecondOperand,
) => {
	setOperator(selectedOperator);
	setValue(parseFloat(displayValue));
	setWaitingForSecondOperand(true);
};

export const performOperation = (
	operator,
	value,
	displayValue,
	setDisplayValue,
	setValue,
	setOperator,
	addHistoryItem,
	history,
	setHistory,
) => {
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

export const reset = (
	setDisplayValue,
	setInputSequence,
	setValue,
	setOperator,
) => {
	setDisplayValue('0');
	setInputSequence('');
	setValue(null);
	setOperator(null);
};

export const processBracket = (
	bracket,
	displayValue,
	setDisplayValue,
	setInputSequence,
	setValue,
	setOperator,
	addHistoryItem,
	history,
	setHistory,
) => {
	if (bracket === '(') {
		setInputSequence((prev) => prev + '(');
	} else if (bracket === ')' && displayValue) {
		const lastOpenBracketIndex = displayValue.lastIndexOf('(');
		if (lastOpenBracketIndex !== -1) {
			const expressionInsideBrackets = displayValue.slice(
				lastOpenBracketIndex + 1,
			);
			setInputSequence((prev) => prev.slice(0, lastOpenBracketIndex));
			performOperation(
				null,
				null,
				expressionInsideBrackets,
				setDisplayValue,
				setValue,
				setOperator,
				addHistoryItem,
				history,
				setHistory,
			);
		}
	}
};
