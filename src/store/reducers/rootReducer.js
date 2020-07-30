import chatReducer from "./chatReducer";
import authReducer from "./authReducer";
import privateChatReducer from "./privateChatReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  chats: chatReducer,
  privateChats: privateChatReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
