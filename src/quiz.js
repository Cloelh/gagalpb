import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {monuments} from "./bdd";
import App from "./App";

class Quizz extends Component {


    render() {
        let items = monuments.map((item, key) =>
            <li key={item.id}>{item.name}</li>
        );
        return (
            <div>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}

export default Quizz;
