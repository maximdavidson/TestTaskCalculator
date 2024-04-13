import React from 'react';
import PropTypes from 'prop-types';
import { DisplayText } from './styled';

class Display extends React.Component {
	render() {
		return (
			<div>
				<DisplayText id="display">{this.props.displayValue}</DisplayText>
			</div>
		);
	}
}

Display.propTypes = {
	displayValue: PropTypes.string.isRequired,
};

export default Display;
