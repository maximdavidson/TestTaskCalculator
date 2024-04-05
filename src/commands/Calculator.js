import Command from './command';

// Команда для добавления числа
class AddNumberCommand extends Command {
  constructor(calculator, number) {
    super();
    this.calculator = calculator;
    this.number = number;
  }

  execute() {
    this.calculator.addNumber(this.number);
  }
}

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

export { AddNumberCommand, SelectOperatorCommand, PerformOperationCommand, ResetCommand };