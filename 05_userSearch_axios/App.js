import React, { Component } from 'react'
import SearchBar from './component/SearchBar/SearchBar'
import List from './component/List/List'
export default class App extends Component {

    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        error: null
    }

    updateAppState = (appState) => {
        this.setState(appState)
    }

    render() {
        return (
            <div className="container">
                <SearchBar updateAppState={this.updateAppState}/>
                <List {...this.state}/>
            </div>
        )
    }
}
