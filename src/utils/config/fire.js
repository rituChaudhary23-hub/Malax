import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBLjBP3mUkvggeHVBRrXVIWaJf9CppATfI",
    authDomain: "mydemo-863e7.firebaseapp.com",
    projectId: "mydemo-863e7",
    storageBucket: "mydemo-863e7.appspot.com",
    messagingSenderId: "1086416963358",
    appId: "1:1086416963358:web:2559ad59a980c3503c6b0f"
  };
const fire = firebase.initializeApp(firebaseConfig);
export default fire;