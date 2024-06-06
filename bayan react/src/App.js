import React, { useState, createContext } from 'react';
import InputForm from './InputForm';
import './App.css';
import { FaRegSmile } from 'react-icons/fa';

export const NameContext = createContext();

function App() {
  const [name, setName] = useState('');

  return (
    <NameContext.Provider value={{ name, setName }}>
      <div className="App">
        <header className="App-header">
          <h1>Hello <FaRegSmile style={{ fontSize: '30px', color: 'green' }} /></h1>
          <p>{name && `License Input: ${name}`}</p>
        </header>
        <InputForm />
      </div>
    </NameContext.Provider>
  );
}

export default App;
