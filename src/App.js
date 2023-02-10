import { ReactComponent as Study } from "./study.svg";
import Dictionary from "./dictionary";
import React from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-picture">
        <Study height={200}/>
        </div>
        <h1>Dictionary</h1>
        <h3>What word would you like to look up?</h3> 
      </header>
      <Dictionary />
      <footer>Coded by <a href="https://lissiemarie90.tech/" target="_blank" rel="noreferrer">Elyssa Creed</a> and is <a href="https://github.com/lissiemarie/dictionary-page" target="_blank" rel="noreferrer">open-sourced</a>.</footer>
    </div>
  );
}

export default App;
