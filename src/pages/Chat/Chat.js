import React, { Component } from "react";
import Header from "../../components/Header";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import "./chat.css";
import moment from "moment";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { createChat } from "../../store/actions/chatActions";
import { Redirect } from "react-router-dom";
import ReactEmoji from "react-emoji";

class Chat extends Component {
  state = {
    content: "",
    error: "",
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
        <Header />
        <br />
        <div className="container">
          <div className="chat-area" ref={this.myRef}>
            {chats &&
              chats.map((chat) => {
                return (
                  <Card
                    className={
                      "chat-bubble text-center " +
                      (auth.uid === chat.authorId ? "current-user" : "")
                    }
                    style={{ width: "18rem" }}
                  >
                    <Card.Header>
                      <strong>{chat.authorUserName}</strong>
                      <br />
                      <strong>
                        {moment(chat.createdAt.toDate()).format(
                          "MMMM Do YYYY, h:mm a"
                        )}
                      </strong>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>{ReactEmoji.emojify(chat.content)}</Card.Text>
                    </Card.Body>
                  </Card>
                );
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
