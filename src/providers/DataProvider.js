import React, { Component } from 'react';

export const DataContext = React.createContext();

const initialState = {
    tableData:{
        columns: [],
        rows: []
    },
    table2Data:{
        columns: [],
        rows: []
    }
};

export default class DataProvider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ...initialState,
            fetchTableData: () => {
                return this.fetchTableData();
            }
        }
    }

    fetchTableData = () => {
        //Ideally get the data from Backend API using Axios
        const columns1 = [{ heading: 'Name', property: 'name' }, { heading: 'Age', property: 'age' }, { heading: 'Sex', property: 'sex' }, { heading: 'Breed', property: 'breed' },]
        const rows1 = [{ name: 'Sabrina', age: '6', sex: 'Female', breed: 'Staffordshire' }, { name: 'Max', age: '2', sex: 'Male', breed: 'Boxer' }]
        
        const columns2 = [{ heading: 'Name', property: 'name' }, { heading: 'Age', property: 'age' }, { heading: 'Salary', property: 'salary' }]
        const rows2 = [{ name: 'Sabrina', age: '6', salary: '455'}, { name: 'Max', age: '2', salary: '665'}]

        let newState = Object.assign({}, this.state);
        this.setState({
            ...newState,
            tableData: {
                columns: columns1,
                rows: rows1
            },
            table2Data:{
                columns: columns2,
                rows: rows2
            }
        })
    }

    render() {
        return (
            <DataContext.Provider value={{state: this.state}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}