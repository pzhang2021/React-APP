import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MyNavLink from '../../components/MyNavLink'
import News from "./News";
import Message from "./Message";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
                <MyNavLink to="news">News</MyNavLink>
            </li>
            <li>
                <MyNavLink to="message">Message</MyNavLink>
            </li>
          </ul>
          <Routes>
            <Route path="news" element={<News />} />
            <Route path="message/*" element={<Message />} />
            <Route path="/" element={<Navigate replace to="news" />} />
          </Routes>
        </div>
      </div>
    );
  }
}
