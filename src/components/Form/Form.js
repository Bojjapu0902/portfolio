import React, { useState } from 'react';
import { site } from '../../data/site';
import MagneticButton from '../Miscellaneous/MagneticButton';

const contactInfo = {
  title: 'Looking for a UI/UX Designer & Front-End Developer?',
  description:
    'I am open to new opportunities. Share the role and I will get back to you — or reach me directly on the details below.',
  phone: site.phone,
  email: site.email,
  address: site.address,
};

const ROLE_TYPES = ['Full-time', 'Contract', 'Part-time', 'Other'];
const WORK_MODES = ['On-site', 'Hybrid', 'Remote'];

const slug = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-');

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    roleType: '',
    workMode: '',
    location: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { id, name, value, type } = e.target;
    const key = type === 'radio' ? name : id;
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to your email service (EmailJS, Formspree, or your own endpoint)
    console.log(formData);
  };

  return (
    <section className="contact-area primary-bg">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-4 order-last order-md-first">
            <div className="contact-info">
              <h3>{contactInfo.title}</h3>
              <p>{contactInfo.description}</p>

              <div className="content contact-form">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="icon icon-phone"></i>
                    <a className="content" href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>
                      {contactInfo.phone}
                    </a>
                  </li>
                  <li className="list-group-item">
                    <i className="icon icon-envelope-open"></i>
                    <a className="content" href={`mailto:${contactInfo.email}`}>
                      {contactInfo.email}
                    </a>
                  </li>
                  <li className="list-group-item">
                    <i className="icon icon-location-pin"></i>
                    <span className="content">{contactInfo.address}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7 order-first order-md-last mt-sm-4 mt-lg-0">
            <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="name">Your name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="email">Email address</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Phone"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <label htmlFor="phone">Phone (optional)</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="company"
                  placeholder="Company"
                  autoComplete="organization"
                  value={formData.company}
                  onChange={handleInputChange}
                />
                <label htmlFor="company">Company / Organisation</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="position"
                  placeholder="Position"
                  value={formData.position}
                  onChange={handleInputChange}
                />
                <label htmlFor="position">Role / Position title</label>
              </div>

              <div className="form-group mb-3">
                <div className="form-label">Type of role:</div>
                <div className="form-input-group">
                  {ROLE_TYPES.map((option) => (
                    <div className="form-input" key={option}>
                      <input
                        type="radio"
                        className="btn-check"
                        name="roleType"
                        id={`role-${slug(option)}`}
                        value={option}
                        checked={formData.roleType === option}
                        onChange={handleInputChange}
                      />
                      <label className="btn magnetic-button btn-outline" htmlFor={`role-${slug(option)}`}>
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group mb-3">
                <div className="form-label">Work mode:</div>
                <div className="form-input-group">
                  {WORK_MODES.map((option) => (
                    <div className="form-input" key={option}>
                      <input
                        type="radio"
                        className="btn-check"
                        name="workMode"
                        id={`mode-${slug(option)}`}
                        value={option}
                        checked={formData.workMode === option}
                        onChange={handleInputChange}
                      />
                      <label className="btn magnetic-button btn-outline" htmlFor={`mode-${slug(option)}`}>
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleInputChange}
                />
                <label htmlFor="location">Job location</label>
              </div>

              <div className="form-floating mb-4">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Tell me about the role"
                  style={{ height: '100px' }}
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <label htmlFor="message">Tell me about the role</label>
              </div>

              <MagneticButton href="/#">
                Send Message
              </MagneticButton>
            </form>
            <p className="form-message"></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
