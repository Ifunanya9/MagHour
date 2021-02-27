import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import "./profile.css";

// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: '30px',
//     padding: '40px',
//   }
// }));

class ProfileSettings extends Component {
  state = {
    firstName: "",
    lastName: "",
    userName: "",
  };
  handleSubmit = (e) => {};
  render() {
    const { auth, profile } = this.props;
    // const classes = useStyles();
    return (
      <div className="footer text-center">
        <br />
        <br />
        <br />
        <br />
        {/* <img src={auth.photoUrl} alt="auth-img"/> */}
        <h1>Hello {profile.username}</h1>
        <h2>Here you can change your Settings</h2>
        <br />
        <br />
        <TextField
          id="standard-read-only-input"
          label="Email"
          defaultValue={auth.email}
          InputProps={{
            readOnly: true,
          }}
        />
        <br />
        <br />
        <TextField
          id="username"
          label="Username"
          defaultValue={auth.password}
          // helperText="Some important text"
        />
        <br />
        <br />
        <TextField
          id="firstName"
          label="First Name"
          defaultValue={profile.firstName}
          // helperText="Some important text"
        />
        <br />
        <br />
        <TextField
          id="lastName"
          label="Last Name"
          defaultValue={profile.lastName}
          // helperText="Some important text"
        />
        <br />
        <br />
        <Button className="jkk" variant="contained" color="primary">
          Update
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(ProfileSettings);
