import React from 'react';
import { aiStack } from '../../data/aiStack';

const BreadcrumbAI = () => {
  return (
    <section id="home" className="breadcrumb-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-content">
              <div className="flex">
                <h1 className="title">{aiStack.title1}</h1>
                <span className="line animate-line"></span>
                <h1 className="title">{aiStack.title2}</h1>
              </div>
              <p className="sub-title w-50 mt-4">{aiStack.subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbAI;
