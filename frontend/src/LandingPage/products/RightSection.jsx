import React from 'react';

function RightSection({ imageUrl, Prod, ProdDesc, learnMore }) {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 p-5">
          <h1>{Prod}</h1>

          <p
            style={{
              lineHeight: "1.8",
              color: "#666",
              fontSize: "1.1rem",
            }}
          >
            {ProdDesc}
          </p>

          <a
            href={learnMore}
            style={{
              textDecoration: "none",
              fontSize: "1.1rem",
              fontWeight: "500",
            }}
          >
            Learn More <i className="fas fa-arrow-right ms-1"></i>
          </a>
        </div>

        <div className="col-lg-6 p-5">
          <img
            src={imageUrl}
            alt={Prod}
            className="img-fluid p-5"
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection;