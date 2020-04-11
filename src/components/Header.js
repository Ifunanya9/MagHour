import React from "react";
import { auth } from "../services/firebase";
import logo from "../starter.png";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./nav.css";

const Header = () => {
  return (
    <header className="long high">
      <div >
      <div bg="black">
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="/">
      <img src={logo} alt="maghour" length="60px" width="60px"/>
        MagHour
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" bg="dark" variant="dark"/>
      <Navbar.Collapse id="basic-navbar-nav" >
          {auth().currentUser ? (
            <Nav className="justify-content-center hi" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/chat" eventKey="/chat">Message</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/chat" eventKey="/chat">Class</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/chat" eventKey="/chat">School</Nav.Link>
              </Nav.Item>
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item href="/status">Status</NavDropdown.Item>
                <NavDropdown.Item href="/account">Account</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/unsubscribe">Unsubscribe</NavDropdown.Item>
              </NavDropdown>
              <li>
                <button
                  onClick={() => auth().signOut()}>
                  Logout
                </button>
              </li>
            </Nav>
           ) : (
            <Nav className="justify-content-center hi" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/login" eventKey="/login">Signin</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/signup" eventKey="/signup">Signup</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/about" eventKey="/about">About</Nav.Link>
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

export default Header;
