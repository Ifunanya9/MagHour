import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./home.css";

class HomePage extends Component {
  render() {
    const { auth } = this.props;
    return (
      <div className="large">
        <div className="dashboard start container">
          {auth.uid ? (
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
                    <div className="mt-4 center">
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
              </div>
            </section>
          ) : (
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
                    <div className="mt-4 center">
                      <Link
                        className="btn btn-primary px-5 mr-3 create"
                        to="/signup"
                      >
                        Create New Account
                      </Link>
                      <br />
                      <Link
                        className="btn btn-secondary px-5 log center"
                        to="/login"
                      >
                        Login to Your Account
                      </Link>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </section>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);

  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(HomePage);
