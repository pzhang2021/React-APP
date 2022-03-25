import React, { Component } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Details from "./Details";

export default class Message extends Component {
    state = {
        message: [
            { id: 1, title: "message001" },
            { id: 2, title: "message002" },
            { id: 3, title: "message003" }
        ]
    }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.message.map(item => {
                return (
                    <li key={item.id}>
                        <Link to={`details/${item.id}/${item.title}`}>{item.title}</Link>
                    </li>
                )
            })
          }
        </ul>
        <hr/>
        <Routes>
            <Route path="details/:id/:title" element={<Details />}/>
        </Routes>
      </div>
    );
  }
}
