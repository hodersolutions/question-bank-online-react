import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img
                src={require("../../../static/images/logo/logo.png")}
                alt="Question Bank"
                className="logo"
              /> <span className="app-name">Q-bank</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsOptions"
              aria-controls="navbarsOptions"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarsOptions">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/signin" className="nav-item nav-link">                    
                    <span className="icon-text">LOGIN</span>
                  </Link>
                </li>
                <li className="nav-item border-button">
                  <Link to="/signup" className="nav-item nav-link">                    
                    <span className="icon-text">JOIN US</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Header;