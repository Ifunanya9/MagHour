import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { signin, signInWithGoogle, signInWithGitHub } from "../../helpers/auth";
import "./signin.css";
import smile from "../../img/maghour.png";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      firstname: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.googleSignIn = this.googleSignIn.bind(this);
    this.githubSignIn = this.githubSignIn.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await signin(this.state.firstname, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async googleSignIn() {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async githubSignIn() {
    try {
      await signInWithGitHub();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <img className="smile" src={smile} alt="smiling" />
          {/* <br />
        <br /> */}
          <div className="form-group">
            <div className="jumbotron-fluid py-5">
              <div className="container text-center py-5">
                {/* jumbotron */}
                {/* footer */}
                <form
                  className="mt-5 py-5 px-5"
                  autoComplete="off"
                  onSubmit={this.handleSubmit}
                >
                  <h1>
                    <div className="title-text">Login to</div>
                    <Link className="title ml-2" to="/">
                      {" "}
                      MagHour
                    </Link>
                  </h1>
                  <p className="lead">
                    Fill in the form below to login to your account.
                  </p>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Email"
                      name="firstname"
                      type="text"
                      onChange={this.handleChange}
                      value={this.state.fistname}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      onChange={this.handleChange}
                      value={this.state.password}
                      type="password"
                    />
                  </div>
                  <div className="form-group">
                    {this.state.error ? (
                      <p className="text-danger">{this.state.error}</p>
                    ) : null}
                    <button className="btn btn-primary px-5" type="submit">
                      Login
                    </button>
                  </div>
                  <p className="also">
                    You can also log in with any of these services
                  </p>
                  <div className="another-google">
                    <button
                      className="btn btn-danger mr-2"
                      type="button"
                      onClick={this.googleSignIn}
                    >
                      Sign in with Google
                    </button>
                  </div>
                  <div className="another-github">
                    <button
                      className="btn btn-secondary"
                      type="button"
                      onClick={this.githubSignIn}
                    >
                      Sign in with GitHub
                    </button>
                  </div>
                  <hr />
                  <p className="already">
                    Don't have an account?{" "}
                    <Link className="move" to="/signup">
                      Sign up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
