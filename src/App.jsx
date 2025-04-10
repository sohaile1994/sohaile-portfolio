import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav-Footer/Nav';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Nav-Footer/Footer';
import Skills from './Skills/Skills';
import "./App.css"
const App = () => {
  return (
    <Router>
      <div className="app">
        <Nav />
        <div className="p-md"> {/* Add padding */}
          <About />
          <Projects />
          <Skills/>
          <Contact />
        </div>
        <Footer />
      </div>  
    </Router>
  );
};

export default App;