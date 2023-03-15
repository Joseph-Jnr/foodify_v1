import reactLogo from './assets/react.svg'
import React, { useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={isDarkMode ? 'App dark' : 'App light'}>
      <header className="App-header">
        <button onClick={toggleDarkMode}>{isDarkMode ? <MdLightMode /> : <MdDarkMode />}</button>
        <img src={reactLogo} className="App-logo" alt="logo" />
        <p>
          Okay, we're about to cook <span className='font-bold'>Foodify</span>
        </p>
      </header>
    </div>
  );
}

export default App;
