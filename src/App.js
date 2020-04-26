import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/ChatClass";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/About";
import { auth } from "./services/firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import InfoChildren from "./pages/InfoChildren";
import InfoParents from "./pages/InfoParents";
import InfoSchool from "./pages/InfoSchool";
import AboutIfunanyachi from "./pages/AboutIfunanyachi";
import AboutChikamso from "./pages/AboutChikamso";
import Account from "./pages/Account";
// import 'materialize-css';

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  console.log(Component);
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/chat" />
        )
      }
    />
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true,
    };
  }

  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false,
        });
      }
    });
  }

  render() {
    return this.state.loading === true ? (
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    ) : (
      <div className="center">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />

            <PrivateRoute
              path="/chat"
              authenticated={this.state.authenticated}
              component={Chat}
            />
            <PublicRoute
              path="/signup"
              authenticated={this.state.authenticated}
              component={Signup}
            />
            <PublicRoute
              path="/login"
              authenticated={this.state.authenticated}
              component={Login}
            />
            <Route path="/about" component={About} />
            <Route path="/info-for-chidren" component={InfoChildren} />
            <Route path="/info-for-parents" component={InfoParents} />
            <Route path="/info-for-schools" component={InfoSchool} />
            <Route path="/about-ifunanyachi" component={AboutIfunanyachi} />
            <Route path="/about-chikamso" component={AboutChikamso} />
            <Route path="/account" component={Account} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
