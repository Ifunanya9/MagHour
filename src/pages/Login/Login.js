import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { connect } from "react-redux";
import { signin, signInWithGoogle, signInWithGitHub } from "../../helpers/auth";
import { Redirect } from "react-router-dom";
import "./signin.css";
import smile from "../../img/chatting.jpg";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <div className="red-text center red lighten-5 fail">
              {authError ? <p>{authError}</p> : null}
            </div>
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
