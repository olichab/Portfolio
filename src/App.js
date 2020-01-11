import React from 'react';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import Bio from './components/Bio';
import Projets from './components/Projets';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Bio />
      <Projets />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
