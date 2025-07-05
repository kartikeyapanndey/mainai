import React from 'react';

const Features = () => (
  <div className="container-fluid bg-primary feature pt-5">
    <div className="container pt-5">
      <div className="row g-5">
        <div className="col-lg-6 align-self-center mb-md-5 pb-md-5 wow fadeIn" data-wow-delay="0.3s">
          <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">Why Choose Us</div>
          <h1 className="text-white mb-4">We're a leader in the market</h1>
          <p className="text-light mb-4">Our platform stands at the forefront of career technology, delivering unparalleled tools and resources. We are dedicated to innovation and excellence, ensuring our users receive the best preparation for their professional journey.</p>
          <div className="d-flex align-items-center text-white mb-3">
            <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
              <i className="fa fa-check"></i>
            </div>
            <span>Personalized, AI-driven feedback</span>
          </div>
          <div className="d-flex align-items-center text-white mb-3">
            <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
              <i className="fa fa-check"></i>
            </div>
            <span>In-depth resume and ATS analysis</span>
          </div>
          <div className="d-flex align-items-center text-white mb-3">
            <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
              <i className="fa fa-check"></i>
            </div>
            <span>Tools to build confidence and skills</span>
          </div>
          <div className="row g-4 pt-3">
            <div className="col-sm-6">
              <div className="d-flex rounded p-3" style={{ background: 'rgba(256, 256, 256, 0.1)' }}>
                <i className="fa fa-users fa-3x text-white"></i>
                <div className="ms-3">
                  <h2 className="text-white mb-0" data-toggle="counter-up">9999</h2>
                  <p className="text-white mb-0">Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="d-flex rounded p-3" style={{ background: 'rgba(256, 256, 256, 0.1)' }}>
                <i className="fa fa-check-circle fa-3x text-white"></i>
                <div className="ms-3">
                  <h2 className="text-white mb-0" data-toggle="counter-up">9999</h2>
                  <p className="text-white mb-0">Project Complete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 align-self-end text-center text-lg-end">
          <img className="img-fluid" src="/feature.png" alt="Feature" />
        </div>
      </div>
    </div>
  </div>
);

export default Features; 