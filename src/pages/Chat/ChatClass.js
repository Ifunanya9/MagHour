import React, { Component } from "react";
import Header from "../../components/Header/Header";
import { auth } from "../../services/firebase";
import { db } from "../../services/firebase";
import { Card } from "react-bootstrap";
import ReactEmoji from "react-emoji";
import "./chat.css";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: auth().currentUser,
      chats: [],
      userChatsAll: [],
      content: "",
      readError: null,
      // uid: null,
      writeError: null,
      loadingChats: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.myRef = React.createRef();
  }

  async componentDidMount() {
    this.setState({ readError: null, loadingChats: true });
    const chatArea = this.myRef.current;
    try {
      db.ref("chats").on("value", (snapshot) => {
        let chats = [];
        snapshot.forEach((snap) => {
          chats.push(snap.val());
        });
        chats.sort(function (a, b) {
          return a.timestamp - b.timestamp;
        });
        this.setState({ chats });
        chatArea.scrollBy(0, chatArea.scrollHeight);
        this.setState({ loadingChats: false });
      });
    } catch (error) {
      this.setState({ readError: error.message, loadingChats: false });
    }
  }

  handleChange(event) {
    this.setState({
      content: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ writeError: null });
    const chatArea = this.myRef.current;
    try {
      await db.ref("chats").push({
        content: this.state.content,
        timestamp: Date.now(),
        uid: this.state.user.uid,
        chatBy: this.state.user.email,
      });
      this.setState({ content: "" });
      chatArea.scrollBy(0, chatArea.scrollHeight);
    } catch (error) {
      this.setState({ writeError: error.message });
    }
  }

  // async handleDelete(event) {
  //   try {
  //     await db.ref().child("chats").remove(event);
  //   } catch (error){}}

  formatTime(timestamp) {
    const d = new Date(timestamp);
    const time = `
    ${d.getDate()}/${
      d.getMonth() + 1
    }/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()} `;
    return time;
  }

  // render(){
  // let userChatArray = [];
  // this.state.chats.forEach((chat) => {
  //   userChatArray.push(chat.userChats);
  // });
  // console.log(userChatArray);
  render() {
    return (
      <div>
        <Header />
        <br />
        <div className="container">
          <div className="chat-area" ref={this.myRef}>
            {this.state.loadingChats ? (
              <div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              ""
            )}
            {/* {this.state.chats.forEach((chat) => {  */}
            {this.state.chats.map((userChat) => {
              if (userChat.uid !== null) {
                return (
                  <Card
                    className={
                      "chat-bubble text-center " +
                      (this.state.user.uid === userChat.uid
                        ? "current-user"
                        : "")
                    }
                  >
                    <Card.Header key={userChat.id}>
                      <strong>{userChat.chatBy}</strong>
                      <br />
                      <strong>{this.formatTime(userChat.timestamp)}</strong>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text key={userChat.id}>
                        {ReactEmoji.emojify(userChat.content)}
                        <br />
                        <br />
                        {userChat.chatBy === this.state.user.email ? (
                          <button
                            key={userChat.id}
                            value={userChat}
                            className="btn blue"
                            type="button"
                            onClick={() => this.handleDelete(userChat.id)}
                          >
                            Delete
                          </button>
                        ) : null}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                );
              }
              return null;
              // })
            })}
          </div>
          <div className="text">
            <label htmlFor="text">Chat Here!</label>
            <form onSubmit={this.handleSubmit} className="mx-3">
              <textarea
                className="form-control chat-bubble chat-form"
                name="content"
                onChange={this.handleChange}
                value={this.state.content}
                id="text"
                onKeyPress={(event) =>
                  event.key === "Enter" ? this.handleSubmit(event) : null
                }
              ></textarea>

              {this.state.error ? (
                <p className="text-danger">{this.state.error}</p>
              ) : null}
              {this.state.content ? (
                this.state.content !== " " ? (
                  <button
                    type="submit"
                    className="btn btn-submit px-5 mt-4 button chat-bubble"
                  >
                    Send
                  </button>
                ) : null
              ) : null}
            </form>
          </div>
          <div className="py-5 mx-3 text">
            Login in as:{" "}
            <strong className="text-info">{this.state.user.email}</strong>
          </div>
        </div>
      </div>
    );
  }
}
