// import React, { Component } from "react";
// import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import Chat from "./pages/Chat/Chat";
// import Signup from "./pages/Signup/Signup";
// import Login from "./pages/Login/Login";
// import About from "./pages/About/About";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles.css";
// // import Default from "./pages/Default/Default";
// import Header from "./components/Header/Header";
// // import Footer from "./components/Footer";
// import PrivateChat from "./pages/Chat/PrivateChat/PrivateChat";
// import Profile from "./pages/Profile/Profile";
// import InfoChildren from "./pages/Info/InfoChildren";
// import InfoParents from "./pages/Info/InfoParents";
// import InfoSchool from "./pages/Info/InfoSchool";
// import AboutIfunanyachi from "./pages/About/AboutIfunanyachi";
// import AboutChikamso from "./pages/About/AboutChikamso";

// class App extends Component {
//   render() {
//     return (
//       // this.state.loading === true ? (
//       //   <div className="spinner-border text-success" role="status">
//       //     <span className="sr-only">Loading...</span>
//       //   </div>
//       // ) : (
//       <Router>
//         <div className="App">
//           <Header />
//           <Switch>
//             <Route exact path="/" component={Home} />
//             <Route path="/chat" component={Chat} />
//             <Route path="/private-chat" component={PrivateChat} />
//             <Route path="/signup" component={Signup} />
//             <Route path="/login" component={Login} />
//             <Route path="/about" component={About} />
//             <Route path="/about-chikamso" component={AboutChikamso} />
//             <Route path="/about-ifunanyachi" component={AboutIfunanyachi} />
//             <Route path="/school-info" component={InfoSchool} />
//             <Route path="/children-info" component={InfoChildren} />
//             <Route path="/parent-info" component={InfoParents} />
//             <Route path="/profile" component={Profile} />
//             {/* <Route component={Default} /> */}
//           </Switch>
//           {/* <Footer /> */}
//         </div>
//       </Router>
//       // );
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignUp from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import InfoChildren from "./pages/Info/InfoChildren";
import InfoParents from "./pages/Info/InfoParents";
import InfoSchool from "./pages/Info/InfoSchool";
import AboutIfunanyachi from "./pages/About/AboutIfunanyachi";
import AboutChikamso from "./pages/About/AboutChikamso";
import About from "./pages/About/About";
import moment from "moment";
import { ClockLoader } from "react-spinners";

class App extends Component {
  state = {
    loading: true,
  };
  sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false,
    });
  };
  componentDidMount() {
    this.wait(2000);
  }

  month = moment(new Date()).format("MMMM");

  getSeason = () => {
    let season = "";
    if (this.month === "December" || "January" || "Febuary") {
      season = "Winter";
    } else if (this.month === "March" || "April" || "May") {
      season = "Spring";
    } else if (this.month === "June" || "July" || "August") {
      season = "Summer";
    } else {
      season = "Autumn";
    }
    return season;
  };

  season = this.getSeason();

  getColour = () => {
    let colour = "";
    if (this.season === "Autumn") {
      colour = "#febd59";
    } else if (this.season === "Winter") {
      colour = "#38b6ff";
    } else if (this.season === "Spring") {
      colour = "#78dc55";
    } else {
      colour = "#eec724";
    }
    return colour;
  };

  colour = this.getColour();
  render() {
    if (this.state.loading === true) {
      return (
        <div className="App">
          {this.season === "Winter" ? (
            <div className="snowflakes" aria-hidden="true">
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
            </div>
          ) : (
            <div></div>
          )}
          <ClockLoader color={this.colour} size="150" />
        </div>
      );
    }
    return (
      <div>
        {this.season === "Winter" ? (
          <div className="snowflakes" aria-hidden="true">
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
          </div>
        ) : (
          <div></div>
        )}
        <Header />
        <Router>
          <Switch>
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route path="/about-chikamso" component={AboutChikamso} />
            <Route path="/about-ifunanyachi" component={AboutIfunanyachi} />
            <Route path="/school-info" component={InfoSchool} />
            <Route path="/children-info" component={InfoChildren} />
            <Route path="/parent-info" component={InfoParents} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
