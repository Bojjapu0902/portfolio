import React from 'react';
import About from './AboutOne';
import Services from '../Services/Services';
import Companies from '../Companies/Companies';

const AboutSection = () => {
  return (
    <section className="services">
      <div className="container">
        {/* About Component */}
        <About />

        {/* What I do */}
        <Services />
      </div>

      {/* Companies & products worked on */}
      <Companies />
    </section>
  );
};

export default AboutSection;
