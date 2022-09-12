import {initializeApp} from "firebase/app";
import {getMessaging, getToken, onMessage} from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyASLBoVE9SyYsdjJkJ6bLVQHZGSaM_W_5U",
    authDomain: "test-notification-60c31.firebaseapp.com",
    projectId: "test-notification-60c31",
    storageBucket: "test-notification-60c31.appspot.com",
    messagingSenderId: "71346232611",
    appId: "1:71346232611:web:a4bcf997bb40011c074096"
};

const vapidKey = 'BNQw8R00P6WzuE_xkc9w2XtAd9HCy3B0_no_lam_B385vHp99TQCOLwW5CFl39_a56eWoxbIaLgbUZUvCaQmjxw';

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const getFirebaseToken = () => {
    return getToken(messaging, {vapidKey});
}

export const onNewMessage = (callBack: (payload: any) => void) => {
    onMessage(messaging, callBack)
};

