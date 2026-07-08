import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="footer"
      style={{ backgroundColor: "rgb(250,250,250)" }}
    >
      <div className="container border-top mt-5">
        <div className="row mt-5">
          {/* Logo Section */}
          <div className="col">
            <img
              src="/images/zuno-electric-blue-white.svg"
              style={{ width: "60%", height: "auto" }}
              alt="Zuno Logo"
            />
            <p>&copy; 2010 - 2026, Zuno Broking Ltd. All rights reserved.</p>
          </div>

          {/* Company */}
          <div className="col">
            <p><strong>Company</strong></p>

            <Link
              to="/about"
              className="text-muted"
              style={{ textDecoration: "none" }}
            >
              About
            </Link>
            <br />

            <Link
              to="/products"
              className="text-muted"
              style={{ textDecoration: "none" }}
            >
              Products
            </Link>
            <br />

            <Link
              to="/pricing"
              className="text-muted"
              style={{ textDecoration: "none" }}
            >
              Pricing
            </Link>
            <br />

            <Link
              to="/"
              className="text-muted"
              style={{ textDecoration: "none" }}
            >
              Referral Programme
            </Link>
            <br />

            <Link
              to="/"
              className="text-muted"
              style={{ textDecoration: "none" }}
            >
              Zuno Tech
            </Link>
            <br />

            <Link
              to="/"
              className="text-muted"
              style={{ textDecoration: "none" }}
            >
              Press & Media
            </Link>
            <br />

            <Link
              to="/support"
              className="text-muted"
              style={{ textDecoration: "none" }}
            >
              Zuno Cares
            </Link>
          </div>

          {/* Support */}
          <div className="col">
            <p><strong>Support</strong></p>

            <Link
              to="/support"
              className="text-muted"
              style={{ textDecoration: "none" }}
            >
              Contact
            </Link>
            <br />

            <Link
              to="/support"
              className="text-muted"
              style={{ textDecoration: "none" }}
            >
              Support Portal
            </Link>
            <br />

            <Link
              to="/support"
              className="text-muted"
              style={{ textDecoration: "none" }}
            >
              Z-Connect Blog
            </Link>
            <br />

            <Link
              to="/pricing"
              className="text-muted"
              style={{ textDecoration: "none" }}
            >
              List of Charges
            </Link>
            <br />

            <Link
              to="/support"
              className="text-muted"
              style={{ textDecoration: "none" }}
            >
              Downloads & Resources
            </Link>
          </div>

          {/* Account */}
          <div className="col">
            <p><strong>Account</strong></p>

            <Link
              to="/signup"
              className="text-muted"
              style={{ textDecoration: "none" }}
            >
              Open an Account
            </Link>
            <br />

            <Link
              to="/"
              className="text-muted"
              style={{ textDecoration: "none" }}
            >
              Fund Transfer
            </Link>
            <br />

            <Link
              to="/"
              className="text-muted"
              style={{ textDecoration: "none" }}
            >
              60 Day Challenge
            </Link>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-5 footer-container footer-disclaimer">
          <p>
            ZUNO Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633. CDSL/NSDL: Depository services
            through ZUNO Broking Ltd. – SEBI Registration no.: IN-DP-431-2019.
            Registered Address: ZUNO Broking Ltd., Bengaluru, Karnataka, India.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on the
            SCORES portal. Mandatory details include Name, PAN, Address, Mobile
            Number, and E-mail ID.
          </p>

          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism.
          </p>

          <p>
            Investments in securities market are subject to market risks. Read
            all related documents carefully before investing.
          </p>

          <p>
            Attention investors: Stock brokers can accept securities as margins
            from clients only by way of pledge in the depository system.
          </p>

          <p>
            India's largest broker based on net worth as per NSE broker
            factsheet.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;