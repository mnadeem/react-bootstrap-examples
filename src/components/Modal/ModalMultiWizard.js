import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import Step1 from "./Step1";
import Step2 from "./Step2";

export default class ModalMultiWizard extends Component {
  constructor(props) {
    super(props);
    // Set the initial input values
    this.state = {
      currentStep: 1
    };
  }

  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, username, password } = this.state;
    alert(`Your registration detail: \n 
          Email: ${email} \n 
          Username: ${username} \n
          Password: ${password}`);
  };

  onRowSelected = (selectedRow) => {
    console.log("ModalFlow");
    console.log(selectedRow);
    this.setState({ showHideModal1: false, showHideModal2: true });
  };

  onRowSelected2 = (selectedRow) => {
    console.log("ModalFlow2");
    console.log(selectedRow);
    this.setState({ showHide: false, showHideModal2: false });
  };

  openModal = () => {
    this.setState({ showHide: true });
  };

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  _next = () =>  {
    let currentStep = this.state.currentStep
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () =>  {
    let currentStep = this.state.currentStep
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  // The "next" and "previous" button functions
previousButton = () => {
    let currentStep = this.state.currentStep;
    // If the current step is not 1, then render the "previous" button
    if(currentStep !==1){
      return (
        <button 
          className="btn btn-secondary" 
          type="button" onClick={this._prev}>
        Previous
        </button>
      )
    }
    return null;
  }
  
  nextButton = () => {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if(currentStep <2){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this._next}>
        Next
        </button>        
      )
    } 
    return null;
    
  }

  render() {
      let nextButton = this.nextButton();
      let previousButton = this.previousButton();
    return (
      <React.Fragment>
        <Button variant="primary" onClick={() => this.openModal()}>
          Launch Modal MultiWizard
        </Button>

        <Modal show={this.state.showHide}>
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>Table Modal</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h1>A Wizard Form!</h1>
            <p>Step {this.state.currentStep} </p>

            <Step1
              currentStep={this.state.currentStep}
              dataContext= {this.props.dataContext}
            />
            <Step2
              currentStep={this.state.currentStep}
              dataContext= {this.props.dataContext}
            />
           
          </Modal.Body>

          <Modal.Footer>
          {previousButton}
          {nextButton}
            <Button
              variant="secondary"
              onClick={() => this.handleModalShowHide()}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}
