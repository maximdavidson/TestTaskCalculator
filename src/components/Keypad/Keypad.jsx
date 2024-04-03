import React, { useState } from 'react';
import PropTypes from 'prop-types';
import c from './Keypad.module.css'

function Keypad({ onButtonClick }) {
  const [selectedButton, setSelectedButton] = useState(null);
  const buttons = ['C','7', '8', '9', '*', '-',  '4', '5', '6', '/', '+', '1', '2', '3', '=', '.', '(', '0', ')', 'CE']

  const handleClick = (button) => {
    setSelectedButton(button);
    onButtonClick(button);
  }

  return (
    <div className={c.wrapper}>
      {buttons.map(button => (
        <button 
          key={button} 
          className={button === selectedButton ? c.selectedButton : c.button} 
          onClick={() => handleClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
}

Keypad.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Keypad;
