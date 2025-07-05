import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-dark text-white pt-5 pb-4">
    <div className="container text-center text-md-left">
      <div className="row text-center text-md-left">
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Prep.Edge</h5>
          <p>PrepEdge is your ultimate destination for mastering interviews and career success, powered by AI.</p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Quick Links</h5>
          <p><Link to="/" className="text-white" style={{textDecoration: 'none'}}>Home</Link></p>
          <p><Link to="/about" className="text-white" style={{textDecoration: 'none'}}>About</Link></p>
          <p><Link to="/service" className="text-white" style={{textDecoration: 'none'}}>Services</Link></p>
          <p><Link to="/feedback" className="text-white" style={{textDecoration: 'none'}}>Feedback</Link></p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Features</h5>
          <p><Link to="/interview" className="text-white" style={{textDecoration: 'none'}}>Mock Interview</Link></p>
          <p><Link to="/plagiarism-checker" className="text-white" style={{textDecoration: 'none'}}>Plagiarism Checker</Link></p>
          <p><Link to="/ats" className="text-white" style={{textDecoration: 'none'}}>ATS Predictor</Link></p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
          <p><i className="fas fa-home mr-3"></i> Your City, Country</p>
          <p><i className="fas fa-envelope mr-3"></i> info@prewedge.com</p>
          <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
        </div>
      </div>
      <hr className="mb-4" />
      <div className="row align-items-center">
        <div className="col-md-7 col-lg-8">
          <p>© 2025 Prep.Edge. All Rights Reserved.
            <button style={{textDecoration: 'none', background: 'none', border: 'none', padding: 0, color: 'inherit', cursor: 'pointer'}}>
              <strong className="text-warning"></strong>
            </button>
          </p>
        </div>
        <div className="col-md-5 col-lg-4">
          <div className="text-center text-md-right">
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <button className="btn-floating btn-sm text-white" style={{fontSize: '23px', background: 'none', border: 'none', padding: 0, cursor: 'pointer'}}><i className="fab fa-facebook"></i></button>
              </li>
              <li className="list-inline-item">
                <button className="btn-floating btn-sm text-white" style={{fontSize: '23px', background: 'none', border: 'none', padding: 0, cursor: 'pointer'}}><i className="fab fa-twitter"></i></button>
              </li>
              <li className="list-inline-item">
                <button className="btn-floating btn-sm text-white" style={{fontSize: '23px', background: 'none', border: 'none', padding: 0, cursor: 'pointer'}}><i className="fab fa-instagram"></i></button>
              </li>
              <li className="list-inline-item">
                <button className="btn-floating btn-sm text-white" style={{fontSize: '23px', background: 'none', border: 'none', padding: 0, cursor: 'pointer'}}><i className="fab fa-linkedin"></i></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 