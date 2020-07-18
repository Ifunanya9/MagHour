const initState = {};

const chatReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_CHAT":
      console.log("created chat", action.chat);
      return state;
    case "CREATE_CHAT_ERROR":
      console.log("create chat error", action.err);
      return state;
    default:
      return state;
  }
};

export default chatReducer;
