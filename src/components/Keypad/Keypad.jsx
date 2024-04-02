import React from 'react';
import c from './Keypad.module.css'

function Keypad(){
   const buttons = ['C','7', '8', '9', '*', '-',  '4', '5', '6', '/', '+', '1', '2', '3', '=', '.', '(', '0', ')', 'CE']

   return (
      <div className={c.wrapper}>
        {buttons.map(button => (
          <button key={button} className={c.button}>
            {button}
          </button>
        ))}
      </div>
   );
}

export default Keypad;