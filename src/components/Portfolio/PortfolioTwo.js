import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import useWorks from "../../hooks/useWorks";

const PortfolioTwo = () => {
  const { works, filters, loading, error } = useWorks();
  const [activeFilter, setActiveFilter] = useState("all");

  const counts = useMemo(() => {
    const map = {};
    filters.forEach(({ id }) => {
      map[id] =
        id === "all"
          ? works.length
          : works.filter((item) => (item.groups || []).includes(id)).length;
    });
    return map;
  }, [works, filters]);

  const visibleWorks = useMemo(
    () =>
      activeFilter === "all"
        ? works
        : works.filter((item) => (item.groups || []).includes(activeFilter)),
    [works, activeFilter]
  );

  if (loading || error) {
    return (
      <section className="works explore-area portfolio-filter pt-0">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 py-5 text-center">
              <span className="text-body-secondary">
                {error ? error : "Loading works…"}
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="works explore-area portfolio-filter pt-0">
      <div className="container p-0">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <div className="btn-group filter-menu" role="group" aria-label="Filter works by category">
              {filters.map(({ id, label }) => (
                <div key={id} className="input-item d-flex">
                  <div className="content">
                    <input
                      type="radio"
                      className="btn-check filter-btn"
                      name="shuffle-filter"
                      id={id}
                      value={id}
                      checked={activeFilter === id}
                      onChange={() => setActiveFilter(id)}
                    />
                    <label className="btn" htmlFor={id}>{label}</label>
                  </div>
                  <span className="count">
                    {String(counts[id] ?? 0).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row filter-items items inner">
          {visibleWorks.map((item) => (
            <div
              key={item.id}
              className="col-12 col-lg-4 item filter-item"
              data-groups={JSON.stringify(item.groups)}
            >
              {/* Portfolio Item */}
              <div className="card portfolio-item layout-2 scale has-shadow">
                <div className="image-holder">
                  {/* Card Thumb */}
                  <Link className="card-thumb" to={`/portfolio/${item.slug}`}>
                    <img src={item.thumbnail} alt={item.title} />
                  </Link>
                </div>
                {/* Card content */}
                <div className="card-content p-2">
                  <div className="heading">
                    <h4 className="title mt-2 mt-md-3 mb-3">{item.title}</h4>
                    <p className="excerpt">{item.excerpt}</p>
                    <div className="show-project">
                      <div className="card-terms">
                        {item.categories.map((category, index) => (
                          <span key={index} className="terms badge">
                            {category}
                          </span>
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
          ))}

          {visibleWorks.length === 0 && (
            <div className="col-12 py-5 text-center">
              <span className="text-body-secondary">No projects in this category yet.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioTwo;
