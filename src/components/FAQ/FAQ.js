import React from 'react';
import { faqData } from '../../data/faq';

const FAQ = () => {
  return (
    <section className="faq">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="intro">
              <h3 className="title">Frequently Asked Questions</h3>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-10">
            <div className="accordion accordion-flush" id="faq-accordion">
              {faqData.map((faq, index) => (
                <div className="accordion-item" key={index}>
                  <h4 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index + 1}`}
                      aria-expanded={index === 0}
                      aria-controls={`collapse${index + 1}`}
                    >
                      {faq.question}
                    </button>
                  </h4>
                  <div
                    id={`collapse${index + 1}`}
                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                    data-bs-parent="#faq-accordion"
                  >
                    <div className="accordion-body">{faq.answer}</div>
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

export default FAQ;
