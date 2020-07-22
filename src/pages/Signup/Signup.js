import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";
import "./signup.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import smile from "../../img/chatting.jpg";

class SignUp extends Component {
  state = {
    error: null,
    email: "",
    password: "",
    userName: "",
    firstName: "",
    lastName: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      this.props.signUp(this.state);
    } catch (error) {
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
              placeholder="Username"
              name="username"
              id="userName"
              type="text"
              onChange={this.handleChange}
              value={this.state.userName}
            ></input>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Firstname"
              name="firstname"
              id="firstName"
              type="text"
              onChange={this.handleChange}
              value={this.state.firstName}
            ></input>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Lastname"
              name="lastname"
              type="text"
              id="lastName"
              onChange={this.handleChange}
              value={this.state.lastName}
            ></input>
          </div>
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
              <p className="text-danger">{this.state.error}</p>
            ) : null}
          </div>
          <div className="form-group">
            <button className="btn btn-primary px-5" type="submit">
              Sign up
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
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
