import logo from './logo.svg';
import './App.css';
import { restarentsService } from './services/restarents';
import { useState, useEffect } from "react";
import MainRouter from './routing/MainRouter';

function App() {


  return (
    <div className="App">
      <MainRouter />
    </div>
  );
}

export default App;
