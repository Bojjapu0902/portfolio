import React from 'react';

const BreadcrumbOne = () => {
  const breadcrumbContent = {
    title: "Designing",
    subtitle: "I am B Srinivas — a UI/UX Designer and Front-End Developer based in Hyderabad. Since 2012 I have been designing and building enterprise research platforms, SaaS dashboards and responsive web applications.",
    imageSrc: "/img/photographer.jpg", // TODO: replace with your own photo
    subheading: "since 2012."
  };

  return (
    <section id="home" className="breadcrumb-section">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <div className="content d-flex flex-column justify-content-between">
              <div className="heading w-60">
                <h1 className="title">
                  {breadcrumbContent.title} <img src={breadcrumbContent.imageSrc} alt="B Srinivas" />
                </h1>
                <div className="flex ms-auto">
                  <span className="line animate-line my-3 my-md-0"></span>
                  <h1 className="title">{breadcrumbContent.subheading}</h1>
                </div>
              </div>
              <p className="sub-title w-50 mt-4 ms-auto">
                {breadcrumbContent.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbOne;
