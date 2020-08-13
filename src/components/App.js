import React from "react";
import logo from "../svgs/logo.svg";
import "./App.css";
import BasicModalExample from "./Modal/ModalExample.js";
import DataProvider, { DataContext } from "../providers/DataProvider";
import ModalTable from "./Modal/ModalTable";
import ModalFlow from "./Modal/ModalFlow";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TabExample from "./Tab/TabExample";
import Card from "react-bootstrap/Card";
import ModalMultiWizard from "./Modal/ModalMultiWizard";
import Jumbotron from "react-bootstrap/Jumbotron";
import ListGroup from "react-bootstrap/ListGroup";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav'
import PopupButton from './PopupButton/PopupButton';

function App() {
  return (
    <DataProvider>
      <DataContext.Consumer>
        {(dataContext) => (
          <div className="App">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>                  
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">More deets</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Jumbotron fluid>
              <Container>
                <h1>Modal Window Examples</h1>
                <p>
                  <ListGroup>
                    <ListGroup.Item>
                      <BasicModalExample />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <ModalTable dataContext={dataContext} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <ModalFlow dataContext={dataContext} />
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <ModalMultiWizard dataContext={dataContext} />
                    </ListGroup.Item>
                    <ListGroup.Item >
                      <PopupButton dataContext={dataContext} />
                    </ListGroup.Item>
                  </ListGroup>
                </p>
              </Container>
              <Container>
                <h1>Tab Examples</h1>
                <ListGroup>
                  <ListGroup.Item>
                    <TabExample />
                  </ListGroup.Item>
                </ListGroup>
              </Container>
            </Jumbotron>         
          </div>
        )}
      </DataContext.Consumer>
    </DataProvider>
  );
}

export default App;
