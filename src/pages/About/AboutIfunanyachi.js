import React, { Component } from "react";
import girl from "../../img/ifunanyachi.jpg";
import "../Home/home.css";

export default class AboutIfunanyachi extends Component {
  render() {
    return (
      <div className="home">
        <div className="dashboard start container">
          <section>
            {/*<div className="footer">*/}
            <div className="jumbotron-fluid py-5">
              <div className="container text-center py-5">
                <img className="together" src={girl} alt="smiling" />
                <br />
                <h2 className="welcome">About Ifunanyachi</h2>
                <h3>Bacic Information</h3>
                <p className="lead">
                  I am 10 years old
                  <br />
                  I am in P6a.
                  <br />
                  I live in Balerno.
                  <br />
                  I have a family of 6.
                  <br />
                  Both my parents are Engineers.
                  <br />
                  I have full access to internet and
                  <br />
                  I have my own laptop
                  <br />
                </p>
                <h3>Hobbies</h3>
                <p>
                  My hobbies are:
                  <br />
                  Basketball,
                  <br />
                  Trumpet,
                  <br />
                  Coding,
                  <br />
                  Spanish.
                </p>
              </div>
            </div>
            {/*</div>*/}
          </section>
        </div>
      </div>
    );
  }
}
