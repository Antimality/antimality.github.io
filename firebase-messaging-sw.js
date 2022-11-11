importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: 'AIzaSyBfpM45gkV9U0mNCidlQ3AJFPxD38s32HU',
  appId: '1:36279565916:web:4ef63a610886b46a01f099',
  messagingSenderId: '36279565916',
  projectId: 'maintenance-manager-113',
  authDomain: 'maintenance-manager-113.firebaseapp.com',
  databaseURL: 'https://maintenance-manager-113-default-rtdb.europe-west1.firebasedatabase.app',
  storageBucket: 'maintenance-manager-113.appspot.com',
  measurementId: 'G-YT0W9D6BVG',
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});
