import PropTypes from 'prop-types';
import React from 'react';
import { IoIosArrowDown,IoIosArrowUp } from 'react-icons/io';

import { ToggleButton } from './styled';

class ControlPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isHistoryOpen: false,
		};
	}

	handleToggleHistory = () => {
		this.setState(
			(prevState) => ({
				isHistoryOpen: !prevState.isHistoryOpen,
			}),
			() => {
				this.props.onToggleHistory(this.state.isHistoryOpen);
			},
		);
	};

	render() {
		return (
			<div>
				<ToggleButton
					data-testid="control-panel-button"
					onClick={this.handleToggleHistory}
				>
					{this.state.isHistoryOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
				</ToggleButton>
			</div>
		);
	}
}

ControlPanel.propTypes = {
	onToggleHistory: PropTypes.func.isRequired,
};

export default ControlPanel;
