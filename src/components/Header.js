import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../services/firebase";
import "./nav.css";
import logo from "../starter.png";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-steel">
        <div className="container"></div>
        <img className="icon" src={logo} alt="maghour" />
        <Link className="navbar-brand mr-4" to="/">
          MagHour
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          {auth().currentUser ? (
            <div className="navbar-nav">
              <Link className="nav-item nav-link profile" to="/chat">
                Profile
              </Link>
              <button
                className="btn btn-primary nav item logout"
                onClick={() => auth().signOut()}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="navbar-nav">
              <Link className="nav-item nav-link signin" to="/login">
                SignIn
              </Link>
              <Link className="nav-item nav-link signup" to="/signup">
                SignUp
              </Link>
              <Link className="nav-item nav-link about" to="/chat">
                About
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
