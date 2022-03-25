import React, { Component } from "react";
import PubSub from "pubsub-js";
// import axios from "axios";

export default class SearchBar extends Component {
  searchUser = async () => {
    const {
      keywordNode: { value: keyword },
    } = this;
    PubSub.publish("MyData", { isFirst: false });

    //#region axios sending request to github api
    // axios.get(`/api/search/users?q=${keyword}`).then(
    //   (response) => {
    //     PubSub.publish("MyData", {
    //       isLoading: false,
    //       users: response.data.items,
    //     });
    //   },
    //   (error) => {
    //     PubSub.publish("MyData", { isLoading: false, error: error.message });
    //   }
    // );
    //#endregion

    // fetch sending request to github api
    try {
      const response = await fetch(`/api/search/users?q=${keyword}`);
      const data = await response.json();
      PubSub.publish("MyData", {
        isLoading: false,
        users: data.items,
      });
    } catch (error) {
        PubSub.publish("MyData", { isLoading: false, error: error.message });
        
    }
  };
  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input
              ref={(c) => (this.keywordNode = c)}
              type="text"
              placeholder="Enter the name"
            />
            &nbsp;
            <button onClick={this.searchUser}>Search</button>
          </div>
        </section>
      </div>
    );
  }
}

