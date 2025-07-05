import React from 'react';

const SearchModal = () => (
  <div className="modal fade" id="searchModal" tabIndex="-1">
    <div className="modal-dialog modal-fullscreen">
      <div className="modal-content" style={{ background: 'rgba(20, 24, 62, 0.7)' }}>
        <div className="modal-header border-0">
          <button type="button" className="btn btn-square bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body d-flex align-items-center justify-content-center">
          <div className="input-group" style={{ maxWidth: 600 }}>
            <input type="text" className="form-control bg-transparent border-light p-3" placeholder="Type search keyword" />
            <button className="btn btn-light px-4"><i className="bi bi-search"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SearchModal; 