import React from 'react';
import { aiStack, toolLabels } from '../../data/aiStack';
import ToolIcons from './ToolIcons';

/**
 * Flat "tool strip" grid, adapted from the tools row on pleurat.com/ai —
 * a bordered icon tile per tool with its name underneath.
 */
const AIToolStack = () => {
  return (
    <section className="ai-stack primary-bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="ai-stack-grid">
              {aiStack.tools.map((key) => {
                const Icon = ToolIcons[key];
                return (
                  <div key={key} className="ai-stack-item">
                    <div className="ai-stack-icon">{Icon ? <Icon /> : null}</div>
                    <span className="ai-stack-label">{toolLabels[key]}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIToolStack;
