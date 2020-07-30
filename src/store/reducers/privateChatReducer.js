const initState = {};

const privateChatReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PRIVATE_CHAT":
      console.log("created chat", action.chat);
      return state;
    case "CREATE_PRIVATE_CHAT_ERROR":
      console.log("create chat error", action.err);
      return state;
    case "DELETE_PRIVATE_CHAT":
      console.log("Deleted chat");
      return state;
    case "DELETE_PRIVATE_CHAT_ERROR":
      console.log("Delete chat error");
      return state;
    case "EDIT_PRIVATE_CHAT":
      console.log("Edited chat");
      return state;
    case "EDIT_PRIVATE_CHAT_ERROR":
      console.log("Edit chat error");
      return state;
    default:
      return state;
  }
};

export default privateChatReducer;
