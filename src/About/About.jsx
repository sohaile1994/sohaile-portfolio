import React from 'react';

const About = () => {
  return (
    <section id="about" className="p-lg">
      <h3> Tired of Looking Through Identical Resumes?</h3>
      <h2 className="text-xl font-bold mb-lg">Introducing Sohaile Salih</h2>
      <div id='profile-image' style={{
        backgroundImage:`url("public/0_0_384_N.webp")`,
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
        backgroundSize:"contain",
        }}>
        
      </div>
      <p className="about-description">
      My experience as a self-taught game and web developer and a programming teacher has shaped a unique perspective that I think could really benefit your team. 
      </p>
     
    </section>
  );
};

export default About;