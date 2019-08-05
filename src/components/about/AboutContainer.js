import React from 'react';
import Skills from './Skills';

const AboutContainer = () => {
  return (
    <div className="about-container">
      <div className="header">
        <h2 className="header-text">about me</h2>
      </div>
      <p className="about-text">
        i am currently a computer science student at Georgia Institute of
        Technology.
      </p>
      <p className="about-text">
        i enjoy creating full-stack web apps and also creating mobile apps with
        an emphasis on design.
      </p>
      <p className="about-text">my skills include the following:</p>
      <Skills />
    </div>
  );
};

export default AboutContainer;
