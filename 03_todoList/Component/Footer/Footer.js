import React, { Component } from 'react'
import propTypes from 'prop-types'
import './Footer.css'
export default class Footer extends Component {
    PropTypes = {
        todoList: propTypes.array.isRequired,
        deleteSelectedItems: propTypes.func.isRequired,
        handleFooterCheckBox: propTypes.func.isRequired
    }
    deleteSelectedItems = () => {
        console.log('deleteSelectedItems')
        this.props.deleteSelectedItems()
    }
    handleChecked = (event) => {
        this.props.handleFooterCheckBox(event.target.checked)
    }
    render() {
        const {todoList} = this.props
        const total = todoList.length
        const completed = todoList.reduce((pre, current) => pre + (current.isDone ? 1 : 0), 0)
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange = {this.handleChecked} checked = {completed === total && total !== 0}/>
                </label>
                <span>
                    <span>Finished {completed}</span> / Total {total}
                </span>
                <button onClick = {this.deleteSelectedItems} className="btn btn-danger">Clear Marked Task</button>
            </div>
        )
    }
}
