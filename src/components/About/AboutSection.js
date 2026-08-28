import React from 'react';
import About from './AboutOne';
import Services from '../Services/Services';
import Companies from '../Companies/Companies';

const AboutSection = () => {
  return (
    <section className="services">
      <div className="container">
        {/* About Component */}
        <About buttonText="Get In Touch" buttonLink="/#contact" />

        {/* What I do */}
        <Services />
      </div>

      {/* Companies & products worked on */}
      <Companies />
    </section>
  );
};

export default AboutSection;
