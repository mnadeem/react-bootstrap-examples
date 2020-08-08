import React, {Component} from 'react';
import Table from 'react-bootstrap/Table'

export default class RTable extends Component {

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
                    {rows.map(item =>
                        <tr key={`${item[propertyAsKey]}-row`}>
                            {radioGroupKey &&
                                <td><input name={radioGroupKey} type="radio" key={`${item[propertyAsKey]}-radio`} onClick={() => this.props.rowSelected(item)} /></td>
                            }                          

                            {columns.map(col => <td key={`${item[propertyAsKey]}-${col.property}`}>{item[col.property]}</td>)}
                        </tr>
                    )}
                </tbody>
            </Table>          
        );
    }
}
