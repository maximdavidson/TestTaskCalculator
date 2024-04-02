import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Keypad from './components/Keypad/Keypad';
import Display from './components/Display/Display';

function App() {
  return (
    <div className="app-wrapper"> 
      <Header/>
      <Display/>
      <Keypad/>
    </div>
  );
}

export default App;
