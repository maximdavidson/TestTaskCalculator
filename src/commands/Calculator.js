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

export { SelectOperatorCommand, PerformOperationCommand, ResetCommand };


// Команда для добавления числа
// class AddNumberCommand extends Command {
//   constructor(calculator, number) {
//     super();
//     this.calculator = calculator;
//     this.number = number;
//   }

//   execute() {
//     this.calculator.addNumber(this.number);
//   }
// }










// В этом коде определяются три конкретные команды, которые расширяют базовый класс Command, 
// представленный ранее. Каждая из этих команд предназначена для выполнения определенных действий в
//  контексте калькулятора. Рассмотрим подробнее каждую команду:

// 1. SelectOperatorCommand
// Эта команда предназначена для выбора оператора (+, -, *, /) в калькуляторе.

// Конструктор: Принимает два параметра: calculator, объект, в котором будет выполнена операция, и 
// operator, символ операции, который нужно выбрать.
// Метод execute(): Вызывает метод selectOperator на объекте калькулятора, передавая ему выбранный 
// оператор. Этот метод должен быть реализован в объекте калькулятора, чтобы обработать выбор 
// оператора.

// 2. PerformOperationCommand
// Команда для выполнения ранее выбранной операции.

// Конструктор: Принимает один параметр: calculator, объект, над которым будет выполнена операция.
// Метод execute(): Вызывает метод performOperation на объекте калькулятора. Этот метод должен
//  выполнить ранее заданную операцию с учетом текущего значения и выбранного оператора.

// 3. ResetCommand
// Команда для сброса состояния калькулятора.

// Конструктор: Аналогично, принимает calculator, объект, состояние которого нужно сбросить.
// Метод execute(): Вызывает метод reset на объекте калькулятора, который должен сбросить все 
// текущие настройки, введенные значения и операторы, возвращая калькулятор в начальное состояние.
// Общий принцип работы
// Все три команды следуют общему принципу работы паттерна "Команда":

// Они инкапсулируют действие и его параметры в объекте команды.
// Это позволяет выполнить действие в любой момент, вызвав метод execute команды, а также 
// предоставляет возможность легко добавлять новые команды, не изменяя остальную часть кода.
// Этот подход облегчает расширение функционала приложения и делает код более модульным и удобным 
// для тестирования.