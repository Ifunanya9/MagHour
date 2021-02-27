import React, { Component } from "react";
import smile from "../../img/hi.jpg";
import "../Home/home.css";

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <img className="smile" src={smile} alt="smiling" />
        <div className="container">
          <br />
          <br />
          <section>
            <div className="jumbotron jumbotron-fluid py-5">
              <div className="container text-center py-5">
                <br />
                <br />
                <br />
                <h1 className="text">Information for Children</h1>
                <p className="text">
                  Children you can chat, make private and do anything but say
                  bad words
                  <br />
                  You can chat to your teacher and friends and you can do
                  anything you want except from being mean.
                  <br />
                  And we're not going to a allow people swearing,people being
                  mean racism just act like you're at school so people will feel
                  happy.
                  <br />I know you won't be happy that your prents see what you
                  do but it's very important because we know that some of you
                  are very responsible and some not also if you type something
                  like lets go out and play on the pavement and your parent
                  doesn't know you might get in danger your parents might get
                  into very big trouble.
                  <br />
                  Also if you don't have a computer you can use a phone and if
                  you don't have a phone then you can use a tablet and I am
                  pretty sure you have one of those and if you don't you can ask
                  someone in your family for a device so you can talk to your
                  friends.
                  <br />
                  I'm sorry but you are ony a loud on this website for 1 hour I
                  am sorry but we limit screen time for you but if you need more
                  time we will send email to your parent for a extra 30 minutes.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
