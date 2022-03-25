import React, { Component } from 'react'
import axios from 'axios'

export default class SearchBar extends Component {
    searchUser = () => {
        const {keywordNode: {value: keyword}} = this
        this.props.updateAppState({isFirst: false})
        axios.get(`/api/search/users?q=${keyword}`).then(
            response => {
                this.props.updateAppState({isLoading: false, users: response.data.items})
            },
            error => {
                this.props.updateAppState({isLoading: false, error: error.message})
            }
        )
    }
    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input ref={c => this.keywordNode = c} type="text" placeholder="Enter the name"/>&nbsp;
                        <button onClick={this.searchUser}>Search</button>
                    </div>
                </section>
            </div>
        )
    }
}
