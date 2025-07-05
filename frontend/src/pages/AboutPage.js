import React from 'react';

const AboutPage = () => (
  <>
    {/* Hero Section */}
    <div className="container-fluid pt-5 bg-primary hero-header">
      <div className="container pt-5">
        <div className="row g-5 pt-5">
          <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
            <h1 className="display-4 text-white mb-4 animated slideInRight">About Us</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">About Us</li>
              </ol>
            </nav>
          </div>
          <div className="col-lg-6 align-self-end text-center text-lg-end">
            <img className="img-fluid" src="/hero-img.png" alt="" style={{maxHeight: 300}} />
          </div>
        </div>
      </div>
    </div>

    {/* About Section */}
    <div className="container-fluid py-5">
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

    {/* Feature Section */}
    <div className="container-fluid bg-primary feature pt-5">
      <div className="container pt-5">
        <div className="row g-5">
          <div className="col-lg-6 align-self-center mb-md-5 pb-md-5 wow fadeIn" data-wow-delay="0.3s">
            <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">Why Choose PrepEdge?</div>
            <h1 className="text-white mb-4">PrepEdge: A Comprehensive Job Training Partner</h1>
            <p className="text-light mb-4">PrepEdge stands out as your top choice for interview preparation due to our comprehensive approach, advanced technology, and full package for job training.<br />Here's how PrepEdge can help you to clear each round of hiring in corporate:</p>
            <div className="d-flex align-items-center text-white mb-3">
              <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                <i className="fa fa-check-circle"></i>
              </div>
              <span>Resume Screening: PrepEdge optimizes resumes with expert feedback, ensuring they stand out in the initial screening process.</span>
            </div>
            <div className="d-flex align-items-center text-white mb-3">
              <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                <i className="fa fa-check-circle"></i>
              </div>
              <span>Online Interview: PrepEdge assists users in creating impactful Video CVs, showcasing their personality and communication skills to potential employers.</span>
            </div>
            <div className="d-flex align-items-center text-white mb-3">
              <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                <i className="fa fa-check-circle"></i>
              </div>
              <span>Panel Interview: Users practice with AI-powered mock phone interviews on PrepEdge, refining their communication skills and answering techniques.</span>
            </div>
            <div className="row g-4 pt-3">
              <div className="col-sm-6">
                <div className="d-flex rounded p-3" style={{ background: 'rgba(256, 256, 256, 0.1)' }}>
                  <i className="fa fa-users fa-3x text-white"></i>
                  <div className="ms-3">
                    <h2 className="text-white mb-0" data-toggle="counter-up">15</h2>
                    <p className="text-white mb-0">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default AboutPage;

 