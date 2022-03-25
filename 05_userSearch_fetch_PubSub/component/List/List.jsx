import React, { Component } from "react";
import PubSub from 'pubsub-js';
import "./List.css";

export default class List extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.token = PubSub.subscribe('MyData', (msg, data) => {
      this.setState(data);
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }
  render() {
    const { users, isFirst, isLoading, error } = this.state;
    return (
      <div className="row">
        {isFirst ? (
          <h2>Enter the username keyword and press search button</h2>
        ) : isLoading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          users.map((user) => {
            return (
              <div key={user.id} className="card">
                <a rel="noreferrer" href={user.html_url} target="_blank">
                  <img
                    alt="avatar"
                    src={user.avatar_url}
                    style={{ width: "100px" }}
                  />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
