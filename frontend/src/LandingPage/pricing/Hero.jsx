import React from 'react';

function Hero() {
    return (
       <div className="container">
            <div className="row border-bottom p-5 mt-5 text-center">
                <h1>Pricing</h1>
                <h3 className='text-muted fs-5 mt-3'>List of all charges and taxes.</h3>
            </div>
            <div className="row p-5 mt-5">
                <div className="col-4">
                <img src='/images/pricingEquity.svg'></img>
                <h1>
                    Free equity delivery
                </h1>
                <p className='text-muted'>
                    All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage
                </p>
                </div>
                <div className="col-4">
                <img src='/images/intradayTrades.svg'></img>
                <h1>
                    Intraday and F&O trades
                </h1>
                <p className='text-muted'>
                    Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                </p>
                </div>
                <div className="col-4">
                <img src='/images/pricingMF.svg'></img>
                <h1>
                    Free direct MF
                </h1>
                <p className='text-muted'>
                    All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                </p>
                </div>
            </div>
            <div className='container p-5 mb-5'>
            <div className="row text-center">
               <h1 className='mt-5'>Open a Zuno account</h1>
               <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
               <button className='p-2 btn btn-primary fs-5 mb-5' style={{ width: '20%', margin: '0 auto' }}>Signup for free</button>
            </div>

        </div>
       </div>
    );
}

export default Hero;
    