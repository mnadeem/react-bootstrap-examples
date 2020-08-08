import React from 'react';
import logo from '../svgs/logo.svg';
import './App.css';
import BasicModalExample from './Modal/ModalExample.js';
import DataProvider, { DataContext } from '../providers/DataProvider';
import ModalTable from './Modal/ModalTable';
import ModalFlow from './Modal/ModalFlow'

function App() {
  return (
    <DataProvider >
      <DataContext.Consumer>
        {(dataContext) => (
          <div className="App">
            <BasicModalExample />
            <ModalTable dataContext = {dataContext} />
            <ModalFlow dataContext= {dataContext} />
        </div>
        )}        
      </DataContext.Consumer>
    </DataProvider>
  );
}

export default App;
