import React, { Component } from 'react';

export const DataContext = React.createContext();

const initialState = {
    tableData:[]
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
        const columns = [{ heading: 'Name', property: 'name' }, { heading: 'Age', property: 'age' }, { heading: 'Sex', property: 'sex' }, { heading: 'Breed', property: 'breed' },]
        const rows = [{ name: 'Sabrina', age: '6', sex: 'Female', breed: 'Staffordshire' }, { name: 'Max', age: '2', sex: 'Male', breed: 'Boxer' }]
        let newState = Object.assign({}, this.state);
        this.setState({
            ...newState,
            tableData: {columns: columns, rows: rows}
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