import React, { useState } from "react";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";

function Calculator(){
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
         setOperator(buttonValue);
         setValue(parseFloat(displayValue));
         setWaitingForSecondOperand(true);
      } else if (buttonValue === '=') {
         if (operator && value != null) {
            const currentValue = parseFloat(displayValue);
            const newValue = calculate(value, operator, currentValue);
            setDisplayValue(String(newValue));
            setValue(null);
            setOperator(null);
         }
      } else if (buttonValue === 'C') {
         setDisplayValue('0');
         setValue(null);
         setOperator(null);
      } else if (buttonValue === '.') {
         if (!displayValue.includes('.')) {
            setDisplayValue(displayValue + '.');
         }
      } else if (buttonValue === 'CE') {
         setDisplayValue('0');
      }
   };

   return (
      <div>
        <Display displayValue={displayValue} />
        <Keypad onButtonClick={handleButtonClick} />
      </div>
    );
}

function calculate(firstValue, operator, secondValue) {
   if (operator === '+') {
      return firstValue + secondValue;
   } else if (operator === '-') {
      return firstValue - secondValue;
   } else if (operator === '*') {
      return firstValue * secondValue;
   } else if (operator === '/') {
      return firstValue / secondValue;
   } else {
      return secondValue;
   }
}

export default Calculator;