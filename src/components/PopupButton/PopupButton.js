import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { Button, Modal } from "react-bootstrap";
import RTable from '../Table/RTable'

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
    this.props.dataContext.state.fetchTableData();
  };

  render() {
    const {columns, rows} = this.props.dataContext.state.tableData;
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

          <Modal.Body>
          <RTable
                columns={columns}
                rows={rows}
                propertyAsKey='name'
                rowSelected = {this.onRowSelected}
                radioGroupKey = 'tableGroup'
                />

          </Modal.Body>

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