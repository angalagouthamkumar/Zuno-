import React from 'react';

function Hero() {
    return (
        <div style={{ backgroundColor: '#387ed1', color: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
            <div className="container py-5" style={{ maxWidth: '1100px' }}>
                
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <h1 className="fs-5 fw-medium m-0" style={{ letterSpacing: '0.5px' }}>Support Portal</h1>
                    <a href="#" style={{ color: '#fff', textDecoration: 'underline', fontSize: '0.95rem' }}>Track Tickets</a>
                </div>

                <div className="row pt-2 pb-4">
                    <div className="col-md-7 pe-md-5">
                        <h2 className="fs-4 fw-normal mb-4" style={{ lineHeight: '1.4' }}>
                            Search for an answer or browse help topics to create a ticket
                        </h2>
                        
                        <div className="position-relative mb-3">
                            <input 
                                type="text" 
                                className="form-control border-0 py-3 ps-4 pe-5 fs-6" 
                                placeholder="Eg: how do i activate F&O, why is my order getting rejected..."
                                style={{ borderRadius: '4px', color: '#444', boxShadow: 'none' }}
                            />
                            <i className="bi bi-search position-absolute end-0 top-50 translate-middle-y me-4" style={{ color: '#999', fontSize: '1.15rem', cursor: 'pointer' }}></i>
                        </div>

                        <div className="d-flex flex-wrap gap-3 fs-6" style={{ opacity: '0.9' }}>
                            <a href="#" style={{ color: '#fff', textDecoration: 'underline' }}>Track account opening</a>
                            <a href="#" style={{ color: '#fff', textDecoration: 'underline' }}>Track segment activation</a>
                            <a href="#" style={{ color: '#fff', textDecoration: 'underline' }}>Intraday margins</a>
                            <a href="#" style={{ color: '#fff', textDecoration: 'underline' }}>Zuno user manual</a>
                        </div>
                    </div>

                    <div className="col-md-5 ps-md-5 mt-5 mt-md-0">
                        <h3 className="fs-5 fw-medium mb-3">Featured</h3>
                        <ol className="p-0 ps-3 m-0 d-flex flex-column gap-3 fs-6" style={{ lineHeight: '1.5' }}>
                            <li>
                                <a href="#" style={{ color: '#fff', textDecoration: 'underline' }}>Current Takeovers and Delisting - January 2024</a>
                            </li>
                            <li>
                                <a href="#" style={{ color: '#fff', textDecoration: 'underline' }}>Latest Intraday leverages - MIS & CO</a>
                            </li>
                        </ol>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Hero;