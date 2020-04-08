import React, { Component } from "react";
import Header from "../components/Header";
import "./home.css";
import smile from "../parents.jpg";

export default class InfoParents extends Component {
  render() {
    return (
      <div>
        <Header />
        <img className="smile" src={smile} alt="smiling" />
        <br />
        <br />
        <br />
        <h1>Information for Parents</h1>
        <p>
          Also if they're saying bad words or mean words we will send a email to
          you.
          <br />
          After the school creates an account for your child you can access
          anything on your childs account like you can log in to your account.
          <br />
          You can also veiw what your children are chatting about because if
          they're chat about something like lets meet out on Saturday and you
          don't know about it your child might be in danger.
          <br />
        </p>
      </div>
    );
  }
}
