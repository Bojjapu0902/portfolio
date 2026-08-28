import React from "react";
import { Link, useParams } from "react-router-dom";
import useWorks, { findWork, getSiblings } from "../../hooks/useWorks";

const PortfolioSingleSection = () => {
  const { slug } = useParams();
  const { works, loading, error } = useWorks();

  if (loading) {
    return (
      <section className="content">
        <div className="container">
          <div className="row"><div className="col-12 py-5">Loading project…</div></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="content">
        <div className="container">
          <div className="row"><div className="col-12 py-5">{error}</div></div>
        </div>
      </section>
    );
  }

  const portfolio = findWork(works, slug);

  if (!portfolio) {
    return (
      <section className="content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7 py-5">
              <h2>Project not found</h2>
              <p>
                There is no project at this address. It may have been renamed or removed.
              </p>
              <Link className="btn btn-outline content-btn swap-icon" to="/#works">
                Back to all works <i className="icon bi bi-arrow-right-short"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const { prev, next } = getSiblings(works, portfolio.slug);

  return (
    <section className="content">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-5">
            <div className="heading">
              <div className="portfolio-meta d-flex align-items-center">
                <div className="portfolio-terms">
                  {portfolio.categories.map((category, index) => (
                    <Link key={index} className="terms" to="/#works">
                      {category}
                    </Link>
                  ))}
                </div>
                <span className="date">{portfolio.date}</span>
              </div>
              <h2>{portfolio.title}</h2>
              {portfolio.subtitle && <h6 className="mt-0 mb-3">{portfolio.subtitle}</h6>}
              <p>{portfolio.description}</p>
            </div>
          </div>
          <div className="col-12 col-lg-6 items portfolio-meta mt-3 mt-md-0">
            <div className="task">
              <h6 className="title mb-3">Task</h6>
              <span className="details">{portfolio.task}</span>
            </div>
            <div className="content item d-flex flex-column flex-md-row justify-content-between">
              <div className="role">
                <h6 className="title mt-0 mb-1 mb-md-3">Role/Services</h6>
                <div className="portfolio-terms">
                  {portfolio.role.map((role, index) => (
                    <span key={index} className="terms">{role}</span>
                  ))}
                </div>
              </div>
              <div className="client my-3 my-md-0">
                <h6 className="title mt-0 mb-1 mb-md-3">Company</h6>
                <span>{portfolio.company || portfolio.client}</span>
              </div>
              <div className="category">
                <h6 className="title mt-0 mb-1 mb-md-3">Category &amp; Year</h6>
                <span>{portfolio.categoryYear}</span>
              </div>
            </div>

            {portfolio.liveSite && (
              <div className="socials item">
                <a
                  className="nav-link d-inline-flex swap-icon ms-0"
                  href={portfolio.liveSite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site <i className="icon bi bi-arrow-right-short"></i>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Case study */}
        {(portfolio.challenge || portfolio.solution || portfolio.outcome) && (
          <div className="row case-study items">
            {portfolio.challenge && (
              <div className="col-12 col-md-4 item">
                <h6 className="title">The Challenge</h6>
                <p>{portfolio.challenge}</p>
              </div>
            )}
            {portfolio.solution && (
              <div className="col-12 col-md-4 item">
                <h6 className="title">The Approach</h6>
                <p>{portfolio.solution}</p>
              </div>
            )}
            {portfolio.outcome && (
              <div className="col-12 col-md-4 item">
                <h6 className="title">The Outcome</h6>
                <p>{portfolio.outcome}</p>
              </div>
            )}
          </div>
        )}

        {/* Technologies */}
        {portfolio.technologies?.length > 0 && (
          <div className="row tech-stack">
            <div className="col-12">
              <h6 className="title">Built With</h6>
              <ul className="tech-list list-unstyled">
                {portfolio.technologies.map((tech, index) => (
                  <li key={index} className="tech-chip">{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Gallery */}
        <div className="row portfolio-content items">
          <div className="col-12">
            {portfolio.gallery.map((img, index) => (
              <div key={index} className="item">
                <img src={img} alt={`${portfolio.title} — view ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Prev / Next */}
        {(prev || next) && works.length > 1 && (
          <div className="row project-pager">
            <div className="col-6">
              {prev && (
                <Link className="pager-link prev" to={`/portfolio/${prev.slug}`}>
                  <span className="pager-label">Previous</span>
                  <span className="pager-title">{prev.title}</span>
                </Link>
              )}
            </div>
            <div className="col-6 text-end">
              {next && (
                <Link className="pager-link next" to={`/portfolio/${next.slug}`}>
                  <span className="pager-label">Next</span>
                  <span className="pager-title">{next.title}</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSingleSection;
