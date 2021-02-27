import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./home.css";
import { Paper } from "@material-ui/core";

class HomePage extends Component {
  render() {
    const { auth } = this.props;
    return (
      <div className="large dashboard">
        <div className="start container">
          <div className="start container">
            {auth.uid ? (
              <section>
                <div className="footer">
                  <Paper className="jumbotron jumbotron-fluid py-7">
                    <div className="container text-center py-7">
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
                  </Paper>
                  <br />
                </div>
              </section>
            ) : (
              <section>
                <div className="footer">
                  <Paper className="jumbotron jumbotron-fluid py-5">
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
                          Sign Up
                        </Link>
                        <br />
                        <Link
                          className="btn btn-secondary px-5 log center"
                          to="/login"
                        >
                          Sign In
                        </Link>
                      </div>
                    </div>
                  </Paper>
                  <br />
                </div>
              </section>
            )}
          </div>
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
