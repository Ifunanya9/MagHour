import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "./home.css";

export default class About extends Component {
  render() {
    return (
      <div className="home">
        <Header></Header>
        <section>
          <div className="footer">
            <div className="jumbotron jumbotron-fluid py-5">
              <div className="container text-center py-5">
                <br />
                <h5>
                <h1 className="display-4 welcome">About</h1>
                <p className="lead">
                  A great place to share your thoughts with friends
                </p>
                  <Link
                    className="btn btn-primary px-5 mr-3 create"
                    to="/info-for-schools"
                  >
                    Information for Schools
                  </Link>
                  <br />
                  <Link
                    className="btn btn-primary px-5 mr-3 create"
                    to="/info-for-parents"
                  >
                    Information for Parents
                  </Link>
                  <br />
                  <Link
                    className="btn btn-primary px-5 mr-3 create"
                    to="/info-for-chidren"
                  >
                    Information for Children
                  </Link>
                </h5>
                <br />
                {/* <div className="mt-4">
                  <Link
                    className="btn btn-primary px-5 mr-3 create"
                    to="/signup"
                  >
                    Create New Account
                  </Link>

                  <Link className="btn px-5 log" to="/login">
                    Login to Your Account
                  </Link>
                </div> */}
              </div>
            </div>
            <br />
            <div className="foot">
              <Footer></Footer>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
