import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav-Footer/Nav';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Nav-Footer/Footer';

import Experience from './Experience/Experience';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Nav />
        <div className="page-grid p-md max-width margin-auto"> {/* Add padding */}
          <div className='about-project-container'>
            <About />
            <Experience/>
          </div>
            <Projects />            
          <Contact />
        </div>
        <Footer />
      </div>  
    </Router>
  );
};

export default App;