import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDRr8v9cnnZhpkmhn-sQOGf20FpgD_tH0A",
  authDomain: "maghour-42f2a.firebaseapp.com",
  databaseURL: "https://maghour-42f2a.firebaseio.com"
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
