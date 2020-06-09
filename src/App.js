import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5,
            margin:0
        }}
    />
);
  return (
    <div className="wrapper">
      <Navbar />
     
      <Home />
    </div>
  );
}

export default App;
