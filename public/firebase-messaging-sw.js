// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyASLBoVE9SyYsdjJkJ6bLVQHZGSaM_W_5U",
    authDomain: "test-notification-60c31.firebaseapp.com",
    projectId: "test-notification-60c31",
    storageBucket: "test-notification-60c31.appspot.com",
    messagingSenderId: "71346232611",
    appId: "1:71346232611:web:a4bcf997bb40011c074096"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});