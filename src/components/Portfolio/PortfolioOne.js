import React from "react";
import { Link } from "react-router-dom";
import useWorks from "../../hooks/useWorks";

const PortfolioOne = ({ limit = 4 }) => {
  const { works, loading, error } = useWorks();

  if (loading) {
    return (
      <div className="row">
        <div className="col-12 py-5 text-center">
          <span className="text-body-secondary">Loading works…</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="row">
        <div className="col-12 py-5 text-center">
          <span className="text-body-secondary">{error}</span>
        </div>
      </div>
    );
  }

  const portfolioItems = works.slice(0, limit);

  return (
    <div className="row">
      <div className="stack-wrapper">
        {portfolioItems.map((item) => (
          <div className="stack-item" key={item.id}>
            <div className="card portfolio-item layout-2 scale has-shadow">
              <div className="image-holder">
                <Link className="card-thumb" to={`/portfolio/${item.slug}`}>
                  <img src={item.thumbnail} alt={item.title} />
                </Link>
                <div className="card-overlay">
                  <div className="heading">
                    <h4 className="title mt-2 mt-md-3 mb-3">{item.title}</h4>
                    <div className="show-project">
                      <div className="card-terms">
                        {item.categories.map((category, index) => (
                          <Link className="terms badge outlined" to="/portfolio" key={index}>
                            {category}
                          </Link>
                        ))}
                      </div>
                      <div className="project-link">
                        <Link to={`/portfolio/${item.slug}`}>Show Project</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioOne;
