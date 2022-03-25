import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink"; // MyNavLink is a custom component

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <Header />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-2">
            <div className="list-group">
              <MyNavLink to="about">About</MyNavLink>
              <MyNavLink to="home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Routes>
                  <Route path="about" element={<About />} />
                  <Route path="home/*" element={<Home />} />
                  <Route path="/" element={<Navigate replace to="/about" />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
