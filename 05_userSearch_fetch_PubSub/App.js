import React, { Component } from "react";
import SearchBar from "./component/SearchBar/SearchBar";
import List from "./component/List/List";
export default class App extends Component {

  render() {
    return (
      <div className="container">
        <SearchBar />
        <List />
      </div>
    );
  }
}
