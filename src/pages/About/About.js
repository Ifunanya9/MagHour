import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./about.css";
import AboutTabs from "./AboutTabs";

export default class About extends Component {
  render() {
    return (
      <div className="home container">
        <section>
          <div className="jumbotron jumbotron-fluid py-5">
            <div className="container text-center py-5">
              <br />

              <h1 className="display-4 welcome">About</h1>
              <p className="lead">
                A great place to share your thoughts with friends
              </p>
              <h3>About the website</h3>
              <p>
                The website is mainly because about coronavirus its because we
                couldn't see each other and it was very boring.
                <br />
                You can only talk to your family plus not that much of people
                have phones so they can talk on whatsapp and noones the age for
                facebook and twitter in primmary school.
                <br />
                This website is mainly for children because parents they have
                facebook phones and twitter and other social media stuff but in
                the other hand us children we don't have access to social media
                or whatsapp.
                <br />
                We want people to make friends but not meeting each other face
                to face because we don't want people catching germs.
                <br />
                In the future we're going to put on our website something that
                says donation it means if you can donate us so we can keep our
                website going.
              </p>
              <br />
              <br />
              <h3>Who made it</h3>
              <div className="space">
                <AboutTabs />
              </div>
              <br />
              <br />
              <br />

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
              <h5
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  style={{ width: "90%" }}
                  className="btn btn-primary px-5 mr-3 create"
                  to="/school-info"
                >
                  Imformation for schools
                </Link>
                <br />
                <Link
                  style={{ width: "90%" }}
                  className="btn btn-primary px-5 mr-3 create"
                  to="/parent-info"
                >
                  Imformation for parents
                </Link>
                <br />
                <Link
                  style={{ width: "90%" }}
                  className="btn btn-primary px-5 mr-3 create"
                  to="/children-info"
                >
                  Imformation for Children
                </Link>
              </h5>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
