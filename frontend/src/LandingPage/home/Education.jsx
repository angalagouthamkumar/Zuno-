import React from 'react';

function Education() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src='/images/education.svg' style={{ width: "70%" }}/>
                </div>
                <div className="col-6">
                    <h1 className='fs-2'>Free and open market education</h1>
                    <p>Learn about the stock market, trading strategies, and investment tips from industry experts.</p>
                    <a href='' style={{ textDecoration: "none", color: "#007bff", fontWeight: "500" }}>
                        Learn <i className="fas fa-long-arrow-alt-right ms-2"></i>
                    </a>
                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                     <a href='' style={{ textDecoration: "none", color: "#007bff", fontWeight: "500" }}>
                        TradingQ&A <i className="fas fa-long-arrow-alt-right ms-2"></i>
                    </a>
                </div>
            </div>
        </div>
     );
}

export default Education;
