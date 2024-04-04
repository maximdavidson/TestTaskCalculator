import Command from './command';

class Calculator {
   constructor() {
     this.currentValue = 0;
     this.commands = [];
     this.addCommand = new Command((currentValue, value) => currentValue + value, (currentValue, value) => currentValue - value, 0);
     this.subtractCommand = new Command((currentValue, value) => currentValue - value, (currentValue, value) => currentValue + value, 0);
     this.multiplyCommand = new Command((currentValue, value) => currentValue * value, (currentValue, value) => currentValue / value, 1);
     this.divideCommand = new Command((currentValue, value) => currentValue / value, (currentValue, value) => currentValue * value, 1);
     this.pendingOperation = null;
   }
 
   executeCommand(command) {
     this.currentValue = command.execute(this.currentValue, command.value);
     this.commands.push(command);
   }
 
   undoLastCommand() {
     const command = this.commands.pop();
     this.currentValue = command.undo(this.currentValue, command.value);
   }
 
   equalCommand() {
      if (this.pendingOperation) {
        this.executeCommand(this.pendingOperation);
        this.pendingOperation = null;
      }
    }

 
   setPendingOperation(operation) {
     this.pendingOperation = operation;
   }
 }
 
 export default Calculator;
 







// Этот код определяет класс Calculator, который представляет собой калькулятор, способный выполнять и отменять команды. 
// Вот что делает каждый метод:

// constructor: Это конструктор класса, который инициализирует новый экземпляр класса Calculator. 
// Он устанавливает начальное значение currentValue равным 0 и создает пустой массив commands для 
// хранения выполненных команд.
// executeCommand: Этот метод принимает команду в качестве аргумента и выполняет ее, вызывая метод 
// execute команды и передавая текущее значение и значение команды. Затем он добавляет команду в массив commands.
// undoLastCommand: Этот метод отменяет последнюю выполненную команду. Он удаляет последнюю команду из массива 
// commands и вызывает ее метод undo, передавая текущее значение и значение команды.
// В контексте вашего калькулятора, когда пользователь нажимает кнопку, создается и 
// выполняется соответствующая команда. Если пользователь решает отменить последнюю операцию, вызывается метод undoLastCommand. 
// Это позволяет легко добавить функциональность отмены в ваш калькулятор.