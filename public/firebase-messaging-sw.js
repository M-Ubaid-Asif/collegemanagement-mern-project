/* eslint-disable no-undef */
// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");
// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyCMRQu9gUh5lyYmHrYl8Lwv_1QrEiRlXE4",
  authDomain: "enverx-notification.firebaseapp.com",
  projectId: "enverx-notification",
  storageBucket: "enverx-notification.appspot.com",
  messagingSenderId: "713358614837",
  appId: "1:713358614837:web:844d41135c640ec4fdec7c",
  measurementId: "G-M44DG52N86",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(notificationTitle, notificationOptions);
});
