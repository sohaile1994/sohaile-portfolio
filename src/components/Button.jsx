// src/components/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';


const Button = ({ onClick, children, type = "button", className = "" }) => {
  return (
    <button type={type} onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
};


export default Button;