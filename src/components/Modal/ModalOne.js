import React, {Component} from 'react';
import { Button, Modal } from 'react-bootstrap'
import RTable from '../Table/RTable'

export default class ModalOne extends Component {

    constructor(props){
        super(props);
        this.state = {
            showHide : true
        } 
    }

    onRowSelected = (selectedRow) => {
        this.setState({ selectedRow : selectedRow })
    }

    close = () => {
        this.setState({ showHide: false })
        this.props.onClose(this.state.selectedRow);
    }

    render () {
        
        const {columns, rows} = this.props.dataContext.state.tableData;
 
         return (
             <div>

                 <Modal show={this.state.showHide}>
                     <Modal.Header>
                         <Modal.Title>Modal One</Modal.Title>
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
                         <Button variant="primary" onClick={() => this.close()}>
                             Select
                         </Button>
                     </Modal.Footer>
                 </Modal>
             </div>
         );
     }
}