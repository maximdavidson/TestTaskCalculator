import React from 'react';
import { ThemeContext } from '@theme/ThemeContext';
import { HistoryContext } from '@components/History/HistoryContext';
import Snackbar from './Snackbar';
import { Wrapper, Title, Select, Option, Button } from './styled';

class Settings extends React.Component {
	static contextType = ThemeContext;

	constructor(props) {
		super(props);
		this.state = {
			isSnackbarVisible: false,
		};
	}

	handleThemeChange = (event) => {
		this.context.setTheme(event.target.value);
	};

	render() {
		return (
			<HistoryContext.Consumer>
				{({ clearHistory }) => (
					<Wrapper>
						<Title>Settings</Title>
						<div>
							<label htmlFor="theme">Switch Theme</label>
							<Select
								id="theme"
								name="theme"
								value={this.context.theme}
								onChange={this.handleThemeChange}
							>
								<Option value="light">Light theme</Option>
								<Option value="dark">Dark theme</Option>
							</Select>
							<Button
								onClick={() => {
									clearHistory();
									this.setState({ isSnackbarVisible: true });
								}}
							>
								Clear History
							</Button>
							<Snackbar
								isVisible={this.state.isSnackbarVisible}
								message="History cleared"
							/>
						</div>
					</Wrapper>
				)}
			</HistoryContext.Consumer>
		);
	}
}

export default Settings;
