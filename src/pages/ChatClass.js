import React, { Component } from "react";
import Header from "../components/Header";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import {Card} from "react-bootstrap"
import "./chat.css";



export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: auth().currentUser,
      chats: [],
      content: "",
      readError: null,
      // uid: null,
      writeError: null,
      loadingChats: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.getUid = this.getUid.bind(this);
    this.myRef = React.createRef();
  }

  async componentDidMount() {
    this.setState({ readError: null, loadingChats: true });
    const chatArea = this.myRef.current;
    try {
      db.ref("chats").on("value", snapshot => {
        let chats = [];
        snapshot.forEach(snap => {
          chats.push(snap.val());
        });
        chats.sort(function(a, b) {
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
      content: event.target.value
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
        chatBy: this.state.user.email
      });
      this.setState({ content: "" });
      chatArea.scrollBy(0, chatArea.scrollHeight);
    } catch (error) {
      this.setState({ writeError: error.message });
    }
  }

  // getUid(userid){
  //   this.setState({uid: userid});
  // }

  formatTime(timestamp) {
    const d = new Date(timestamp);
    const time = `
    ${d.getDate()}/${d.getMonth() +
      1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()} `;
    return time;
  }

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
          {this.state.chats.map(chat => {
            console.log(chat.chatBy)
            return (
              <Card className={"chat-bubble " + (this.state.user.uid === chat.uid ? "current-user" : "")} style={{ width: '18rem' }}>
              <Card.Header >
                <strong>{chat.chatBy}</strong>
              <br/>
                <strong>{this.formatTime(chat.timestamp)}</strong>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  {chat.content}
                </Card.Text>
              </Card.Body>
            </Card>
            )
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
            ></textarea>

            {this.state.error ? (
              <p className="text-danger">{this.state.error}</p>
            ) : null}
            {this.state.content ? (
              this.state.content !== " " ?(
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
