import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyAdL9cx-B7e-ALymPhHM3CrnrBXxmuK_Uo",
  authDomain: "mag-hour.firebaseapp.com",
  databaseURL: "https://mag-hour.firebaseio.com",
  projectId: "mag-hour",
  storageBucket: "mag-hour.appspot.com",
  messagingSenderId: "177218748401",
  appId: "1:177218748401:web:07c7ff72636a29ee580e50",
  measurementId: "G-LJJBNCXL5T",
};

// Initialize Firebase
firebase.initializeApp(config);
// firebase.firestore;

export default firebase;

export const auth = firebase.auth;
export const db = firebase.database();
export const fs = firebase.firestore();
