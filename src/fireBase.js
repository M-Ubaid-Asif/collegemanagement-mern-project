/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import * as firebase from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA9lBM_H20GdGDkWxLBtpKtIP21CLC3xEY",
  authDomain: "enverxnotification.firebaseapp.com",
  projectId: "enverxnotification",
  storageBucket: "enverxnotification.appspot.com",
  messagingSenderId: "710769289936",
  appId: "1:710769289936:web:13e88de38a3fdbbbe50cd5",
  measurementId: "G-N7VEK026Z6",
};
firebase.initializeApp(firebaseConfig);
const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, {
    vapidKey:
      "BACOfXZ5EJq-TllZrJqqHHlwp1z5z-t6NpYG8W4l9mJPkCfO9-ItMq2FOzLHXV5II9gAq6LAEVh-BaFXDnvuwVM",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        return currentToken;
        // Perform any other neccessary action with the token
      }
      //    else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      return false;
      //   }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      return false;
    });
};
