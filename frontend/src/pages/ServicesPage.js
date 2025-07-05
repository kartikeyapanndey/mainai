import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage = () => (
  <>
    {/* Hero Section */}
    <div className="container-fluid pt-5 bg-primary hero-header">
      <div className="container pt-5">
        <div className="row g-5 pt-5">
          <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
            <h1 className="display-4 text-white mb-4 animated slideInRight">Our Services</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Our Services</li>
              </ol>
            </nav>
          </div>
          <div className="col-lg-6 align-self-end text-center text-lg-end">
            <img className="img-fluid" src="/hero-img.png" alt="" style={{maxHeight: 300}} />
          </div>
        </div>
      </div>
    </div>

    {/* Services Section */}
    <div className="container-fluid bg-light py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
            <div className="col-lg-8 text-center wow fadeIn" data-wow-delay="0.1s">
                <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Our Services</div>
                <h1 className="mb-4">Our Core Features</h1>
                <p className="mb-5">We provide a comprehensive suite of AI-powered tools designed to give you a competitive edge. From practicing interviews to optimizing your resume and ensuring originality, we have you covered.</p>
            </div>
        </div>
        <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.3s">
                <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                    <div className="service-icon btn-square">
                        <i className="fa fa-robot fa-2x"></i>
                    </div>
                    <h5 className="mb-3">Mock Interview System</h5>
                    <p>Prepare for interviews with personalized, AI-driven mock sessions. Receive instant feedback to boost your confidence.</p>
                    <Link className="btn px-3 mt-auto mx-auto" to="/interview">Read More</Link>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                    <div className="service-icon btn-square">
                        <i className="fa fa-chart-line fa-2x"></i>
                    </div>
                    <h5 className="mb-3">ATS Predictor</h5>
                    <p>Check how well your resume scores against job descriptions with our AI-powered ATS checker to improve your chances.</p>
                    <Link className="btn px-3 mt-auto mx-auto" to="/ats">Read More</Link>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.7s">
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
  </>
);

export default ServicesPage; 