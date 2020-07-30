export const createChat = (chat) => {
  return (dispatch, getState, { getFirebase }) => {
    // make async call to database
    const firestore = getFirebase().firestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    const auth = getState().firebase.auth;
    firestore
      .collection("chats")
      .add({
        content: chat.content,
        authorUsername: profile.username,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorEmail: auth.email,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_CHAT" });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_CHAT_ERROR", err });
      });
  };
};

export const deleteChat = (id) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("chats")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_CHAT" });
      })
      .catch((err) => {
        dispatch({ type: "DELETE_CHAT_ERROR", err });
      });
  };
};

export const editChat = (id, chat) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("chats")
      .doc(id)
      .update({
        content: chat.content,
        updatedAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "EDIT_CHAT" });
      })
      .catch((err) => {
        dispatch({ type: "EDIT_CHAT_ERROR", err });
      });
  };
};
