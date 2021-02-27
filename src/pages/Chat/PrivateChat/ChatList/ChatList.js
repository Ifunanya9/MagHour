import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import NotificationImportant from "@material-ui/icons/NotificationImportant";

class ChatList extends Component {
  newChat = () => {
    this.props.newChatBtnFn();
  };
  selectChat = (index) => {
    this.props.selectChatFn(index);
  };
  userIsSender = (chat) =>
    chat.messages[chat.messages.length - 1].sender === this.props.userName;
  render() {
    const { classes } = this.props;
    return (
      <div>
        <br />
        <main className={classes.root}>
          <List>
            {this.props.chats &&
              this.props.chats.map((chat, index) => {
                return (
                  <div key={index}>
                    <ListItem
                      onClick={() => this.selectChat(index)}
                      className={classes.listItem}
                      selected={this.props.selectedChatIndex === index}
                      alignItems="flex-start"
                    >
                      <ListItemAvatar>
                        <Avatar alt="Remy">
                          {chat.users
                            .filter((user) => user !== this.props.userEmail)[0]
                            .split("")[0]
                            .toUpperCase()}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          chat.users.filter(
                            (user) => user !== this.props.userEmail
                          )[0]
                        }
                        secondary={
                          <React.Fragment>
                            <Typography component="span" color="textPrimary">
                              {chat.messages[
                                chat.messages.length - 1
                              ].message.substring(0, 30)}
                            </Typography>
                          </React.Fragment>
                        }
                      ></ListItemText>
                      {chat.receiverHasRead === false &&
                      !this.userIsSender(chat) ? (
                        <ListItemIcon>
                          <NotificationImportant
                            className={classes.unreadMessage}
                          ></NotificationImportant>
                        </ListItemIcon>
                      ) : null}
                    </ListItem>
                    <Divider></Divider>
                  </div>
                );
              })}
          </List>
          <Button
            variant="contained"
            color="primary"
            className={classes.newChatBtn}
            onClick={this.newChat}
          >
            +
          </Button>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(ChatList);
