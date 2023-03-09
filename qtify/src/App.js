import React from 'react';
import './App.css';
import CardSection from './components/Card-section/CardSection';
import Hero from './components/Hero-section/Hero';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <CardSection/>
    </div>
  );
}

export default App;
