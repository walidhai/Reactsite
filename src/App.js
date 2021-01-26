import logo from './logo.svg';
import './App.css';
import KnappTest from './KnappTest.js';
import React, { Component } from "react"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload REACT FOR DOGSDOGSDOGS.
        </p>
        <a
          className="App-link"
          href="./App.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <KnappTest name="dog" header ="{this.state.App-header}"/>
      </header>
      
    </div>
  );
}

export default App;


