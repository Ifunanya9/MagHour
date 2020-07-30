import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

class ChatView extends Component {
  componentDidUpdate = () => {
    const container = document.getElementById("chatview-container");
    if (container) {
      container.scrollTo(0, container.scrollHeight);
    }
  };

  render() {
    const { classes, chat, user } = this.props;
    if (chat === undefined) {
      return <main id="chatview-container" className={classes.content}></main>;
    } else {
      return (
        <div>
          <div className={classes.chatHeader}>
            Your conversation with{" "}
            {chat.users.filter((user) => user !== this.props.userEmail)[0]}
          </div>

          <main id="chatview-container" className={classes.content}>
            {chat.messages.map((msg, index) => {
              return (
                <div
                  key={index}
                  className={
                    msg.sender === user ? classes.userSent : classes.friendSent
                  }
                >
                  {msg.sender}
                  <hr />
                  {msg.message}
                </div>
              );
            })}
          </main>
        </div>
      );
    }
  }
}

export default withStyles(styles)(ChatView);
