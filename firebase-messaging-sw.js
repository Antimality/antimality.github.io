importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCpWLo_qbXG6otMBV1QdyR7qqlx0LSyREU",
  projectId: "maintenance-manager-113",
  messagingSenderId: "36279565916",
  appId: "1:36279565916:web:4ef63a610886b46a01f099",
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});
