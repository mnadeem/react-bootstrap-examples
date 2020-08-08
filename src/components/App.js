import React from 'react';
import logo from '../svgs/logo.svg';
import './App.css';
import BasicModalExample from './Modal/ModalExample.js';
import DataProvider, { DataContext } from '../providers/DataProvider';
import ModalTable from './Modal/ModalTable';
import ModalFlow from './Modal/ModalFlow'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'

function App() {
  return (
    <DataProvider >
      <DataContext.Consumer>
        {(dataContext) => (
          <div className="App">
          <Container fluid>
            <Row>
              <Col> <BasicModalExample /></Col>
            </Row>
            <Row>
              <Col> <ModalTable dataContext = {dataContext} /></Col>
            </Row>
            <Row>
              <Col> <ModalFlow dataContext= {dataContext} /></Col>
            </Row>
          </Container>            
        </div>
        )}        
      </DataContext.Consumer>
    </DataProvider>
  );
}

export default App;
