import React from 'react';

function CreateTicket() {
    return (
        <div className="container my-5 py-5" style={{ maxWidth: '1100px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
            
            <h2 className="fs-4 fw-normal text-dark mb-5" style={{ color: '#444' }}>
                To create a ticket, select a relevant topic
            </h2>

            <div className="row g-5">
                
                <div className="col-md-4">
                    <h3 className="fs-5 fw-normal text-dark mb-4 d-flex align-items-center" style={{ color: '#444' }}>
                        <i className="bi bi-plus-circle me-2" style={{ fontSize: '1.15rem' }}></i> Account Opening
                    </h3>
                    <div className="d-flex flex-column gap-3" style={{ fontSize: '0.9rem' }}>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Online Account Opening</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Offline Account Opening</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Company, Partnership and HUF Account Opening</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>NRI Account Opening</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Charges at Zerodha</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Zerodha IDFC FIRST Bank 3-in-1 Account</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Getting Started</a>
                    </div>
                </div>

                <div className="col-md-4">
                    <h3 className="fs-5 fw-normal text-dark mb-4 d-flex align-items-center" style={{ color: '#444' }}>
                        <i className="bi bi-person me-2" style={{ fontSize: '1.25rem' }}></i> Your Zerodha Account
                    </h3>
                    <div className="d-flex flex-column gap-3" style={{ fontSize: '0.9rem' }}>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Login Credentials</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Account Modification and Segment Addition</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>DP ID and bank details</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Your Profile</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Transfer and conversion of shares</a>
                    </div>
                </div>

                <div className="col-md-4">
                    <h3 className="fs-5 fw-normal text-dark mb-4 d-flex align-items-center" style={{ color: '#444' }}>
                        <i className="bi bi-bar-chart me-2" style={{ fontSize: '1.15rem' }}></i> Trading and Markets
                    </h3>
                    <div className="d-flex flex-column gap-3" style={{ fontSize: '0.9rem' }}>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Margin/leverage, Product and Order types</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Kite Web and Mobile</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Trading FAQs</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Corporate Actions</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Sentinel</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Kite API</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Pi and other platforms</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Stockreports+</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>GTT</a>
                    </div>
                </div>

            </div>

            <div className="row g-5 mt-4">

                <div className="col-md-4">
                    <h3 className="fs-5 fw-normal text-dark mb-4 d-flex align-items-center" style={{ color: '#444' }}>
                        <i className="bi bi-wallet2 me-2" style={{ fontSize: '1.15rem' }}></i> Funds
                    </h3>
                    <div className="d-flex flex-column gap-3" style={{ fontSize: '0.9rem' }}>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Adding Funds</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Fund Withdrawal</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>eMandates</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Adding Bank Accounts</a>
                    </div>
                </div>

                <div className="col-md-4">
                    <h3 className="fs-5 fw-normal text-dark mb-4 d-flex align-items-center" style={{ color: '#444' }}>
                        <i className="bi bi-circle me-2" style={{ fontSize: '1.15rem' }}></i> Console
                    </h3>
                    <div className="d-flex flex-column gap-3" style={{ fontSize: '0.9rem' }}>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Reports</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Ledger</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Portfolio</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>60 Day Challenge</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>IPO</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Referral Program</a>
                    </div>
                </div>

                <div className="col-md-4">
                    <h3 className="fs-5 fw-normal text-dark mb-4 d-flex align-items-center" style={{ color: '#444' }}>
                        <i className="bi bi-circle me-2" style={{ fontSize: '1.15rem' }}></i> Coin
                    </h3>
                    <div className="d-flex flex-column gap-3" style={{ fontSize: '0.9rem' }}>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Understanding Mutual Funds</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>About Coin</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Buying and Selling through Coin</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Starting an SIP</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Managing your Portfolio</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Coin App</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Moving to Coin</a>
                        <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Government Securities</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CreateTicket;