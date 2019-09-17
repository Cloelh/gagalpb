import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bdd.js';
import Quizz from "./quiz";

function App() {
  return (

    <div className="App">
      <header className="App-header">
        # point # <br/>
        timer
      </header>
      <Quizz />
    </div>

  );
}



export default App;
