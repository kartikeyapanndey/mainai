import React from 'react';

const ResumePage = () => (
  <>
    {/* Hero Section */}
    <div className="container-fluid pt-5 bg-primary hero-header">
      <div className="container pt-5">
        <div className="row g-5 pt-5">
          <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
            <h1 className="display-4 text-white mb-4 animated slideInRight">Resume Hub</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
                <li className="breadcrumb-item"><button className="text-white" style={{background:'none',border:'none',padding:0,cursor:'pointer'}}>Features</button></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Resume Hub</li>
              </ol>
            </nav>
          </div>
          <div className="col-lg-6 align-self-end text-center text-lg-end">
            <img className="img-fluid" src="/hero-img.png" alt="" style={{maxHeight: 300}} />
          </div>
        </div>
      </div>
    </div>

    {/* Resume Section */}
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="about-img">
              <img className="img-fluid" src="/ai-resume.png" alt="Resume" />
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Mock Interview System</div>
            <h1 className="mb-4">Enhance your resume with detailed, expert feedback tailored to attract employers.</h1>
            <div className="row g-3">
              <div className="col-sm-6">
                <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>Resume Building Tips</h6>
                <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Remove Plagarism</h6>
              </div>
              <div className="col-sm-6">
                <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>Get Realtime Feedbacks</h6>
                <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Get AI Feedback</h6>
              </div>
            </div>
            <div className="d-flex align-items-center mt-4">
              <a className="btn btn-primary rounded-pill px-4 me-3" href="/publiic/index.html">Conduct Interview</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ResumePage; 