import firebase from 'firebase';

const Config = {
    apiKey: "AIzaSyABES-2KQuhwqrAaA5mtOtCcjNsBzgZO6w",
    authDomain: "react-firebase-demo-17551.firebaseapp.com",
    databaseURL: "https://react-firebase-demo-17551.firebaseio.com",
    projectId: "react-firebase-demo-17551",
    storageBucket: "react-firebase-demo-17551.appspot.com",
    messagingSenderId: "814765241936",
    appId: "1:814765241936:web:3c8d1c4837370ac5f98355",
    measurementId: "G-FD5ZYMNLEK"
  };
  const fb = firebase.initializeApp(Config)
export default fb;


