import React, {Component} from 'react';
import { Button, Modal } from 'react-bootstrap'
import RTable from '../Table/RTable'

export default class ModalFlow extends Component {
    
    componentDidMount () {
        this.props.dataContext.state.fetchTableData(); 
    }

    constructor(props){
        super(props);
        this.state = {
            abc : true,
            showHide : false
        } 
    }

    onRowSelected = (selectedRow) => {
        this.setState({ selectedRow : selectedRow })
        console.log(selectedRow);
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }
    
    render() {
        
       const {columns, rows} = this.props.dataContext.state.tableData;

        return (
            <div>
                <Button variant="primary" onClick={() => this.handleModalShowHide()}>
                    Launch Modal Flow
                </Button>

                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                        <Modal.Title>Modal Flow</Modal.Title>
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
                        <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                            Close
                        </Button>                    
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}