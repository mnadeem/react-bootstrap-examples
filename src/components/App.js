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
import TabExample from './Tab/TabExample'
import Card from 'react-bootstrap/Card'
import ModalMultiWizard from './Modal/ModalMultiWizard'

function App() {
  return (
    <DataProvider >
      <DataContext.Consumer>
        {(dataContext) => (
          <div className="App">

          <Card>
            <Card.Header>Modals</Card.Header>
            <Card.Body>
              <Card.Title>Modal Examples</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Container fluid>
                <Row>
                  <Col><BasicModalExample /></Col>
                </Row>
                <Row>
                  <Col> <ModalTable dataContext = {dataContext} /></Col>
                </Row>
                <Row>
                  <Col> <ModalFlow dataContext= {dataContext} /></Col>
                </Row>
                <Row>
                  <Col> <ModalMultiWizard dataContext= {dataContext} /></Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>Cards</Card.Header>
            <Card.Body>
              <Card.Title>Cards Examples</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Container fluid>
               
                <Row>
                  <Col> <TabExample /></Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
         
                      
        </div>
        )}        
      </DataContext.Consumer>
    </DataProvider>
  );
}

export default App;
