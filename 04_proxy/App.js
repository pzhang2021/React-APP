import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
    getStudentInfo = () => {
        axios.get('http://localhost:3000/api1/students').then(
            response => {
                console.log('success', response.data)
            },
            error => {console.log('error', error)}
        )
    }
    getCarInfo = () => {
        axios.get('http://localhost:3000/api2/cars').then(
            response => {
                console.log('success', response.data)
            },
            error => {console.log('error', error)}
        )
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudentInfo}>Get Student Info</button>
                <button onClick={this.getCarInfo}>Get Car Info</button>
            </div>
        )
    }
}
