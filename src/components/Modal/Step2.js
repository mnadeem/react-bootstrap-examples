import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import RTable from "../Table/RTable";

export default class ModalOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHide: true,
    };
  }

  onRowSelected = (selectedRow) => {
    this.setState({ selectedRow: selectedRow });
    this.props.step2SelectedRow(selectedRow);
  };

  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }

    const { columns, rows } = this.props.dataContext.state.table2Data;

    return (
      <div>
       <RTable
              columns={columns}
              rows={rows}
              propertyAsKey="name"
              rowSelected={this.onRowSelected}
              radioGroupKey="tableGroup"
            />
      </div>
    );
  }
}
