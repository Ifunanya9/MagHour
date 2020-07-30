import React from "react";
import { connect } from "react-redux";
import logo from "../starter.png";
import { signOut } from "../store/actions/authActions";
import { Nav, Navbar } from "react-bootstrap";

import "./nav.css";

const Header = (props) => {
  const { auth, profile, signOut } = props;
  console.log(profile);
  return (
    <header className="long high">
      <div>
        <div bg="black">
          <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand href="/">
              <img src={logo} alt="maghour" length="60px" width="60px" />
              MagHour
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              bg="dark"
              variant="dark"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              {auth.uid ? (
                <Nav activeKey="/home">
                  <Nav.Item>
                    <Nav.Link href="/chat" eventKey="/chat">
                      Message
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/chat" eventKey="/chat">
                      Class
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/chat" eventKey="/chat">
                      School
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/private-chat" eventKey="/private-chat">
                      Private
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link href="/profile" eventKey="/profile">
                      Profile
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item onClick={() => signOut()}>
                    <Nav.Link>Logout</Nav.Link>
                  </Nav.Item>
                </Nav>
              ) : (
                <Nav activeKey="/home">
                  <Nav.Item>
                    <Nav.Link href="/login" eventKey="/login">
                      Signin
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/signup" eventKey="/signup">
                      Signup
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/about" eventKey="/about">
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
