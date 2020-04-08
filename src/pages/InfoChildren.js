import React, { Component } from "react";
import Header from "../components/Header";
import "./home.css";
import smile from "../images.png";

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <Header />
        <img className="smile" src={smile} alt="smiling" />
        <br />
        <br />
        <br />
        <h1>Information for Children</h1>
      </div>
    );
  }
}
