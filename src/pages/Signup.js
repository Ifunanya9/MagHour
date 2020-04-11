import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { signup, signInWithGoogle, signInWithGitHub } from "../helpers/auth";
import "./signin.css";
import smile from "../maghour.png";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      email: "",
      firstname:"",
      lastname:"",
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
      await signup(this.state.email, this.state.password);
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
      console.log(error);
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <img className="smile" src={smile} alt="smiling" />
        <div className="container">
          <div className="form-group">
            <div className="jumbotron-fluid py-5">
              <div className="container text-center py-5">
                <form
                  className="mt-5 py-5 px-5 up"
                  onSubmit={this.handleSubmit}
                >
                  <h1>
                    <div className="title-text">Sign Up to </div>
                    <Link className="title ml-2" to="/">
                      MagHour
                    </Link>
                  </h1>
                  <p className="lead">
                    Fill in the form below to create an account.
                  </p>
                    <input
                      className="form-control"
                      placeholder="FirstName"
                      name="firstname"
                      onChange={this.handleChange}
                      value={this.state.firstname}
                      type="text"
                    ></input>
                    <input
                      className="form-control"
                      placeholder="LastName"
                      name="lastname"
                      onChange={this.handleChange}
                      value={this.state.lastname}
                      type="text"
                    ></input>
                    <input
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      type="email"
                      onChange={this.handleChange}
                      value={this.state.email}
                    ></input>
                    <input
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      onChange={this.handleChange}
                      value={this.state.password}
                      type="password"
                    ></input>

                    {this.state.error ? (
                      <p className="text-danger">{this.state.error}</p>
                    ) : null}
                    <button className="btn btn-primary px-5" type="submit">
                      Sign up
                    </button>
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
                    Already have an account?{" "}
                    <Link className="move" to="/login">
                      Login
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
