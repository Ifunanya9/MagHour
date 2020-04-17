import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import smile from "../chatting.jpg";
import boy from "../chikamso.jpg";
import girl from "../ifunanyachi.jpg";
import "./home.css";

export default class About extends Component {
  render() {
    return (
      <div className="home">
        <Header></Header>
        <img className="smile" src={smile} alt="smiling" />

        <div className="dashboard start container">
          <section>
            <div className="jumbotron-fluid py-5">
              <div className="container text-center py-5">
                <br />
                <h5>
                  <h1 className="display-4 welcome">About</h1>
                  <p className="lead">
                    A great place to share your thoughts with friends
                  </p>
                  <Link
                    className="btn btn-primary px-5 mr-3 create"
                    to="/info-for-schools"
                  >
                    Information for Schools
                  </Link>
                  <br />
                  <Link
                    className="btn btn-primary px-5 mr-3 create"
                    to="/info-for-parents"
                  >
                    Information for Parents
                  </Link>
                  <br />
                  <Link
                    className="btn btn-primary px-5 mr-3 create"
                    to="/info-for-chidren"
                  >
                    Information for Children
                  </Link>
                </h5>
                <br />
                <br />
                <br />
                <br />
                <br />
                <h3>Who made it</h3>
                <div className="space">
                  <img className="together" src={boy} alt="smiling" />
                  <img className="together" src={girl} alt="smiling" />
                  <br />
                  <Link className="px-5 mr-3" to="/about-chikamso">
                    Chikamso
                  </Link>
                  <Link className="px-5 mr-3" to="/about-ifunanyachi">
                    Ifunanyachi
                  </Link>
                </div>
                <br />
                <br />
                <br />
                <h3>About the website</h3>
                <p>
                  The website is mainly because about coronavirus its because we
                  couldn't see each other and it was very boring.
                  <br />
                  You can only talk to your family plus not that much of people
                  have phones so they can talk on whatsapp and noones the age
                  for facebook and twitter in primmary school.
                  <br />
                  This website is mainly for children because parents they have
                  facebook phones and twitter and other social media stuff but
                  in the other hand us children we don't have access to social
                  media or whatsapp.
                  <br />
                  We want people to make friends but not meeting each other face
                  to face because we don't want people catching germs.
                  <br />
                  In the future we're going to put on our website something that
                  says donation it means if you can donate us so we can keep our
                  website going.
                </p>

                {/* <div className="mt-4">
                  <Link
                    className="btn btn-primary px-5 mr-3 create"
                    to="/signup"
                  >
                    Create New Account
                  </Link>

                  <Link className="btn px-5 log" to="/login">
                    Login to Your Account
                  </Link>
                </div> */}
              </div>
            </div>
            <br />
            <div className="foot">
              <Footer></Footer>
            </div>
          </section>
        </div>
      </div>
      // We created Maghour because about coronavirus and we know that not everybody has a phone which they can use whatsapp like us so we decided to create MagHour
    );
  }
}
