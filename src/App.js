import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import CalculatorComponent from './components/Calculator/CalculatorComponent';
import Settings from './components/Settings/Setting';
import { GlobalStyles } from './theme/GlobalStyles'; // Импортируйте GlobalStyles
import { lightTheme, darkTheme } from './theme/theme'; // Импортируйте темы
import { ThemeProvider as StyledThemeProvider } from 'styled-components'; // Импортируйте ThemeProvider из styled-components
import { useTheme } from './theme/ThemeContext'; // Используйте ваш хук useTheme
// import History from './components/History/History';
// import ControlPanel from './components/History/ControlPanel';

function App() {
  const { theme } = useTheme(); // Получите текущую тему

  return (
    <StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="app-wrapper"> 
        <Header/>
        <Routes>
          <Route path='/' element={<CalculatorComponent/>}/>
          <Route path='/home' element={<CalculatorComponent/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
        {/* <div className='history'>
          <History/>
          <ControlPanel/>
        </div> */}
      </div>
    </StyledThemeProvider>
  );
}

export default App;

