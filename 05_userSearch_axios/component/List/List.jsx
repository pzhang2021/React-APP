import React, { Component } from 'react'
import './List.css'

export default class List extends Component {
    render() {
        const {users, isFirst, isLoading, error} = this.props
        return (
            <div className="row">
                {
                    isFirst ? <h2>Enter the username keyword and press search button</h2> :
                    isLoading ? <h2>Loading...</h2> :
                    error ? <h2>{error}</h2> :  
                    users.map((user) => {
                        return (
                            <div key={user.id} className="card">
                                <a rel="noreferrer" href={user.html_url} target="_blank">
                                    <img alt="avatar" src={user.avatar_url} style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">{user.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
