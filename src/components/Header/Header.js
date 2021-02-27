import React from "react";
import { connect } from "react-redux";
import atm from "../../img/autumn.png";
import spr from "../../img/spring.png";
import summ from "../../img/summer.png";
import win from "../../img/winter.png";
import xmas from "../../img/chistmas.png";
import { signOut } from "../../store/actions/authActions";
import { Nav, Navbar } from "react-bootstrap";
import moment from "moment";

import "./nav.css";

const Header = (props) => {
  const { auth, profile, signOut } = props;
  console.log(profile);
  const month = moment(new Date()).format("MMMM");
  // const month = "January";
  const getSeason = () => {
    let season = "";
    if (month === "December") {
      season = "Christmas";
    } else if (month === "January" || "Febuary") {
      season = "Winter";
    } else if (month === "March" || "April" || "May") {
      season = "Spring";
    } else if (month === "June" || "July" || "August") {
      season = "Summer";
    } else {
      season = "Autumn";
    }
    return season;
  };

  const season = getSeason();

  const getImg = () => {
    let img = "";
    if (season === "Autumn") {
      img = atm;
    } else if (season === "Winter") {
      img = win;
    } else if (season === "Spring") {
      img = spr;
    } else if (season === "Christmas") {
      img = xmas;
    } else {
      img = summ;
    }
    return img;
  };

  const img = getImg();

  console.log(img);
  console.log(season);
  console.log(month);
  return (
    <header className="long high">
      <div>
        <div bg="black">
          <Navbar bg="dark" variant="dark" expand="lg" className="front">
            <Navbar.Brand href="/">
              <img src={img} alt="maghour" length="60px" width="60px" />
              MagHour
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              bg="dark"
              variant="dark"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              {auth.uid ? (
                <Nav
                  activeKey="/home"
                  style={{ width: "80px" }}
                  className="bg-dark"
                >
                  <Nav.Item className="mx-auto">
                    <Nav.Link
                      // className="text-info"
                      href="/chat"
                      eventKey="/chat"
                    >
                      Message
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mx-auto">
                    <Nav.Link
                      // className="text-info"
                      href="/chat"
                      eventKey="/chat"
                    >
                      Class
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mx-auto">
                    <Nav.Link
                      // className="text-info"
                      href="/chat"
                      eventKey="/chat"
                    >
                      School
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mx-auto">
                    <Nav.Link
                      // className="text-info"
                      href="/private-chat"
                      eventKey="/private-chat"
                    >
                      Private
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item className="mx-auto">
                    <Nav.Link
                      // className="text-info"
                      href="/profile"
                      eventKey="/profile"
                    >
                      Profile
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item onClick={() => signOut()} className="mx-auto">
                    <Nav.Link>Logout</Nav.Link>
                  </Nav.Item>
                </Nav>
              ) : (
                <Nav activeKey="/home">
                  <Nav.Item>
                    <Nav.Link
                      // className="text-info"
                      href="/login"
                      eventKey="/login"
                    >
                      Signin
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      // className="text-info"
                      href="/signup"
                      eventKey="/signup"
                    >
                      Signup
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      // className="text-info"
                      href="/about"
                      eventKey="/about"
                    >
                      About
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              )}
            </Navbar.Collapse>
            {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form> */}
          </Navbar>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  console.log(state);

  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
