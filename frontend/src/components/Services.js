import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => (
  <div className="container-fluid bg-light mt-5 py-5">
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
          <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Our Services</div>
          <h1 className="mb-4">Our Core Features</h1>
          <p className="mb-4">We provide a comprehensive suite of AI-powered tools designed to give you a competitive edge. From practicing interviews to optimizing your resume, we have you covered.</p>
          <img className="img-fluid" src="/Ai-service.png" alt="AI Service" />
        </div>
        <div className="col-lg-7">
          <div className="row g-4">
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.3s">
                <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                <div className="service-icon btn-square">
                    <i className="fa fa-robot fa-2x"></i>
                </div>
                <h5 className="mb-3">Mock Interview System</h5>
                <p>Prepare for interviews with personalized, AI-driven mock sessions. Receive instant feedback to boost your confidence.</p>
                <Link className="btn px-3 mt-auto mx-auto" to="/interview">Read More</Link>
                </div>
            </div>
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                <div className="service-icon btn-square">
                    <i className="fa fa-chart-line fa-2x"></i>
                </div>
                <h5 className="mb-3">ATS Predictor</h5>
                <p>Check how well your resume scores against job descriptions with our AI-powered ATS checker to improve your chances.</p>
                <Link className="btn px-3 mt-auto mx-auto" to="/ats">Read More</Link>
                </div>
            </div>
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.7s">
                <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                <div className="service-icon btn-square">
                    <i className="fa fa-search fa-2x"></i>
                </div>
                <h5 className="mb-3">Plagiarism Checker</h5>
                <p>Ensure the originality of your documents by checking for potential plagiarism against a vast database of online sources.</p>
                <Link className="btn px-3 mt-auto mx-auto" to="/plagiarism-checker">Read More</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Services; 