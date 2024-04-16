import Command from './command';

// Команда для выбора оператора
class SelectOperatorCommand extends Command {
	constructor(calculator, operator) {
		super();
		this.calculator = calculator;
		this.operator = operator;
	}

	execute() {
		this.calculator.selectOperator(this.operator);
	}
}

// Команда для выполнения операции
class PerformOperationCommand extends Command {
	constructor(calculator) {
		super();
		this.calculator = calculator;
	}

	execute() {
		this.calculator.performOperation();
	}
}

// Команда для сброса
class ResetCommand extends Command {
	constructor(calculator) {
		super();
		this.calculator = calculator;
	}

	execute() {
		this.calculator.reset();
	}
}

// Команда скобок

class BracketCommand extends Command {
	constructor(calculator, bracket, value, operator, history) {
		super();
		this.calculator = calculator;
		this.bracket = bracket;
		this.value = value;
		this.operator = operator;
		this.history = history;
	}

	execute() {
		this.calculator.processBracket(
			this.bracket,
			this.value,
			this.operator,
			this.history,
		);
	}
}

export {
	SelectOperatorCommand,
	PerformOperationCommand,
	ResetCommand,
	BracketCommand,
};
