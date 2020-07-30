import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Chat from "./pages/Chat/Chat";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
// import Default from "./pages/Default/Default";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import PrivateChat from "./pages/Chat/PrivateChat/PrivateChat";
import Profile from "./pages/Profile/Profile";

class App extends Component {
  render() {
    return (
      // this.state.loading === true ? (
      //   <div className="spinner-border text-success" role="status">
      //     <span className="sr-only">Loading...</span>
      //   </div>
      // ) : (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/chat" component={Chat} />
            <Route path="/private-chat" component={PrivateChat} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route path="/profile" component={Profile} />
            {/* <Route component={Default} /> */}
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
      // );
    );
  }
}

export default App;
