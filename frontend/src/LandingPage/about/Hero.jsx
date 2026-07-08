import React from 'react';

function Hero() {
    return (
        <div className="container">
            <div className="row p-5 mt-5 mb-5 text-muted " style={{lineHeight : "1.8" , fontSize:"1.2em"}}>
                <h1 className='fs-2 text-center'>We pioneered the discount broking model in India.<br /> Now, we are breaking ground with our technology.</h1>
            </div>
            <div className="row p-5 mt-5 border-top">
                <div className="col-6 p-5">
                    <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zuno, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                    <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                    <p>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className="col-6 p-5">
                    <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                    <p>Our commitment to education and support has made us a trusted partner for millions of traders and investors across the country.</p>
                    <p>We believe that informed clients are successful clients, and we strive to provide the best resources and tools to help them achieve their financial goals.</p>
                </div>
            </div>
                
        </div>
    );
}

export default Hero;
