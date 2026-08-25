import React from 'react';
import { aiWorkflow } from '../../data/aiWorkflow';

/**
 * "AI as part of my everyday workflow." — the seven stations AI sits in
 * across the design-and-build process. Reuses the theme's `experiences`
 * section layout so spacing and type scale stay consistent with the rest
 * of the site.
 */
const AIWorkflowLoop = () => {
  return (
    <section id="loop" className="experiences ai-tools sticky primary-bg">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-3">
            <div className="intro">
              <h3 className="title">
                {aiWorkflow.title1} <br className="d-none d-lg-block" />
                {aiWorkflow.title2}
              </h3>
              <p className="ai-tools-subtitle d-none d-lg-block mt-3">
                {aiWorkflow.subtitle}
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <p className="ai-tools-subtitle d-lg-none mb-4">{aiWorkflow.subtitle}</p>

            <div className="row items">
              {aiWorkflow.steps.map((step) => (
                <div key={step.id} className="col-12 col-md-6 item">
                  <div className="content">
                    <span className="count">{step.id}.</span>
                    <h4 className="title mt-0 mb-3">{step.title}</h4>
                    <p>{step.description}</p>
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

export default AIWorkflowLoop;
