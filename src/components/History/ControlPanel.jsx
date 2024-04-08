import React from 'react';
import PropTypes from 'prop-types';
import c from './History.module.css'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

class ControlPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHistoryOpen: false,
    };
  }

  handleToggleHistory = () => {
    this.setState(prevState => ({
      isHistoryOpen: !prevState.isHistoryOpen
    }), () => {
      this.props.onToggleHistory(this.state.isHistoryOpen);
    });
  };

  render() {
    return (
      <div className="control-panel">
        <button className={c.button} onClick={this.handleToggleHistory}>
          {this.state.isHistoryOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </div>
    );
  }
}

ControlPanel.propTypes = {
  onToggleHistory: PropTypes.func.isRequired
};

export default ControlPanel;
