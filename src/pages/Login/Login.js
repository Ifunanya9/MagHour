import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signInWithGoogle, signInWithGitHub } from "../../helpers/auth";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import "./signin.css";
import { Paper } from "@material-ui/core";
// import smile from "../../img/chatting.png";

class Login extends Component {
  state = {
    error: null,
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.password === "" || this.state.email === "") {
      const err = "Login failed";
      this.setState({
        error: err,
      });
    }
    try {
      await this.props.signIn(this.state);
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  googleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  githubSignIn = async () => {
    try {
      await signInWithGitHub();
    } catch (error) {
      console.log(error);
      this.setState({ error: error.message });
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
                onSubmit={this.handleSubmit}
              >
                <h1>
                  <div className="title">Sign In to </div>
                  <Link className="title ml-2" to="/">
                    MagHour
                  </Link>
                </h1>
                <br />
                <div className="mt-0">
                  <label className="form-label h6" htmlFor="email">
                    Email
                  </label>
                  <input
                    autoFocus
                    // required
                    type="email"
                    name="email"
                    id="email"
                    className="form-control form-control-lg input-block"
                    aria-autocomplete="none"
                    onChange={this.handleChange}
                    spellCheck="true"
                    aria-describedby="input-check-3834 "
                  />
                </div>
                <div className="mt-0">
                  <label className="form-label h6" htmlFor="password">
                    Password
                  </label>
                  <input
                    // required
                    type="password"
                    name="password"
                    id="password"
                    className="form-control form-control-lg input-block"
                    aria-autocomplete="none"
                    spellCheck="true"
                    onChange={this.handleChange}
                    aria-describedby="input-check-3834 "
                  />
                </div>

                <div className="mt-0">
                  {/* {this.state.error ? (
                    <div>
                      <p className="text-danger">{this.state.error}</p>
                    </div>
                  ) : null} */}
                  {this.props.signInError ? (
                    <div>
                      <p className="text-danger">{this.props.signInError}</p>
                    </div>
                  ) : null}
                </div>
                <div className="mt-0">
                  <button className="btn btn-primary px-5" type="submit">
                    Sign up
                  </button>
                </div>
                {/* <hr></hr>
                <p className="also">
                  You can also sign up with any of these services
                </p>
                <div className="another-google">
                  <button
                    className="btn btn-danger mr-2 google"
                    type="button"
                    onClick={this.googleSignIn}
                  >
                    Sign up with Google
                  </button>
                </div>
                <div className="another-github">
                  <button
                    className="btn btn-secondary github"
                    type="button"
                    onClick={this.githubSignIn}
                  >
                    Sign up with GitHub
                  </button>
                </div> */}
                <hr />
                <p className="already text-dark">
                  Don't have an account?{" "}
                  <Link className="move text-dark" to="/signup">
                    Signup
                  </Link>
                </p>
              </form>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    signInError: state.auth.signInError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
