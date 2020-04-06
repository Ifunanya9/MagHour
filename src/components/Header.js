import React from "react";
import { auth } from "../services/firebase";
import logo from "../starter.png";
import { Nav, Navbar} from "react-bootstrap";
import "./nav.css"; 

const Header = () => {
  return (
    <div>
    <header>
      <Navbar bg="dark" fill variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#home">
      <img src={logo} alt="maghour" length="60px" width="60px"/>
        MagHour
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          {auth().currentUser ? (
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link eventKey="/chat">Message</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/chat">Class</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/chat">School</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/chat">Profile</Nav.Link>
              </Nav.Item>
              <li>
                <button
                  onClick={() => auth().signOut()}>
                  Logout
                </button>
              </li>
            </Nav>
           ) : (
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link eventKey="/signin">Signin</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/signup">Signup</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/about">About</Nav.Link>
              </Nav.Item>
            </Nav>
          )}
       </Navbar.Collapse>
      </Navbar>
    </header>
    </div>
  );
}

export default Header;
