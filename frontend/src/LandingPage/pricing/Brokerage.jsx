import React, { useState } from 'react';

function Brokerage() {
    const [activeTab, setActiveTab] = useState('equity');

    return (
        <div className="container my-5 pt-5" style={{ maxWidth: '1100px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
            
            {/* TABS UTILITY */}
            <div className="d-flex border-bottom mb-4" style={{ gap: '3rem' }}>
                <div 
                    onClick={() => setActiveTab('equity')}
                    className={`pb-3 ${activeTab === 'equity' ? 'border-bottom border-primary border-3 text-primary' : 'text-muted'}`} 
                    style={{ cursor: 'pointer', fontWeight: '500', fontSize: '1.25rem', transition: 'all 0.2s' }}
                >
                    Equity
                </div>
                <div 
                    onClick={() => setActiveTab('currency')}
                    className={`pb-3 ${activeTab === 'currency' ? 'border-bottom border-primary border-3 text-primary' : 'text-muted'}`} 
                    style={{ cursor: 'pointer', fontWeight: '500', fontSize: '1.25rem', transition: 'all 0.2s' }}
                >
                    Currency
                </div>
                <div 
                    onClick={() => setActiveTab('commodity')}
                    className={`pb-3 ${activeTab === 'commodity' ? 'border-bottom border-primary border-3 text-primary' : 'text-muted'}`} 
                    style={{ cursor: 'pointer', fontWeight: '500', fontSize: '1.25rem', transition: 'all 0.2s' }}
                >
                    Commodity
                </div>
            </div>

            {/* SEGMENT TABLES */}
            <div className="table-responsive border rounded mb-5" style={{ borderColor: '#eee' }}>
                <table className="table table-borderless m-0" style={{ verticalAlign: 'middle', fontSize: '0.85rem' }}>
                    {activeTab === 'equity' && (
                        <>
                            <thead>
                                <tr className="border-bottom text-muted" style={{ borderColor: '#eee', height: '60px', backgroundColor: '#fbfbfb' }}>
                                    <th className="ps-4 fw-normal" style={{ width: '18%' }}></th>
                                    <th className="fw-normal" style={{ color: '#444' }}>Equity delivery</th>
                                    <th className="fw-normal" style={{ color: '#444' }}>Equity intraday</th>
                                    <th className="fw-normal" style={{ color: '#444' }}>F&O - Futures</th>
                                    <th className="fw-normal pe-4" style={{ width: '28%', color: '#444' }}>F&O - Options</th>
                                </tr>
                            </thead>
                            <tbody style={{ color: '#666' }}>
                                <tr className="border-bottom" style={{ borderColor: '#eee', height: '70px' }}>
                                    <td className="ps-4 text-muted">Brokerage</td>
                                    <td>Zero Brokerage</td>
                                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                    <td className="pe-4">Flat Rs. 20 per executed order</td>
                                </tr>
                                <tr className="border-bottom" style={{ borderColor: '#eee', height: '110px' }}>
                                    <td className="ps-4 text-muted">STT/CTT</td>
                                    <td>0.1% on buy & sell</td>
                                    <td>0.025% on the sell side</td>
                                    <td>0.05% on the sell side</td>
                                    <td className="pe-4 py-3">
                                        <ul className="m-0 p-0 ps-3" style={{ listStyleType: 'disc' }}>
                                            <li className="mb-2">0.15% of the intrinsic value on options that are bought and exercised</li>
                                            <li>0.15% on sell side (on premium)</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="border-bottom" style={{ borderColor: '#eee', height: '80px' }}>
                                    <td className="ps-4 text-muted">Transaction charges</td>
                                    <td>NSE: 0.00307%<br />BSE: 0.00375%</td>
                                    <td>NSE: 0.00307%<br />BSE: 0.00375%</td>
                                    <td>NSE: 0.00183%<br />BSE: 0</td>
                                    <td className="pe-4">NSE: 0.03553% (on premium)<br />BSE: 0.0325% (on premium)</td>
                                </tr>
                                <tr className="border-bottom" style={{ borderColor: '#eee', height: '90px' }}>
                                    <td className="ps-4 text-muted">GST</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td className="pe-4">18% on (brokerage + SEBI charges + transaction charges)</td>
                                </tr>
                                <tr className="border-bottom" style={{ borderColor: '#eee', height: '65px' }}>
                                    <td className="ps-4 text-muted">SEBI charges</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                    <td className="pe-4">₹10 / crore</td>
                                </tr>
                                <tr style={{ height: '65px' }}>
                                    <td className="ps-4 text-muted">Stamp charges</td>
                                    <td>0.015% or ₹1500 / crore on buy side</td>
                                    <td>0.003% or ₹300 / crore on buy side</td>
                                    <td>0.002% or ₹200 / crore on buy side</td>
                                    <td className="pe-4">0.003% or ₹300 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </>
                    )}

                    {activeTab === 'currency' && (
                        <>
                            <thead>
                                <tr className="border-bottom text-muted" style={{ borderColor: '#eee', height: '60px', backgroundColor: '#fbfbfb' }}>
                                    <th className="ps-4 fw-normal" style={{ width: '18%' }}></th>
                                    <th className="fw-normal" style={{ color: '#444' }}>Currency futures</th>
                                    <th className="fw-normal pe-4" style={{ width: '41%', color: '#444' }}>Currency options</th>
                                </tr>
                            </thead>
                            <tbody style={{ color: '#666' }}>
                                <tr className="border-bottom" style={{ borderColor: '#eee', height: '70px' }}>
                                    <td className="ps-4 text-muted">Brokerage</td>
                                    <td>0.03% or ₹ 20/executed order whichever is lower</td>
                                    <td className="pe-4">₹ 20/executed order</td>
                                </tr>
                                <tr className="border-bottom" style={{ borderColor: '#eee', height: '65px' }}>
                                    <td className="ps-4 text-muted">STT/CTT</td>
                                    <td>No STT</td>
                                    <td className="pe-4">No STT</td>
                                </tr>
                                <tr className="border-bottom" style={{ borderColor: '#eee', height: '80px' }}>
                                    <td className="ps-4 text-muted">Transaction charges</td>
                                    <td>NSE: 0.00035%<br />BSE: 0.00045%</td>
                                    <td className="pe-4">NSE: 0.0311%<br />BSE: 0.001%</td>
                                </tr>
                                <tr className="border-bottom" style={{ borderColor: '#eee', height: '90px' }}>
                                    <td className="ps-4 text-muted">GST</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td className="pe-4">18% on (brokerage + SEBI charges + transaction charges)</td>
                                </tr>
                                <tr className="border-bottom" style={{ borderColor: '#eee', height: '65px' }}>
                                    <td className="ps-4 text-muted">SEBI charges</td>
                                    <td>₹10 / crore</td>
                                    <td className="pe-4">₹10 / crore</td>
                                </tr>
                                <tr style={{ height: '65px' }}>
                                    <td className="ps-4 text-muted">Stamp charges</td>
                                    <td>0.0001% or ₹10 / crore on buy side</td>
                                    <td className="pe-4">0.0001% or ₹10 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </>
                    )}

                    {activeTab === 'commodity' && (
                        <>
                            <thead>
                                <tr className="border-bottom text-muted" style={{ borderColor: '#eee', height: '60px', backgroundColor: '#fbfbfb' }}>
                                    <th className="ps-4 fw-normal" style={{ width: '18%' }}></th>
                                    <th className="fw-normal" style={{ color: '#444' }}>Commodity futures</th>
                                    <th className="fw-normal pe-4" style={{ width: '41%', color: '#444' }}>Commodity options</th>
                                </tr>
                            </thead>
                            <tbody style={{ color: '#666' }}>
                                <tr className="border-bottom" style={{ borderColor: '#eee', height: '70px' }}>
                                    <td className="ps-4 text-muted">Brokerage</td>
                                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                    <td className="pe-4">₹ 20/executed order</td>
                                </tr>
                                <tr className="border-bottom" style={{ borderColor: '#eee', height: '65px' }}>
                                    <td className="ps-4 text-muted">STT/CTT</td>
                                    <td>0.01% on sell side (Non-Agri)</td>
                                    <td className="pe-4">0.05% on sell side</td>
                                </tr>
                                <tr className="border-bottom" style={{ borderColor: '#eee', height: '80px' }}>
                                    <td className="ps-4 text-muted">Transaction charges</td>
                                    <td>MCX: 0.0021%<br />NSE: 0.0001%</td>
                                    <td className="pe-4">MCX: 0.0418%<br />NSE: 0.001%</td>
                                </tr>
                                <tr className="border-bottom" style={{ borderColor: '#eee', height: '90px' }}>
                                    <td className="ps-4 text-muted">GST</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td className="pe-4">18% on (brokerage + SEBI charges + transaction charges)</td>
                                </tr>
                                <tr className="border-bottom" style={{ borderColor: '#eee', height: '110px' }}>
                                    <td className="ps-4 text-muted">SEBI charges</td>
                                    <td>Agri:<br />₹1 / crore<br />Non-agri:<br />₹10 / crore</td>
                                    <td className="pe-4">₹10 / crore</td>
                                </tr>
                                <tr style={{ height: '65px' }}>
                                    <td className="ps-4 text-muted">Stamp charges</td>
                                    <td>0.002% or ₹200 / crore on buy side</td>
                                    <td className="pe-4">0.003% or ₹300 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </>
                    )}
                </table>
            </div>

            {/* CALCULATOR BANNER LINK */}
            <div className="text-center my-5 py-4">
                <a href="#" style={{ color: '#387ed1', textDecoration: 'none', fontSize: '1.25rem', fontWeight: '400' }}>
                    Calculate your costs upfront <span style={{ color: '#666' }}>using our brokerage calculator</span>
                </a>
            </div>

            {/* ACCOUNT OPENING SECTION */}
            <div className="mt-5 pt-4">
                <h2 className="fs-3 fw-normal mb-4" style={{ color: '#424242' }}>Charges for account opening</h2>
                <div className="table-responsive border rounded mb-5" style={{ borderColor: '#eee' }}>
                    <table className="table table-borderless m-0" style={{ verticalAlign: 'middle', fontSize: '0.85rem' }}>
                        <thead>
                            <tr className="border-bottom text-muted" style={{ borderColor: '#eee', height: '50px', backgroundColor: '#fbfbfb' }}>
                                <th className="ps-4 fw-normal" style={{ width: '50%', color: '#444' }}>Type of account</th>
                                <th className="fw-normal pe-4" style={{ color: '#444' }}>Charges</th>
                            </tr>
                        </thead>
                        <tbody style={{ color: '#666' }}>
                            <tr className="border-bottom" style={{ borderColor: '#eee', height: '55px' }}>
                                <td className="ps-4">Individual account</td>
                                <td className="pe-4"><span className="badge bg-success px-2 py-1 fw-medium" style={{ backgroundColor: '#4caf50', fontSize: '0.75rem' }}>FREE</span></td>
                            </tr>
                            <tr className="border-bottom" style={{ borderColor: '#eee', height: '55px' }}>
                                <td className="ps-4">Minor account</td>
                                <td className="pe-4"><span className="badge bg-success px-2 py-1 fw-medium" style={{ backgroundColor: '#4caf50', fontSize: '0.75rem' }}>FREE</span></td>
                            </tr>
                            <tr className="border-bottom" style={{ borderColor: '#eee', height: '55px' }}>
                                <td className="ps-4">NRI account</td>
                                <td className="pe-4">₹ 500</td>
                            </tr>
                            <tr className="border-bottom" style={{ borderColor: '#eee', height: '55px' }}>
                                <td className="ps-4">HUF account</td>
                                <td className="pe-4"><span className="badge bg-success px-2 py-1 fw-medium me-1" style={{ backgroundColor: '#4caf50', fontSize: '0.75rem' }}>FREE</span> (online) / ₹ 500 (offline)</td>
                            </tr>
                            <tr style={{ height: '55px' }}>
                                <td className="ps-4">Partnership, LLP, and Corporate accounts (offline only)</td>
                                <td className="pe-4">₹ 500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* DEMAT AMC SECTION */}
            <div className="mt-5 pt-4">
                <h2 className="fs-3 fw-normal mb-3" style={{ color: '#424242' }}>Demat AMC (Annual Maintenance Charge)</h2>
                
                <div className="ps-3 mb-4 border-start border-primary border-3" style={{ backgroundColor: '#f8f9fa', padding: '12px 16px' }}>
                    <p className="m-0 fs-6" style={{ color: '#555' }}>Free for first year *</p>
                </div>

                <p className="small text-muted mb-3">From second year onwards, for BSDA accounts:</p>
                
                <div className="table-responsive border rounded mb-4" style={{ borderColor: '#eee' }}>
                    <table className="table table-borderless m-0" style={{ verticalAlign: 'middle', fontSize: '0.85rem' }}>
                        <thead>
                            <tr className="border-bottom text-muted" style={{ borderColor: '#eee', height: '50px', backgroundColor: '#fbfbfb' }}>
                                <th className="ps-4 fw-normal" style={{ width: '50%', color: '#444' }}>Value of holdings</th>
                                <th className="fw-normal pe-4" style={{ color: '#444' }}>AMC</th>
                            </tr>
                        </thead>
                        <tbody style={{ color: '#666' }}>
                            <tr className="border-bottom" style={{ borderColor: '#eee', height: '55px' }}>
                                <td className="ps-4">Up to ₹4 lakh</td>
                                <td className="pe-4"><span className="badge bg-success px-2 py-1 fw-medium" style={{ backgroundColor: '#4caf50', fontSize: '0.75rem' }}>FREE</span></td>
                            </tr>
                            <tr className="border-bottom" style={{ borderColor: '#eee', height: '55px' }}>
                                <td className="ps-4">₹4 lakh – ₹10 lakh</td>
                                <td className="pe-4">₹100 per year + 18% GST, charged quarterly</td>
                            </tr>
                            <tr style={{ height: '55px' }}>
                                <td className="ps-4">Above ₹10 lakh</td>
                                <td className="pe-4">₹300 per year + 18% GST, charged quarterly</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <p className="text-muted mb-2" style={{ fontSize: '0.825rem' }}>For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of holdings value, charged quarterly.</p>
                <p className="text-muted mb-5" style={{ fontSize: '0.825rem' }}>To learn more about BSDA, <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>click here</a>. To learn more about AMC, <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>click here</a>.</p>
            </div>

            {/* OPTIONAL SERVICES SECTION */}
            <div className="mt-5 pt-4">
                <h2 className="fs-3 fw-normal mb-4" style={{ color: '#424242' }}>Charges for optional value added services</h2>
                <div className="table-responsive border rounded mb-5" style={{ borderColor: '#eee' }}>
                    <table className="table table-borderless m-0" style={{ verticalAlign: 'middle', fontSize: '0.85rem' }}>
                        <thead>
                            <tr className="border-bottom text-muted" style={{ borderColor: '#eee', height: '50px', backgroundColor: '#fbfbfb' }}>
                                <th className="ps-4 fw-normal" style={{ width: '25%', color: '#444' }}>Service</th>
                                <th className="fw-normal" style={{ width: '35%', color: '#444' }}>Billing Frequency</th>
                                <th className="fw-normal pe-4" style={{ color: '#444' }}>Charges</th>
                            </tr>
                        </thead>
                        <tbody style={{ color: '#666' }}>
                            <tr className="border-bottom" style={{ borderColor: '#eee', height: '55px' }}>
                                <td className="ps-4">Tickertape</td>
                                <td>Monthly / Quarterly / Annual</td>
                                <td className="pe-4">Free: 0 | Pro: 249/699/2399</td>
                            </tr>
                            <tr className="border-bottom" style={{ borderColor: '#eee', height: '55px' }}>
                                <td className="ps-4">Smallcase</td>
                                <td>Per transaction</td>
                                <td className="pe-4">Buy & Invest More: 100 | SIP: 10</td>
                            </tr>
                            <tr style={{ height: '55px' }}>
                                <td className="ps-4">Kite Connect</td>
                                <td>Monthly</td>
                                <td className="pe-4">Connect: 500 | Personal: Free</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* CHARGES SECTION */}
            <div className="mt-5 pt-4 border-top">
                <h2 className="fs-3 fw-normal mb-5 mt-4" style={{ color: '#424242' }}>Charges explained</h2>
                
                <div className="row g-5" style={{ fontSize: '0.85rem', lineHeight: '1.7', color: '#666' }}>
                    <div className="col-md-6">
                        <h4 className="fs-6 fw-medium text-dark mb-3">Securities/Commodities transaction tax</h4>
                        <p className="mb-4">Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
                        <p className="mb-4">When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>

                        <h4 className="fs-6 fw-medium text-dark mb-3 mt-4">Transaction/Turnover Charges</h4>
                        <p className="mb-4">Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                        <p className="mb-4">BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                        <p className="mb-4">BSE has revised transaction charges in SS and ST groups to ₹1,000,000 per crore of gross turnover.</p>
                        <p className="mb-4">BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
                        <p className="mb-4">BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>

                        <h4 className="fs-6 fw-medium text-dark mb-3 mt-4">Call & trade</h4>
                        <p className="mb-4">Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>

                        <h4 className="fs-6 fw-medium text-dark mb-3 mt-4">Stamp charges</h4>
                        <p className="mb-4">Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>

                        <h4 className="fs-6 fw-medium text-dark mb-3 mt-4">NRI brokerage charges</h4>
                        <ul className="ps-3 mb-4" style={{ listStyleType: 'disc' }}>
                            <li className="mb-2">For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).</li>
                            <li className="mb-2">For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                            <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                        </ul>

                        <h4 className="fs-6 fw-medium text-dark mb-3 mt-4">Account with debit balance</h4>
                        <p className="mb-4">If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>

                        <h4 className="fs-6 fw-medium text-dark mb-3 mt-4">Charges for Investor's Protection Fund Trust (IPFT) by NSE</h4>
                        <ul className="ps-3 mb-4" style={{ listStyleType: 'disc' }}>
                            <li className="mb-2">Equity and Futures - ₹0.01 per crore + GST of the traded value.</li>
                            <li className="mb-2">Options - ₹0.01 per crore + GST traded value (premium value).</li>
                            <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                        </ul>

                        <h4 className="fs-6 fw-medium text-dark mb-3 mt-4">Margin Trading Facility (MTF)</h4>
                        <ul className="ps-3 mb-4" style={{ listStyleType: 'disc' }}>
                            <li className="mb-2">MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                            <li className="mb-2">MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                            <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
                        </ul>
                    </div>

                    <div className="col-md-6">
                        <h4 className="fs-6 fw-medium text-dark mb-3">GST</h4>
                        <p className="mb-4">Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges )</p>

                        <h4 className="fs-6 fw-medium text-dark mb-3 mt-4">SEBI Charges</h4>
                        <p className="mb-4">Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>

                        <h4 className="fs-6 fw-medium text-dark mb-3 mt-4">DP (Depository participant) charges</h4>
                        <p className="mb-4">₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                        <p className="mb-4">Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                        <p className="mb-4">Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>

                        <h4 className="fs-6 fw-medium text-dark mb-3 mt-4">Pledging charges</h4>
                        <p className="mb-4">₹30 + GST per pledge request per ISIN.</p>

                        <h4 className="fs-6 fw-medium text-dark mb-3 mt-4">AMC (Account maintenance charges)</h4>
                        <p className="mb-4">Free for the first year on all new resident individual accounts.</p>
                        <p className="mb-4">For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Click here</a>.</p>
                        <p className="mb-4">For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Click here</a>.</p>

                        <h4 className="fs-6 fw-medium text-dark mb-3 mt-4">Corporate action order charges</h4>
                        <p className="mb-4">₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>

                        <h4 className="fs-6 fw-medium text-dark mb-3 mt-4">Off-market transfer charges</h4>
                        <p className="mb-4">₹25 per transaction.</p>

                        <h4 className="fs-6 fw-medium text-dark mb-3 mt-4">Physical CMR request</h4>
                        <p className="mb-4">First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>

                        <h4 className="fs-6 fw-medium text-dark mb-3 mt-4">Payment gateway charges</h4>
                        <p className="mb-4">₹9 + GST (Not levied on transfers done via UPI)</p>

                        <h4 className="fs-6 fw-medium text-dark mb-3 mt-4">Delayed Payment Charges</h4>
                        <p className="mb-4">Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. <a href="#" style={{ color: '#387ed1', textDecoration: 'none' }}>Learn more</a>.</p>

                        <h4 className="fs-6 fw-medium text-dark mb-3 mt-4">Trading using 3-in-1 account with block functionality</h4>
                        <ul className="ps-3 mb-4" style={{ listStyleType: 'disc' }}>
                            <li className="mb-2">Delivery & MTF Brokerage: 0.5% per executed order.</li>
                            <li>Intraday Brokerage: 0.05% per executed order.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* DISCLAIMER SECTION */}
            <div className="mt-5 pt-4 border-top" style={{ fontSize: '0.75rem', lineHeight: '1.8', color: '#999' }}>
                <h3 className="fs-6 fw-medium mb-3" style={{ color: '#888' }}>Disclaimer</h3>
                <p className="mb-2">For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
            </div>

        </div>
    );
}

export default Brokerage;