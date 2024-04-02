import React, { Component } from 'react'
import c from './Display.module.css'

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '0'
    };
  }

  componentDidUpdate(prevProps) {
    // Обновляем состояние displayValue, когда props обновляются
    if (prevProps.inputValue !== this.props.inputValue) {
      this.setState({ displayValue: this.props.inputValue });
    }
  }

  render() {
    return (
      <div>
        <p className={c.disp}>{this.state.displayValue}</p>
      </div>
    );
  }
}

export default Display