import React from 'react';
import PropTypes from 'prop-types';
import c from './Display.module.css';

class Display extends React.Component {
  render() {
    return (
      <div>
        <p className={c.disp}>{this.props.displayValue}</p>
      </div>
    );
  }
}

Display.propTypes = {
  displayValue: PropTypes.string.isRequired,
};

export default Display;


// function Display({ displayValue })  напомни, как называется такое обращение к пропсам
// Такое обращение к пропсам называется деструктуризацией. Это синтаксис ES6, который позволяет извлекать данные из массивов, объектов и пропсов в React. В данном случае, вы извлекаете displayValue из пропсов компонента Display. Это эквивалентно следующему коду:
// function Display(props) {
//   const displayValue = props.displayValue;
//   // ...
// }