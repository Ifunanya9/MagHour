import React, { Component } from "react";
import Header from "../components/Header";
import "./home.css";
import smile from "../school.jpg";

export default class InfoSchool extends Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        <br />
        <br />
        <section>
          <div className="jumbotron-fluid py-5">
            <div className="container text-center py-5">
              <img className="smile" src={smile} alt="smiling" />
              <h1>Information for Schools</h1>
              <p>
                We create a account for the school.
                <br />
                After the school gets the account then they create a account for
                the childrens with their parents email.
                <br />
                Also the school doesn't have to worry because this website is
                secure.
                <br />
                Also the teachers can also chat with each other so it's not only
                the childrens that can chat to each other.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
