export const createChat = (chat) => {
  return (dispatch, getState, { getFirebase }) => {
    // make async call to database
    const firestore = getFirebase().firestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("chats")
      .add({
        content: chat.content,
        authorUserName: profile.username,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_CHAT", chat });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_CHAT_ERROR", err });
      });
  };
};
