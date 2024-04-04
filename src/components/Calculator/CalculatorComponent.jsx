import React, { useState } from 'react';
// import Command from "../../commands/command";
import Calculator from "../../commands/Calculator";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";

let calculator = new Calculator;

function CalculatorComponent() {
  const [displayValue, setDisplayValue] = useState('0');


  const handleButtonClick = (button) => {
    switch(button) {
      case 'C':
        setDisplayValue('0');
        break;
      case '=':
        calculator.equalCommand();
        setDisplayValue(calculator.currentValue);
        break;
      case 'CE':
        setDisplayValue(displayValue.slice(0, -1));
        break;
      default:
        setDisplayValue(prevValue => prevValue === '0' ? button : prevValue + button);
        break;
    }
  };

  return (
    <div>
      <Display displayValue={displayValue} />
      <Keypad onButtonClick={handleButtonClick} />
    </div>
  );
}

export default CalculatorComponent;
