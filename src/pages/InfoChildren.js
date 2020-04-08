import React, { Component } from "react";
import Header from "../components/Header";
import smile from "../images.png";
import "./home.css";

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
        <p>
          Children you can chat, make private and do anything but say bad words
          <br />
          You can chat to your teacher and friends and you can do anything you
          want except from being mean.
          <br />
          And we're not going to a allow people swearing,people being mean
          racism <br />
        </p>
      </div>
    );
  }
}
