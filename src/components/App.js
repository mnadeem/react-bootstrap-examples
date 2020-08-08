import React from 'react';
import logo from '../svgs/logo.svg';
import './App.css';
import BasicModalExample from './Modal/ModalExample.js';
import DataProvider, { DataContext } from '../providers/DataProvider';

function App() {
  return (
    <DataProvider >
      <div className="App">
        <BasicModalExample />
      </div>
    </DataProvider>
  );
}

export default App;
