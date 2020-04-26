import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import boy from "../img/chikamso.jpg";
import "./home.css";

export default class AboutChikamso extends Component {
  render() {
    return (
      <div className="home">
        <Header></Header>
        <div className="dashboard start container">
          <section>
            {/*<div className="footer">*/}
            <div className="jumbotron-fluid py-5">
              <div className="container text-center py-5">
                <img className="together" src={boy} alt="smiling" />
                <h2 className="welcome">About Chikamso</h2>
                <br />
                <h3>Bacic Stuff</h3>
                <p className="lead">
                  I am in P5A and I am 9 years old <br />I live in Balerno.
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
                  I like doing coding
                  <br /> and sports but right now my leg hurts and I can't kick
                  a ball. Ouch!
                  <br /> I also like doing Maths,
                  <br />
                  Swimming,
                  <br />
                  Guitar
                  <br />
                  and Piano
                </p>
                <h3>Things I don't like</h3>
                <p>I don't like doing writing and learning languages</p>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}
