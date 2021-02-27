import React, { Component } from "react";
import ChatList from "./ChatList/ChatList";
import { connect } from "react-redux";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import firebase from "../../../services/firebase";
import "./private.css";
import ChatView from "./ChatView/ChatView";
import ChatTextBox from "./ChatTextBox/ChatTextBox";
import NewChat from "./NewChat/NewChat";

class PrivateChat extends Component {
  state = {
    selectedChat: null,
    newChatFormVisible: false,
    email: this.props.auth.email,
    userName: null,
    chats: [],
  };
  submitMessage = (msg) => {
    const docKey = this.buildDocKey(
      this.state.chats[this.state.selectedChat].users.filter(
        (_usr) => _usr !== this.state.email
      )[0]
    );
    firebase
      .firestore()
      .collection("privateChats")
      .doc(docKey)
      .update({
        messages: firebase.firestore.FieldValue.arrayUnion({
          sender: this.state.email,
          message: msg,
          timestamp: Date.now(),
        }),
        receiverHasRead: false,
      });
  };

  // Always in alphabetical order:
  // 'user1:user2'
  buildDocKey = (friend) => [this.state.email, friend].sort().join(";");

  newChatBtnClicked = () =>
    this.setState({ newChatFormVisible: true, selectedChat: null });

  newChatSubmit = async (chatObj) => {
    const docKey = this.buildDocKey(chatObj.sendTo);
    await firebase
      .firestore()
      .collection("privateChats")
      .doc(docKey)
      .set({
        messages: [
          {
            message: chatObj.message,
            sender: this.state.email,
          },
        ],
        users: [this.state.email, chatObj.sendTo],
        receiverHasRead: false,
      });
    this.setState({ newChatFormVisible: false });
    this.selectChat(this.state.chats.length - 1);
  };

  selectChat = async (chatIndex) => {
    await this.setState({ selectedChat: chatIndex, newChatFormVisible: false });
    this.messageRead();
  };

  goToChat = async (docKey, msg) => {
    const usersInChat = docKey.split(";");
    const chat = this.state.chats.find((_chat) =>
      usersInChat.every((_user) => _chat.users.includes(_user))
    );
    this.setState({ newChatFormVisible: false });
    await this.selectChat(this.state.chats.indexOf(chat));
    this.submitMessage(msg);
  };

  // Chat index could be different than the one we are currently on in the case
  // that we are calling this function from within a loop such as the chatList.
  // So we will set a default value and can overwrite it when necessary.
  messageRead = () => {
    const chatIndex = this.state.selectedChat;
    const docKey = this.buildDocKey(
      this.state.chats[chatIndex].users.filter(
        (_usr) => _usr !== this.state.email
      )[0]
    );
    if (this.clickedMessageWhereNotSender(chatIndex)) {
      firebase
        .firestore()
        .collection("privateChats")
        .doc(docKey)
        .update({ receiverHasRead: true });
    } else {
      console.log("Clicked message where the user was the sender");
    }
  };

  clickedMessageWhereNotSender = (chatIndex) =>
    this.state.chats[chatIndex].messages[
      this.state.chats[chatIndex].messages.length - 1
    ].sender !== this.state.email;

  componentWillMount = () => {
    firebase.auth().onAuthStateChanged(async (_usr) => {
      if (!_usr) this.props.history.push("/login");
      else {
        await firebase
          .firestore()
          .collection("privateChats")
          .where("users", "array-contains", _usr.email)
          .onSnapshot(async (res) => {
            const chats = res.docs.map((_doc) => _doc.data());
            await this.setState({
              email: _usr.email,
              chats: chats,
              friends: [],
            });
          });
      }
    });
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <div>
        <ChatList
          newChatBtnFn={this.newChatBtnClicked}
          history={this.props.history}
          selectChatFn={this.selectChat}
          chats={this.state.chats}
          userEmail={this.state.email}
          userName={this.state.userName}
          selectedChatIndex={this.state.selectedChat}
        ></ChatList>
        {this.state.newChatFormVisible ? null : (
          <ChatView
            userEmail={this.state.email}
            user={this.state.email}
            chat={this.state.chats[this.state.selectedChat]}
          ></ChatView>
        )}
        {this.state.selectedChat !== null && !this.state.newChatFormVisible ? (
          <ChatTextBox
            messageReadFn={this.messageRead}
            submitFn={this.submitMessage}
          ></ChatTextBox>
        ) : null}
        {this.state.newChatFormVisible ? (
          <NewChat
            goToChatFn={this.goToChat}
            newChatSubmitFn={this.newChatSubmit}
          ></NewChat>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const chats = state.firestore.ordered.chats;
  return {
    chats: chats,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "privateChats" }])
)(PrivateChat);
