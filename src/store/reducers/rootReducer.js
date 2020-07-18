import chatReducer from "./chatReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  chat: chatReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
