import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signInWithGoogle, signInWithGitHub } from "../../helpers/auth";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import "./signin.css";
import smile from "../../img/chatting.jpg";

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
      <div className="container">
        <img className="smile" src={smile} alt="smiling" />
        <br />
        <br />
        <form className="mt-5 py-5 px-5" onSubmit={this.handleSubmit}>
          <h1>
            <div className="title-text">Sign Up to </div>
            <Link className="title ml-2" to="/">
              MagHour
            </Link>
          </h1>
          <p className="lead">Fill in the form below to create an account.</p>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Email"
              name="email"
              type="email"
              id="email"
              onChange={this.handleChange}
              value={this.state.email}
            ></input>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Password"
              name="password"
              id="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
            ></input>
          </div>

          <div className="form-group">
            {this.state.error ? (
              <div>
                <p className="text-danger">{this.state.error}</p>
              </div>
            ) : null}
          </div>
          <div className="form-group">
            <button className="btn btn-primary px-5" type="submit">
              Sign up
            </button>
          </div>
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
          </div>
          <hr></hr>
          <p className="already">
            Don't have an account?{" "}
            <Link className="move" to="/signup">
              Signup
            </Link>
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
