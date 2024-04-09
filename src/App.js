import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '@components/Header/Header';
import CalculatorComponent from '@components/Calculator/CalculatorComponent';
import Settings from '@components/Settings/Setting';
import { GlobalStyles } from '@theme/GlobalStyles';
import { lightTheme, darkTheme } from '@theme/theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useTheme } from '@theme/ThemeContext';
import { HistoryProvider } from '@components/History/HistoryContext';
import ErrorBoundary from '@error/ErrorBoundary';

function App() {
  const { theme } = useTheme(); // Получите текущую тему

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
