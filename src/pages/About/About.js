import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import "./about.css";

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
                  <Link
                    className="btn btn-primary px-5 mr-3 create"
                    to="/signup"
                  >
                    Imformation for schools
                  </Link>
                  <br />
                  <Link
                    className="btn btn-primary px-5 mr-3 create"
                    to="/signup"
                  >
                    Imformation for parents
                  </Link>
                  <br />
                  <Link
                    className="btn btn-primary px-5 mr-3 create"
                    to="/signup"
                  >
                    Imformation for Children
                  </Link>
                </h5>
                <h1 className="display-4 welcome">about</h1>
                <p className="lead">
                  A great place to share your thoughts with friends
                </p>
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
