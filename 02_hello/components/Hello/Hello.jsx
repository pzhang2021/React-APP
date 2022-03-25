import React, {Component} from 'react';
import hello from './Hello.module.css';

export default class Hello extends Component {
    render() {
        return (
            <div>
                <h1 className = {hello.title}>Hello World</h1>
            </div>
        );
    }
}