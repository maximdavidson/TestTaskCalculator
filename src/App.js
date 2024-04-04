import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import CalculatorComponent from './components/Calculator/CalculatorComponent';
import Settings from './components/Settings/Setting';
import { GlobalStyles } from './GlobalStyles'; // Импортируйте GlobalStyles
import { lightTheme, darkTheme } from './theme'; // Импортируйте темы
import { ThemeProvider as StyledThemeProvider } from 'styled-components'; // Импортируйте ThemeProvider из styled-components
import { useTheme } from './ThemeContext'; // Используйте ваш хук useTheme

function App() {
  const { theme } = useTheme(); // Получите текущую тему

  // Здесь не нужен ThemeProvider из ThemeContext, так как он должен быть уже применён в index.js
  return (
    <StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="app-wrapper"> 
        <Header/>
        <Routes>
          <Route path='/home' element={<CalculatorComponent/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
      </div>
    </StyledThemeProvider>
  );
}

export default App;

