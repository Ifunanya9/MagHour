import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import "./chat.css";
// import { RiDeleteBin6Line } from "react-icons/ri";
import moment from "moment";
import { deleteChat } from "../../store/actions/chatActions";
import ReactEmoji from "react-emoji";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { FiMoreVertical } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

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
          "chat-bubble " + (auth.uid === chat.authorId ? "current-user" : "")
        }
        style={{ width: "18rem" }}
      >
        {/* {auth.uid === chat.authorId ? (
          <div
            className="cart-icon text-right text-danger"
            onClick={() => this.removeItem()}
          >
            <RiDeleteBin6Line />
          </div>
        ) : null} */}
        {auth.uid === chat.authorId ? (
          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div>
                <div
                  className="right"
                  style={{ cursor: "pointer" }}
                  {...bindTrigger(popupState)}
                >
                  <FiMoreVertical />
                </div>
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <Box p={2}>
                    <Typography>
                      <div
                        className="cart-icon text-right text-danger"
                        onClick={() => this.removeItem()}
                        style={{ cursor: "pointer" }}
                      >
                        {/* <RiDeleteBin6Line /> */}
                        <AiFillDelete /> Delete
                      </div>
                    </Typography>
                  </Box>
                </Popover>
              </div>
            )}
          </PopupState>
        ) : null}

        <Card.Header className="text-center">
          <strong className="text-center">{chat.authorUsername}</strong>
          <br />
          <strong className="text-center">
            {moment(chat.createdAt.toDate()).format("MMMM Do YYYY, h:mm a")}
          </strong>
        </Card.Header>
        <Card.Body className="text-center">
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
