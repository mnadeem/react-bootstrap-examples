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
        
    }

    render() {
        return (
            <DataContext.Provider value={{state: this.state}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}