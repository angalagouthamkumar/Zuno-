import React from "react";

function Universe() {
  return (
    <div
      className="container"
      style={{
        marginTop: "80px",
        marginBottom: "80px",
      }}
    >
      <div className="row text-center">
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "500",
            color: "#424242",
            marginBottom: "20px",
          }}
        >
          The Zuno Universe
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            color: "#666",
            marginBottom: "60px",
          }}
        >
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* Row 1 */}

        <div className="col-lg-4 mb-5">
          <img
            src="/images/zerodhaFundhouse.png"
            alt="Fund House"
            style={{
              height: "65px",
              objectFit: "contain",
              marginBottom: "25px",
            }}
          />

          <p
            style={{
              color: "#9b9b9b",
              lineHeight: "1.8",
              fontSize: "0.95rem",
              width: "80%",
              margin: "0 auto",
            }}
          >
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-lg-4 mb-5">
          <img
            src="/images/sensibullLogo.svg"
            alt="Sensibull"
            style={{
              height: "45px",
              objectFit: "contain",
              marginBottom: "25px",
            }}
          />

          <p
            style={{
              color: "#9b9b9b",
              lineHeight: "1.8",
              fontSize: "0.95rem",
              width: "80%",
              margin: "0 auto",
            }}
          >
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-lg-4 mb-5">
          <img
            src="/images/goldenpiLogo.png"
            alt="GoldenPi"
            style={{
              height: "45px",
              objectFit: "contain",
              marginBottom: "25px",
            }}
          />

          <p
            style={{
              color: "#9b9b9b",
              lineHeight: "1.8",
              fontSize: "0.95rem",
              width: "80%",
              margin: "0 auto",
            }}
          >
            Investment research platform that offers detailed insights into
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        {/* Row 2 */}

        <div className="col-lg-4 mt-4">
          <img
            src="/images/streakLogo.png"
            alt="Streak"
            style={{
              height: "55px",
              objectFit: "contain",
              marginBottom: "25px",
            }}
          />

          <p
            style={{
              color: "#9b9b9b",
              lineHeight: "1.8",
              fontSize: "0.95rem",
              width: "80%",
              margin: "0 auto",
            }}
          >
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-lg-4 mt-4">
          <img
            src="/images/smallcaseLogo.png"
            alt="Smallcase"
            style={{
              height: "55px",
              objectFit: "contain",
              marginBottom: "25px",
            }}
          />

          <p
            style={{
              color: "#9b9b9b",
              lineHeight: "1.8",
              fontSize: "0.95rem",
              width: "80%",
              margin: "0 auto",
            }}
          >
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-lg-4 mt-4">
          <img
            src="/images/dittoLogo.png"
            alt="Ditto"
            style={{
              height: "70px",
              objectFit: "contain",
              marginBottom: "25px",
            }}
          />

          <p
            style={{
              color: "#9b9b9b",
              lineHeight: "1.8",
              fontSize: "0.95rem",
              width: "80%",
              margin: "0 auto",
            }}
          >
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>

        <div className="mt-5">
          <button
            className="btn btn-primary mt-3"
            style={{
              padding: "12px 35px",
              fontSize: "1.2rem",
              fontWeight: "500",
              borderRadius: "3px",
              minWidth: "220px",
            }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;