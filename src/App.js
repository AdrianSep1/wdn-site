import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Community from './components/Community';
import Rules from './components/Rules';
import Join from './components/Join';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Community />
      <Rules />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
