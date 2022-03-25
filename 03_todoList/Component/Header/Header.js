import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Header.css'

export default class Header extends Component {

    PropTypes = {
        addTodoList: PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {
        if (event.keyCode !== 13) return;
        console.log(event.target.value);
        this.props.addTodoList(event.target.value);
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp = {this.handleKeyUp} type="text" placeholder="Please input your task and press enter"/>
            </div>
        )
    }
}
