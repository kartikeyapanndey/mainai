import React from 'react';

const Testimonials = () => (
  <div className="container-fluid py-5 bg-light">
    <div className="container">
      <div className="text-center mb-5">
        <h2 className="mb-3">What Our Users Say</h2>
        <p>Hear from those who have used PrepEdge to advance their careers.</p>
      </div>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="testimonial-item p-4 rounded bg-white shadow-sm text-center">
            <img src="/testimonial-1.jpg" alt="User 1" className="rounded-circle mb-3" width="80" height="80" />
            <h5>Jane Doe</h5>
            <p className="text-muted">"PrepEdge gave me the confidence and skills I needed to ace my interviews. Highly recommended!"</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="testimonial-item p-4 rounded bg-white shadow-sm text-center">
            <img src="/testimonial-2.jpg" alt="User 2" className="rounded-circle mb-3" width="80" height="80" />
            <h5>John Smith</h5>
            <p className="text-muted">"The mock interviews and resume feedback were spot on. I landed my dream job thanks to PrepEdge!"</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="testimonial-item p-4 rounded bg-white shadow-sm text-center">
            <img src="/testimonial-3.jpg" alt="User 3" className="rounded-circle mb-3" width="80" height="80" />
            <h5>Emily Johnson</h5>
            <p className="text-muted">"A must-have platform for anyone serious about career growth. The AI feedback is amazing!"</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials; 