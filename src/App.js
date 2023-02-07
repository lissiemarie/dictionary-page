import { ReactComponent as Study } from "./study.svg";
import React from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Study height={200}/>
        <h1>Dictionary</h1>
        <h3>What word would you like to look up?</h3> 
      </header>
    </div>
  );
}

export default App;
