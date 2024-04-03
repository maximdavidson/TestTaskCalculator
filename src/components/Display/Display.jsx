import React from 'react'
import c from './Display.module.css'
import PropTypes from 'prop-types';

function Display({ displayValue }) {
  return (
    <div>
      <p className={c.disp}>{displayValue}</p>
    </div>
  );
}

Display.propTypes = {
  displayValue: PropTypes.string.isRequired,
};

export default Display;
