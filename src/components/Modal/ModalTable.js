import React, {Component} from 'react';
import { Button, Modal } from 'react-bootstrap'
import {FunctionTable} from '../Table/FunctionTable'

export default class ModalTable extends Component {
    componentDidMount () {
        this.props.dataContext.state.fetchTableData(); 
    }

    constructor(props){
        super(props);
        this.state = {
            showHide : false
        } 
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }
    
    render() {
        
       const {columns, rows} = this.props.dataContext.state.tableData;

        return (
            <div>
                <Button variant="primary" onClick={() => this.handleModalShowHide()}>
                    Launch Basic Table Modal
                </Button>

                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                        <Modal.Title>Basic Table Modal</Modal.Title>
                    </Modal.Header>
                    
                    <Modal.Body>
                    <FunctionTable
                        columns={columns}
                        rows={rows}
                        propertyAsKey='name' //The data property to be used as a key
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