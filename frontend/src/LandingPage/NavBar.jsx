import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NavBar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom py-3">
      <div className="container">

        <Link className="navbar-brand" to="/">
          <img
            src="/images/zuno-electric-blue-white.svg"
            alt="Zuno Logo"
            style={{ width: "180px", height: "auto" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 align-items-center">

            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>
            
            {user ? (
              <li className="nav-item">
                <button 
                  onClick={handleLogout} 
                  className="btn btn-outline-danger btn-sm px-3"
                  style={{ borderRadius: "4px", fontSize: "0.9rem" }}
                >
                  Logout ({user.username})
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <Link 
                  className="btn btn-primary btn-sm px-3 text-white" 
                  to="/login"
                  style={{ borderRadius: "4px", fontSize: "0.9rem", backgroundColor: "#387ed1", border: "none" }}
                >
                  Login
                </Link>
              </li>
            )}

            <li className="nav-item">
              <Link className="nav-link" to="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;