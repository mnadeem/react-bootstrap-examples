import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { Button, Modal } from "react-bootstrap";
import RTable from "../Table/RTable";

const API_URI = process.env.REACT_APP_API_BASE_URI || '/api';
export default class PopupButton extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      tableDataFetched: false,
      componentVal:''
    };
  }

  handleModalShowHide() {
    this.setState({ show: !this.state.show });
  }

  handleBlur = (e) => {
    console.log(e.target.value);
    if (e.target.value.trim() === '') {
        this.setState({ componentVal: '' });
        this.setState({ tableDataFetched: false });
    } else if (this.state.componentVal !== e.target.value) {
        this.props.dataContext.state.fetchAsyncTableData(e.target.value, () => {
            this.setState({ tableDataFetched: true });
        });       
    }
  };

  onRowSelected = (selectedRow) => {
    this.setState({ selectedRow: selectedRow });
    console.log(selectedRow);
  };

  render() {
    const { columns, rows } = this.props.dataContext.state.tableAsyncData;
    return (
      <React.Fragment>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onBlur={this.handleBlur}
          />
          {this.state.tableDataFetched && (
            <InputGroup.Append>
              <Button
                variant="outline-secondary"
                onClick={() => this.handleModalShowHide()}
              >
                Change
              </Button>
            </InputGroup.Append>
          )}
        </InputGroup>
        <Modal show={this.state.show}>
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>Table Modal</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <RTable
              columns={columns}
              rows={rows}
              propertyAsKey="name"
              rowSelected={this.onRowSelected}
              radioGroupKey="tableGroup"
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
