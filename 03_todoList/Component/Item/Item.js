import React, { Component } from 'react'
import './Item.css'

export default class Item extends Component {
    state = {
        mouse: false
    }
    handleMouse = (flag) => {
        return () => {
            this.setState({
                mouse: flag
            })
        }
    }
    handleCheck = (id) => {
        return () => {
            this.props.updateTodoState(id)
        }
    }
    deleteItem = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            console.log('delete', id)
            this.props.deleteItem(id)
        }
    }
    render() {
        const {id, title, isDone} = this.props;
        const {mouse} = this.state;
        return (
            <li style = {{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseEnter = {this.handleMouse(true)} onMouseLeave = {this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={isDone} onChange = {this.handleCheck(id)}/>
                    <span>{title}</span>
                </label>
                <button onClick = {() => this.deleteItem(id)} className="btn btn-danger" style = {{display: mouse ? 'block' : 'none'}}>Delete</button>
            </li>
        )
    }
}
