import React from 'react';
import "./About.css";
import Section from '../components/Section';
import ProfileCard from './ProfileCard';
import Title from './Title';
import Description from './Description';
import Skills from './Skills/Skills'
const name = "Sohaile Salih";
const email = "sohaile.salih1994@gmail.com";
const role = "Game & Web Developer | Programming Teacher";
const description = "My experience as a self-taught game and web developer as well as a programming teacher gives me a unique perspective that could benefit your team.";
const imageURL = "/0_0_384_N.webp"; // The URL for your profile image

const About = () => {
  return (
    <Section id="about">
      <Title subtitle="Are You Tired of Going Through Identical Resumes?" name={name} />
      <div className="about-card">
        <ProfileCard name={name} email={email} image={imageURL} />
        <Description role={role} description={description} />
        <Skills />
      </div>
    </Section>
  );
};

export default About;