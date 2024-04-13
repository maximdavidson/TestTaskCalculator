import React from 'react';
import PropTypes from 'prop-types';
import c from './Display.module.css';

class Display extends React.Component {
	render() {
		return (
			<div>
				<p className={c.disp} id="display">
					{this.props.displayValue}
				</p>
			</div>
		);
	}
}

Display.propTypes = {
	displayValue: PropTypes.string.isRequired,
};

export default Display;
