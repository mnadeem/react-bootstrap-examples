import React, {Component} from 'react';
import { Button } from 'react-bootstrap'
import ModalOne from './ModalOne';
import ModalTwo from './ModalTwo';

export default class ModalFlow extends Component {

    constructor(props){
        super(props);
        this.state = {
            showHideModal1 : false,
            showHideModal2 : false
        } 
    }

    onRowSelected = (selectedRow) => {
        console.log("ModalFlow");
        console.log(selectedRow);
        this.setState({ showHideModal2: !this.state.showHideModal2})
    }

    onRowSelected2 = (selectedRow) => {
        console.log("ModalFlow2");
        console.log(selectedRow);
        
    }

    openModal= () => {
        this.setState({ showHideModal1: !this.state.showHideModal1})
    }

    render () {

        return (
            <div>
                <Button variant="primary" onClick={() => this.openModal()}>
                    Launch Modal Flow
                </Button>
                { this.state.showHideModal1 &&
                    <ModalOne dataContext= { this.props.dataContext} onClose={this.onRowSelected}/>
                }
                { this.state.showHideModal2 &&
                    <ModalTwo dataContext= { this.props.dataContext} onClose={this.onRowSelected2}/>
                }
                
            </div>
        );
    }
}