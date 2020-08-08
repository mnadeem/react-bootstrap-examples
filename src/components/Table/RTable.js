import React, {Component} from 'react';
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'

export default class RTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedRowIndex : -1
        } 
    }

    onRowSelected = (row, index) => {
        this.setState({ selectedRowIndex: index})
        this.props.rowSelected(row);
    }


    render() {
        const {columns, rows, propertyAsKey, radioGroupKey} = this.props;

        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {radioGroupKey &&
                            <th></th>
                        }
                        
                        {columns.map(col => <th key={`header-${col.heading}`}>{col.heading}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {rows.map( (item, index) =>
                        <tr key={`${item[propertyAsKey]}-row`}  onClick={() =>  this.onRowSelected(item, index)} >
                            {radioGroupKey &&
                                <td>
                                    <input checked={ this.state.selectedRowIndex === index }  value={index} name={radioGroupKey} type="radio" key={`${item[propertyAsKey]}-radio`} onClick={() => this.onRowSelected(item, index)} />
                                </td>
                            }
                            {columns.map(col => <td key={`${item[propertyAsKey]}-${col.property}`}>{item[col.property]}</td>)}
                        </tr>
                    )}
                </tbody>
            </Table>          
        );
    }
}
