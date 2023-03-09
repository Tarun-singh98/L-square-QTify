import React from 'react';
import './App.css';
import Hero from './components/Hero-section/Hero';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
