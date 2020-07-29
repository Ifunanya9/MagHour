import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import "./chat.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import moment from "moment";
import { deleteChat } from "../../store/actions/chatActions";
import ReactEmoji from "react-emoji";

class ChatSummary extends Component {
  removeItem = () => {
    const { chat } = this.props;
    const { id } = chat;
    return this.props.deleteChat(id);
  };
  render() {
    const { chat, auth } = this.props;
    return (
      <Card
        className={
          "chat-bubble text-center " +
          (auth.uid === chat.authorId ? "current-user" : "")
        }
        style={{ width: "18rem" }}
      >
        <div
          className="cart-icon col-10 mx-auto col-lg-2"
          onClick={() => this.removeItem()}
        >
          <RiDeleteBin6Line />
        </div>

        <Card.Header>
          <strong>{chat.authorUserName}</strong>
          <br />
          <strong>
            {moment(chat.createdAt.toDate()).format("MMMM Do YYYY, h:mm a")}
          </strong>
        </Card.Header>
        <Card.Body>
          <Card.Text>{ReactEmoji.emojify(chat.content)}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteChat: (id) => dispatch(deleteChat(id)),
  };
};

export default connect(null, mapDispatchToProps)(ChatSummary);
