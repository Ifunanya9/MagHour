import React, { Component } from "react";

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Results of ""</h1>
        <div id="search-container">
          <input className="center" type="text" placeholder="Search" />
        </div>
<br/>
        <div className="section black">
          <div className="card z-depth-0">
            <div className="card-content black">
              <span className="card-title text-white">Results</span>
              <div className="container section project-details">
                <div className="card z-depth-0">
                  <div className="card-content">
                  <span className="card-title">John</span>
                    <p>How much groups the persons made: 0</p>
                    <p>School: Dean Park Primary School</p>
                    <p>Description: blah blah blah</p>
                  </div>
                  <div className="card-action grey lighten-4 grey-text">
                    <div>User was created at: 12:00 pm</div>
                  </div>
                </div>
              </div>
              <div className="container section project-details">
                <div className="card z-depth-0">
                  <div className="card-content">
                    <span className="card-title">Paul</span>
                    <p>How much groups the persons made: 0</p>
                    <p>School: Dean Park Primary School</p>
                    <p>Description: blah blah blah</p>
                  </div>
                  <div className="card-action grey lighten-4 grey-text">
                  <div>User was created at: 12:00 pm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}