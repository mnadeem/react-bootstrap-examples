import React from 'react';
import logo from '../svgs/logo.svg';
import './App.css';
import ModalExample from './Modal/ModalExample.js';
import DataProvider, { DataContext } from '../providers/DataProvider';

function App() {
  return (
    <DataProvider >
      <div className="App">
        <ModalExample />
      </div>
    </DataProvider>
  );
}

export default App;
