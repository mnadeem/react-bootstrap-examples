import React, {Component} from 'react';

export default class Table extends Component {

    render() {
        const {columns, rows, propertyAsKey} = this.props;
        return (            
            <Table striped bordered hover>
                <thead>
                    <tr>{columns.map(col => <th key={`header-${col.heading}`}>{col.heading}</th>)}</tr>
                </thead>
                <tbody>
                    {rows.map(item =>
                        <tr key={`${item[propertyAsKey]}-row`}>
                            {columns.map(col => <td key={`${item[propertyAsKey]}-${col.property}`}>{item[col.property]}</td>)}
                        </tr>
                    )}
                </tbody>
            </Table>
        );
    }
}