import React from 'react';

function Stats() {
    return ( 
       <div className='container py-5'>
        <div className="row align-items-center"> {/* Vertically centers or aligns items cleanly */}
            <div className="col-md-6 ps-5 pe-4"> {/* Custom padding for better text breathing room */}
                <h1 className='fs-2 mb-4'>Trust with confidence</h1>
                
                <h2 className='fs-5 fw-semibold mt-4 mb-2'>Customer-first always</h2>
                <p className='text-muted small'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                
                <h2 className='fs-5 fw-semibold mt-4 mb-2'>No spam or gimmicks</h2>
                <p className='text-muted small'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <span style={{ color: "#007bff", cursor: "pointer" }}>Our philosophies.</span></p>
                
                <h2 className='fs-5 fw-semibold mt-4 mb-2'>The Zuno universe</h2>
                <p className='text-muted small'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                
                <h2 className='fs-5 fw-semibold mt-4 mb-2'>Do better with money</h2>
                <p className='text-muted small mb-0'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            
            <div className="col-md-6 d-flex flex-column align-items-center justify-content-center pt-4">
                {/* Bumped width up to 100% to match the original layout scale */}
                <img src='/images/ecosystem.png' style={{ width: "100%", maxWidth: "550px" }} alt="Ecosystem" />
                
                <div className='text-center mt-4 d-flex justify-content-center gap-5'>
                    <a href='' style={{ textDecoration: "none", color: "#007bff", fontWeight: "500" }}>
                        Explore our products <i className="fas fa-long-arrow-alt-right ms-2"></i>
                    </a>
                    <a href='' style={{ textDecoration: "none", color: "#007bff", fontWeight: "500" }}>
                        Try Zuno demo <i className="fas fa-long-arrow-alt-right ms-2"></i>
                    </a>
                </div>
            </div>
        </div>
       </div>
     );
}

export default Stats;