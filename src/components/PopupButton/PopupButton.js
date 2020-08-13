import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { Button, Modal } from "react-bootstrap";

export default class PopupButton extends Component {
  constructor() {
    super();
    this.state = {
      showHide: false,
    };
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }

  handleBlur = (e) => {
    console.log(e);
  };

  render() {
    return (
      <React.Fragment>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onBlur={this.handleBlur}
          />
          <InputGroup.Append>
            <Button
              variant="outline-secondary"
              onClick={() => this.handleModalShowHide()}
            >
              Change
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <Modal show={this.state.showHide}>
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>Table Modal</Modal.Title>
          </Modal.Header>

          <Modal.Body></Modal.Body>

          <Modal.Footer>
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
