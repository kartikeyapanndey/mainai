import React from 'react';

const About = () => (
  <div className="container-fluid py-5" id="about-section">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <div className="about-img">
            <img className="img-fluid" src="/about-img.jpg" alt="About" />
          </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">About Us</div>
          <h1 className="mb-4">Elevating Your Interview Preparation with Advanced AI Solutions</h1>
          <p className="mb-4">At PrepEdge, our mission is to revolutionize the way individuals prepare for interviews by harnessing the power of advanced artificial intelligence. We are committed to providing innovative tools and personalized guidance to help you excel in every interview and achieve your career goals. Our focus is on creating a seamless, user-friendly experience that empowers job seekers with the confidence and skills needed to succeed. Whether you're a recent graduate entering the job market or a seasoned professional looking to advance your career, PrepEdge is dedicated to supporting your journey every step of the way.</p>
          <p className="mb-4">Explore how PrepEdge supports your career journey with job interview preparation, resume enhancement, skill development, and performance tracking. Whether you're a recent graduate or a seasoned professional, PrepEdge provides the tools and resources you need to succeed and advance in your career.</p>
          <div className="row g-3">
            <div className="col-sm-6">
              <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>Job Interview Preparation</h6>
              <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Resume Enhancement</h6>
            </div>
            <div className="col-sm-6">
              <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>Career Advancement</h6>
              <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Skill Development</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About; 