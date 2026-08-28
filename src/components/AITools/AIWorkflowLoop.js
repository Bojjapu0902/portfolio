import React from 'react';
import { aiWorkflow } from '../../data/aiWorkflow';

/**
 * "AI as part of my everyday workflow." — a full-width numbered row list
 * (number + category rail / title / description), matching the layout on
 * pleurat.com/ai rather than the theme's generic two-column card grid.
 */
const AIWorkflowLoop = () => {
  return (
    <section id="loop" className="ai-loop primary-bg">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7">
            <h3 className="ai-loop-title-heading">
              {aiWorkflow.title1}
              <br />
              <span>{aiWorkflow.title2}</span>
            </h3>
            <p className="ai-loop-subtitle">{aiWorkflow.subtitle}</p>
          </div>
        </div>

        <div className="ai-loop-list">
          {aiWorkflow.steps.map((step) => (
            <div key={step.id} className="ai-loop-row">
              <div className="ai-loop-meta">
                <span className="num">{step.id}</span>
                <span className="category">{step.category}</span>
              </div>
              <h4 className="ai-loop-item-title">{step.title}</h4>
              <p className="ai-loop-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIWorkflowLoop;
