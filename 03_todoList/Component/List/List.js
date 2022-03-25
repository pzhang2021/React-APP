import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item/Item'
import './List.css'

export default class List extends Component {
    PropTypes = {
        todoList: PropTypes.array.isRequired,
        updateTodoState: PropTypes.func.isRequired,
        deleteItem: PropTypes.func.isRequired
    }
    render() {
        const {todoList, updateTodoState, deleteItem} = this.props;
        return (
            <ul className="todo-main">
                {
                    todoList.map((item) => {
                        return <Item key={item.id} {...item} updateTodoState={updateTodoState} deleteItem={deleteItem}/>
                    })
                }
            </ul>
        )
    }
}
