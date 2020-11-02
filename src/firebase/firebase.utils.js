import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDlK6X83JLxSXf2qd1UUhbHVp3z-EBIWl4",
  authDomain: "crwn-db-b49c8.firebaseapp.com",
  databaseURL: "https://crwn-db-b49c8.firebaseio.com",
  projectId: "crwn-db-b49c8",
  storageBucket: "crwn-db-b49c8.appspot.com",
  messagingSenderId: "821092117950",
  appId: "1:821092117950:web:8be22900e2969d2f6addef",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () =>
  auth
    .signInWithRedirect(provider)
    .then(function (result) {
      console.log(result);
      console.log("success");
    })
    .catch(function (error) {
      console.log(error);
      console.log("failed");
    });

export default firebase;
