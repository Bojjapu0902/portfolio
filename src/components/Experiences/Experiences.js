import React from 'react';
import { experiences } from '../../data/experience';

const Experiences = () => {
  return (
    <section className="experiences sticky primary-bg">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-3">
            {/* Intro */}
            <div className="intro">
              <h3 className="title">Experience</h3>
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <div className="row items">
              {experiences.map((experience) => (
                <div key={experience.id} className="col-12 col-md-6 item">
                  <div className="content">
                    <span className="count">{experience.count}</span>
                    <h4 className="title mt-0 mb-3">{experience.title}</h4>
                    <h6 className="position my-3">{experience.position}</h6>
                    <span className="badge small">{experience.date}</span>
                    <p>{experience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
