import React from 'react';
import { aiTools } from '../../data/aiTools';

/**
 * AI Tools section.
 * Uses the theme's existing `experiences` / `awards` section layout so the
 * spacing, type scale and sticky scroll behaviour stay consistent site-wide.
 */
const AITools = () => {
  return (
    <section className="experiences ai-tools sticky primary-bg">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-3">
            {/* Intro */}
            <div className="intro">
              <h3 className="title">{aiTools.title}</h3>
              <p className="ai-tools-subtitle d-none d-lg-block mt-3">
                {aiTools.subtitle}
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <p className="ai-tools-subtitle d-lg-none mb-4">{aiTools.subtitle}</p>

            <div className="row items">
              {aiTools.groups.map((group) => (
                <div key={group.id} className="col-12 col-md-6 item">
                  <div className="content">
                    <span className="count">{group.id}.</span>
                    <h4 className="title mt-0 mb-3">{group.title}</h4>
                    <p>{group.description}</p>

                    <ul className="ai-tools-list list-unstyled">
                      {group.tools.map((tool, index) => (
                        <li key={index} className="ai-tool-chip">
                          {tool}
                        </li>
                      ))}
                    </ul>
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

export default AITools;
