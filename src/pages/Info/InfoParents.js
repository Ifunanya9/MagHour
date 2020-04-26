import React, { Component } from "react";
import Header from "../../components/Header/Header";
import "../Home/home.css";
import smile from "../../img/parents.jpg";

export default class InfoParents extends Component {
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
              <h1>Information for Parents</h1>
              <p>
                Also if they're saying bad words or mean words we will send a
                email to you.
                <br />
                After the school creates an account for your child you can
                access anything on your childs account like you can log in to
                your account.
                <br />
                You can also veiw what your children are chatting about because
                if they're chat about something like lets meet out on Saturday
                and you don't know about it your child might be in danger.
                <br />
                Also you can chat with other adults because as I said before you
                can access your childs account so you can talk to other adults
                <br />
                Also you can come on this website on a phone, tablet and
                computer so no one is left out on any chat because maybe your
                child doesn't have a laptop so if they have a phone and if they
                don't have a phone they probaly have a tablet.
                <br />
                Parents you don't have to worry about screen time because we
                provided your children 1 hour scren time but if they need more
                time they will press something to send something to your email
                so you can decide to accept or decline if you accept they will
                have 30 minutes extra screen time for only that day and if you
                decline it then they won't have 30 minutes screen time extra for
                that day.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
