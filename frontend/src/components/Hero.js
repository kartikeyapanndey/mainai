import React from 'react';

const Hero = () => (
    <div className="container-fluid pt-5 bg-primary hero-header mb-5">
        <div className="container pt-5">
            <div className="row g-5 pt-5">
                <div className="col-lg-8 text-center text-lg-start">
                    <h1 className="display-4 text-white mb-4 animated slideInDown">The Perfect Platform to Boost Your Career</h1>
                    <p className="text-white mb-4 pb-2 animated slideInDown">Unlock your potential with our AI-driven tools for interview preparation, resume enhancement, and plagiarism checking. Get the edge you need to succeed.</p>
                    <a href="#about-section" className="btn btn-primary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Read More</a>
                </div>
                <div className="col-lg-4 d-flex justify-content-center justify-content-lg-end wow fadeIn" data-wow-delay="0.3s">
                    <img className="img-fluid" src="/ai-human.jpg" alt="AI and Human Handshake" />
                </div>
            </div>
        </div>
    </div>
);

export default Hero;
