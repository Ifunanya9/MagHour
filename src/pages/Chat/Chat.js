import React, { Component } from "react";
import { connect } from "react-redux";
import ScrollToBottom from "react-scroll-to-bottom";
import "./chat.css";
import ChatSummary from "./ChatSummary";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { createChat } from "../../store/actions/chatActions";
import { Redirect } from "react-router-dom";

class Chat extends Component {
  state = {
    content: "",
    error: "",
  };

  componentDidUpdate = () => {
    const container = document.getElementById("chatview-container");
    if (container) {
      container.scrollTo(0, container.scrollHeight);
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await this.props.createChat(this.state);
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  // getUid(userid){
  //   this.setState({uid: userid});
  // }

  render() {
    const { chats, auth, profile } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <div>
        <br />
        <div className="container rounded-1">
          <ScrollToBottom className="messages">
            <div id="chatview-container" className="chat-area" ref={this.myRef}>
              {chats &&
                chats.map((chat, index) => {
                  return (
                    <div key={index}>
                      <ChatSummary chat={chat} auth={auth} />
                    </div>
                  );
                })}
            </div>
          </ScrollToBottom>
          <div className="text">
            <label htmlFor="text">Chat Here!</label>
            <form onSubmit={this.handleSubmit} className="mx-3">
              <textarea
                className="form-control chat-bubble chat-form"
                name="content"
                onChange={this.handleChange}
                value={this.state.content}
                id="content"
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
            Logged in as:{" "}
            <strong className="text-info">{profile.username}</strong>
          </div>
        </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    createChat: (chat) => dispatch(createChat(chat)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "chats", orderBy: ["createdAt", "asc"] }])
)(Chat);
