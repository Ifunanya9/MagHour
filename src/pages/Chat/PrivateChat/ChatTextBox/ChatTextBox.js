import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Send from "@material-ui/icons/Send";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

class ChatTextBox extends Component {
  state = {
    chatText: "",
  };
  userTyping = (e) => {
    e.keyCode === 13
      ? this.handleSubmit()
      : this.setState({ chatText: e.target.value });
  };
  messageValid = (txt) => txt && txt.replace(/\s/g, "").length;
  userClickedInput = () => this.props.messageReadFn();
  handleSubmit = (e) => {
    if (this.messageValid(this.state.chatText)) {
      this.props.submitFn(this.state.chatText);
      document.getElementById("chattextbox").value = "";
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.chatTextBoxContainer}>
        <TextField
          placeholder="Type your message..."
          onKeyUp={(e) => this.userTyping(e)}
          id="chattextbox"
          className={classes.chatTextBox}
          onFocus={this.userClickedInput}
        ></TextField>
        <Send className={classes.sendBtn} onClick={this.handleSubmit}></Send>
      </div>
    );
  }
}

export default withStyles(styles)(ChatTextBox);
