import './App.css';
import Sidenav from './sidenav/sidenav.js';
import Home from './home.js'
import React from 'react';

function App() {
  return (
    <div className="App">
      <Home />
      <Sidenav />
    </div>
  );
}

export default App;
