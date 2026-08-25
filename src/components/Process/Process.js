import React from 'react';
import { process } from '../../data/process';

const Process = () => {
  return (
    <section className="experiences process sticky primary-bg">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-3">
            {/* Intro */}
            <div className="intro">
              <h3 className="title reveal-text">{process.title}</h3>
              <p className="d-none d-lg-block mt-3">{process.subtitle}</p>
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <p className="d-lg-none mb-4">{process.subtitle}</p>

            <div className="row items">
              {process.items.map((item) => (
                <div key={item.id} className="col-12 col-md-6 item">
                  <div className="content">
                    <i className={`icon ${item.icon}`}></i>
                    <h4 className="mt-3 mb-2">{item.title}</h4>
                    <p>{item.description}</p>
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

export default Process;
