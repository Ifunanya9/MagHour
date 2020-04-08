import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { auth } from "../services/firebase";
import "./home.css";
import smile from "../chatting.jpg";

export default class HomePage extends Component {
  render() {
    return (
      <div className="large">
        <Header />
        <img className="smile" src={smile} alt="smiling" />
        <div className="dashboard start container">
          {auth().currentUser ? (
            <section>
              <div className="form-group">
                <div className="jumbotron-fluid py-5">
                  <div className="container text-center py-5">
                    <h1 className="display-4 welcome">Welcome to MagHour</h1>
                    <br />
                    <p className="lead">
                      A great place to share your thoughts with friends
                    </p>
                    <br />
                    <div className="mt-4">
                      <Link
                        className="btn btn-primary px-5 mr-3 create"
                        to="/chat"
                      >
                        Chat
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="foot">
                <Footer></Footer>
              </div>
            </section>
          ) : (
            <section>
              <div className="footer">
                <div className="jumbotron-fluid py-5">
                  <div className="container text-center py-5">
                    <h1 className="display-4 welcome">Welcome to MagHour</h1>
                    <br />
                    <p className="lead">
                      A great place to share your thoughts with friends
                    </p>
                    <br />
                    <div className="mt-4">
                      <Link
                        className="btn btn-primary px-5 mr-3 create"
                        to="/signup"
                      >
                        Create New Account
                      </Link>

                      <Link className="btn btn-secondary px-5 log" to="/login">
                        Login to Your Account
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    );
  }
}
