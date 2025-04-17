import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the open/close status of the menu

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle the menu open state
  };

  return (
    <header className="header">
      <div className="container">
        <div className="hamburger" onClick={handleToggle}>
          <svg
            className="icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </div>
        {/* Navigation Links */}
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>
            <button className="nav-button">About</button>
          </Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>
            <button className="nav-button">Projects</button>
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <button className="nav-button">Contact</button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Nav;