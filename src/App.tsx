import React from 'react';
import jason from './jason.png';
import trevor from './trevor.png';
import squirrel from './squirrel.jpg';
import './App.css';
import Timer from "./Timer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-header-logo">Vegas 2032</h1>
      </header>
      <main className="App-content">
        <Timer />
        <div className="App-heads">
          <img src={jason} className="App-head App-head-jason" alt="jason" />
          <img src={trevor} className="App-head App-head-trevor" alt="trevor" />
        </div>
        <p className="App-tagline">
          Who will pay the troll toll?
        </p>
          <img src={squirrel} alt="" />
      </main>
    </div>
  );
}

export default App;
