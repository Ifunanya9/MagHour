import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";
import "./signup.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Paper } from "@material-ui/core";

class SignUp extends Component {
  state = {
    error: null,
    email: "",
    password: "",
    userName: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.confirmPassword !== this.state.password) {
      const err = "Passwords do not match";
      this.setState({
        error: err,
      });
    } else {
      try {
        this.props.signUp(this.state);
      } catch (error) {
        this.setState({ error: error.message });
      }
    }
  };

  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div>
        <br />
        <br />
        <div className="jumbotron-codelines text-center center text-dark">
          <div className="mx-auto magin">
            <Paper className="py-4 px-4 px-md-3 px-lg-4">
              <form
                className="mt-5 py-5 px-5 home-hero-signup text-gray-dark js-signup-form js-signup-form-submit"
                autoComplete="off"
                action="/join"
                method="post"
                acceptCharset="UTF-8"
              >
                <h1>
                  <div className="title">Sign Up to </div>
                  <Link className="title ml-2" to="/">
                    MagHour
                  </Link>
                </h1>
                <br />
                <div className="mt-0">
                  <label className="form-label h6" htmlFor="userName">
                    Username
                  </label>
                  <input
                    required
                    autoFocus
                    type="text"
                    name="userName"
                    id="userName"
                    className="form-control form-control-lg input-block"
                    autocomplete="off"
                    spellCheck="true"
                    onChange={this.handleChange}
                    aria-describedby="input-check-3834 "
                    value={this.state.userName}
                  />
                </div>
                <div className="mt-0">
                  <label className="form-label h6" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    required
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="form-control form-control-lg input-block"
                    autocomplete="off"
                    spellCheck="true"
                    onChange={this.handleChange}
                    aria-describedby="input-check-3834 "
                    value={this.state.firstName}
                  />
                </div>
                <div className="mt-0">
                  <label className="form-label h6" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    required
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="form-control form-control-lg input-block"
                    autocomplete="off"
                    spellCheck="true"
                    onChange={this.handleChange}
                    aria-describedby="input-check-3834 "
                    value={this.state.lastName}
                  />
                </div>
                <div className="mt-0">
                  <label className="form-label h6" htmlFor="email">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    className="form-control form-control-lg input-block"
                    autocomplete="off"
                    spellCheck="true"
                    onChange={this.handleChange}
                    aria-describedby="input-check-3834 "
                    value={this.state.email}
                  />
                </div>
                <div className="mt-0">
                  <label className="form-label h6" htmlFor="password">
                    Password
                  </label>
                  <input
                    required
                    type="password"
                    name="password"
                    id="password"
                    className="form-control form-control-lg input-block"
                    autocomplete="off"
                    spellCheck="true"
                    onChange={this.handleChange}
                    aria-describedby="input-check-3834 "
                    value={this.state.password}
                  />
                </div>
                <div className="mt-0">
                  <label className="form-label h6" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <input
                    required
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="form-control form-control-lg input-block"
                    autocomplete="off"
                    spellCheck="true"
                    onChange={this.handleChange}
                    aria-describedby="input-check-3834 "
                    value={this.state.confirmPassword}
                  />
                </div>
                <div className="mt-0">
                  {this.state.error ? (
                    <div>
                      <p className="text-danger">{this.state.error}</p>
                    </div>
                  ) : null}

                  {this.props.signUpError ? (
                    <div>
                      <p className="text-danger">{this.props.signUpError}</p>
                    </div>
                  ) : null}
                </div>
                <div className="">
                  <button
                    className="btn btn-primary px-5"
                    type="submit"
                    onClick={this.handleSubmit}
                  >
                    Signup
                  </button>
                  <hr />
                  <p className="already text-dark">
                    Have an account?{" "}
                    <Link className="move text-dark" to="/login">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </Paper>
          </div>
        </div>
        {/* <div className="py-6 py-sm-8 jumbotron-codelines">
          <div className="p-responsive position-relative container-lg">
            <div className="d-md-flex flex-items-center gutter-md-spacious">
              <div className="col-md-7 text-center text-md-left ">
                <h1 className="h000-mktg text-white lh-condensed-ultra mb-3">
                  Built by children for children
                </h1>
                <p class="lead-mktg mb-4">
                  MagHour is a website that children can talk with other people.
                </p>
              </div>
              <div class="mx-auto col-sm-8 col-md-6">
                <Paper className="py-4 px-4 px-md-3 px-lg-4">
                  
                </Paper>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    signUpError: state.auth.signUpError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
