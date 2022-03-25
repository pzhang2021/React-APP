import React, {Component} from 'react';
import {nanoid} from 'nanoid';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import List from './Component/List/List';
export default class App extends Component {
    // initial state
    state = {
        todoList: [
            {id: nanoid(), title: 'Eating', isDone: false},
            {id: nanoid(), title: 'Fishing', isDone: false},
            {id: nanoid(), title: 'Sleeping', isDone: true},
            {id: nanoid(), title: 'Shopping', isDone: false},
        ]   
    }
    addTodoList = (todoObject) => {
        const {todoList} = this.state;
        const newTask = {id: nanoid(), title: todoObject, isDone: false};
        const newTodoList = [newTask, ...todoList];
        this.setState({todoList: newTodoList});
    }
    updateTodoState = (id) => {
        const {todoList} = this.state;
        const newTodoList = todoList.map(item => {
            if (item.id === id) {
                return {...item, isDone: !item.isDone};
            }
            else return item;
        })
        this.setState({todoList: newTodoList});
    }
    deleteItem = (id) => {
        const {todoList} = this.state;
        const newTodoList = todoList.filter(item => item.id !== id);
        this.setState({todoList: newTodoList});
    }
    deleteSelectedItems = () => {
        const {todoList} = this.state;
        const newTodoList = todoList.filter(item => !item.isDone);
        this.setState({todoList: newTodoList});
    }
    handleFooterCheckBox = (isDone) => {
        const {todoList} = this.state;
        const newTodoList = todoList.map(item => {
            return {...item, isDone};
        })
        this.setState({todoList: newTodoList});
    }
    render() {
        const {todoList} = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodoList = {this.addTodoList}/>
                    <List todoList = {todoList} updateTodoState = {this.updateTodoState} deleteItem = {this.deleteItem}/>
                    <Footer todoList = {todoList} deleteSelectedItems = {this.deleteSelectedItems} handleFooterCheckBox = {this.handleFooterCheckBox}/>
                </div>
            </div>
        );
    }
}