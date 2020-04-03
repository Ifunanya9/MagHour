import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBC8hrJ2ZdmxH731z4iJcw_y47U-S8zNII",
  authDomain: "maghour-2e48d.firebaseapp.com",
  databaseURL: "https://maghour-2e48d.firebaseio.com"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
