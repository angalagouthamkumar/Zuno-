import React from 'react';

function Pricing() {
    return ( 
        <div className="container mb-5">
            <div className="row">
                <div className="col-4">
                    <h1 className='mb-3 fs-2'>Unbeatable Pricing</h1>
                    <p>Experience the best value for your money with our competitive pricing plans. We offer flexible options to suit your needs, ensuring you get the most out of our services without breaking the bank.</p>
                    <a href='' style={{ textDecoration: "none", color: "#007bff", fontWeight: "500" }}>
                        See Pricing <i className="fas fa-long-arrow-alt-right ms-2"></i>
                    </a>
                </div>
                <div className="col-2"></div>
                <div className="col-6 mb-5">
                    <div className="row text-center">
                        <div className="col p-3 border d-flex flex-column">
                            <h2 className='mb-3'>Basic Plan</h2>
                            <p className='mb-3'>Free equity delivery and direct mutual funds</p>
                            <p className='fw-bold mt-auto mb-0'>₹0/month</p>
                        </div>
                        <div className="col p-3 border d-flex flex-column">
                            <h2 className='mb-3'>Pro Plan</h2>
                            <p className='mb-3'>Intraday and F&O.</p>
                            <p className='fw-bold mt-auto mb-0'>₹149/month</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;