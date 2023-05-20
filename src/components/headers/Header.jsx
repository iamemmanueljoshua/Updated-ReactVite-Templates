import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isActiveLink = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={isActiveLink("/Home")} to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={isActiveLink("/About")} to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className={isActiveLink("/ContactUs")} to="/ContactUs">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
