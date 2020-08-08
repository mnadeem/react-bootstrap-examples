import React, {Component} from 'react';


export default class Table extends Component {

    render() {
        let propertyAsKey = "name";
        let  columns = [{ heading: 'Name', property: 'name' }, { heading: 'Age', property: 'age' }, { heading: 'Sex', property: 'sex' }, { heading: 'Breed', property: 'breed' },]
        let rows = [{ name: 'Sabrina', age: '6', sex: 'Female', breed: 'Staffordshire' }, { name: 'Max', age: '2', sex: 'Male', breed: 'Boxer' }]
        let result = <div></div>;
        console.log("columns " + columns);
        console.log("rows " + rows);
        
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
