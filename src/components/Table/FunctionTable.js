import React from 'react';
import Table from 'react-bootstrap/Table'

export const FunctionTable = ({ columns, rows, propertyAsKey }) => //Deconstructs your props
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