import React from 'react';

function LeftSection({imageUrl, Prod, ProdDesc ,tryDemo,learnMore,googlePlay,appleStore}) {
    return (
        <div className="container">
            <div className="row ">
                <div className="col-6 p-5">
                    <img src={imageUrl} alt={Prod} className="img-fluid p-5" />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1> {Prod}</h1>
                    <p>{ProdDesc}</p>
                    <div>
                         <a href={tryDemo} className="" style={{textDecoration: 'none'}}>Try Demo<i className='fas fa-arrow-right'></i></a>
                        <a href={learnMore} className="" style={{marginLeft: '15px', textDecoration: 'none'}}>Learn More<i className='fas fa-arrow-right'></i></a>

                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay} className=""><img src='/images/googlePlayBadge.svg' alt="Google Play" /></a>
                        <a href={appleStore} className=""><img src='/images/appstoreBadge.svg' alt="Apple Store" style={{marginLeft: '15px'}} /></a>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default LeftSection;
