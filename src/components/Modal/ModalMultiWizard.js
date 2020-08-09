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

  onSubmit = () => {
    this.setState({ showHide: false, step1DataCaptured:false, step2DataCaptured:false, currentStep:1})
    
  };

  step1SelectedRow = (selectedRow) => {
    console.log("Step 1 Row");
    console.log(selectedRow);
    this.setState({ step1DataCaptured: true })
  };

  step2SelectedRow = (selectedRow) => {
    console.log("Step 2 Row");
    console.log(selectedRow);
    this.setState({ step2DataCaptured: true })
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
        <Button 
          className="btn btn-secondary" 
          type="button" onClick={this._prev}>
        Previous
        </Button>
      )
    }
    return null;
  }
  
  nextButton = () => {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if(currentStep <2){
      return (
        <Button 
          className="btn btn-primary float-right" 
          type="button"
          onClick={this._next}
          disabled={!this.state.step1DataCaptured}
          >
        Next
        </Button>        
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
          <Modal.Header>
            <Modal.Title>Table Modal</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h1>A Wizard Form!</h1>
            <p>Step {this.state.currentStep} </p>

            <Step1
              currentStep={this.state.currentStep}
              dataContext= {this.props.dataContext}
              step1SelectedRow = {this.step1SelectedRow}
            />
            <Step2
              currentStep={this.state.currentStep}
              dataContext= {this.props.dataContext}
              step2SelectedRow = {this.step2SelectedRow}
            />
           
          </Modal.Body>

          <Modal.Footer>
          {previousButton}
          {nextButton}
            <Button
              variant="primary"
              onClick={() => this.onSubmit()}
              disabled={!this.state.step2DataCaptured}
            >
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}
