import React, { Component } from 'react';

export const DataContext = React.createContext();

const initialState = {

};

export default class DataProvider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ...initialState,
            someApi: (param) => {

            }
        }
    }

    render() {
        return (
            <DataContext.Provider value={{state: this.state}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}