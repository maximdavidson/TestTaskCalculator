import './App.css';

import Header from '@components/Header/Header';
import { HistoryProvider } from '@components/History/HistoryContext';
import ErrorBoundary from '@error/ErrorBoundary';
import CalculatorComponent from '@pages/Calculator/CalculatorComponent';
import Settings from '@pages/Settings/Setting';
import { GlobalStyles } from '@theme/GlobalStyles';
import { darkTheme,lightTheme } from '@theme/theme';
import { useTheme } from '@theme/ThemeContext';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

function App() {
	const { theme } = useTheme();

	return (
		<ErrorBoundary>
			<StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
				<GlobalStyles />
				<HistoryProvider>
					<div className="app-wrapper">
						<Header />
						<Routes>
							<Route path="/" element={<CalculatorComponent />} />
							<Route path="/home" element={<CalculatorComponent />} />
							<Route path="/settings" element={<Settings />} />
						</Routes>
					</div>
				</HistoryProvider>
			</StyledThemeProvider>
		</ErrorBoundary>
	);
}

export default App;
