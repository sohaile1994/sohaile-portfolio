// src/components/Section.jsx
import React from 'react';

const SubSection = ({id, children, className = "" }) => {
  return (
  <section id={`${id}-sub-section`} className={`component-sub-section pv-md ${className}`}>
    {children}
  </section>
  );
};



export default SubSection;