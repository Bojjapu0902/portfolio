import React from "react";
import { strengths } from "../../data/awards";

const AwardsTwo = () => {
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-lg-3">
        {/* Intro */}
        <div className="intro">
          <h3 className="title">{strengths.title}</h3>
        </div>
      </div>
      <div className="col-12 col-lg-8">
        <div className="row items">
          {strengths.items.map((item, index) => (
            <div className="col-12 col-md-6 item" key={index}>
              <div className="content">
                {item.image && (
                  <a className="logo" href={item.link || "/about"}>
                    <img src={item.image} alt={item.title || `Strength ${index + 1}`} />
                  </a>
                )}
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsTwo;
