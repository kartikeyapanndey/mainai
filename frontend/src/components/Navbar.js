import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="container-fluid sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark p-0">
          <Link to="/" className="navbar-brand">
            <h1 className="text-white">Prep<span className="text-dark">.</span>Edge</h1>
          </Link>
          <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <NavLink to="/" className="nav-item nav-link">Home</NavLink>
              <NavLink to="/about" className="nav-item nav-link">About</NavLink>
              <NavLink to="/service" className="nav-item nav-link">Services</NavLink>
              <NavLink to="/feedback" className="nav-item nav-link">Feedback</NavLink>
              {user ? (
                <div className="d-flex align-items-center">
                  <span className="nav-item nav-link text-white">Welcome, {user.username}</span>
                  <button onClick={logout} className="nav-item nav-link btn btn-link text-white">Logout</button>
                </div>
              ) : (
                <div className="d-flex align-items-center">
                  <NavLink to="/login" className="nav-item nav-link">Login</NavLink>
                  <span className="text-white mx-1">|</span>
                  <NavLink to="/signup" className="nav-item nav-link">Sign Up</NavLink>
                </div>
              )}
            </div>
            <button type="button" className="btn text-white p-0 d-none d-lg-block" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar; 