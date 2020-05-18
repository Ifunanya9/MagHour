import React, { Component } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Search from '../src/pages/Search/search'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Chat from "./pages/Chat/ChatClass";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import { auth } from "./services/firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import InfoChildren from "./pages/Info/InfoChildren";
import InfoParents from "./pages/Info/InfoParents";
import InfoSchool from "./pages/Info/InfoSchool";
import AboutIfunanyachi from "./pages/About/AboutIfunanyachi";
import AboutChikamso from "./pages/About/AboutChikamso";
import Account from "./pages/Account/Account";
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
        <Header />
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
            <Route path="/search" component={Search} />
          </Switch>
        </Router>
        <div className="foot">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
