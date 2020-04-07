import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { auth } from "../services/firebase";
import "./home.css";

export default class HomePage extends Component {
  render() {
    return (
      <div className="large">
      <Header/>
      <div className="dashboard start container">
        <div className="row">
          <div className='col s12 m6'>
            {auth().currentUser ? (
              <section>
              <div className="footer">
                <div className="jumbotron jumbotron-fluid py-5">
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
                <br />
                <div className="foot">
                  <Footer></Footer>
                </div>
              </div>
            </section>
            ) : (
              <section>
                <div className="footer">
                  <div className="jumbotron jumbotron-fluid py-5">
                    {/* <div className="container text-center py-5"> */}
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
                        <br/>
                        <Link className="btn px-5 log" to="/login">
                          Login to Your Account
                        </Link>
                      </div>
                    {/* </div> */}
                  </div>
                  <br />
                  <div className="foot">
                  <Footer></Footer>
                    </div>
                  </div>
                
              </section>
            )}
          </div>
          <div className="col s12 m5 offset-m1">
            <h1>Notifications</h1>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
