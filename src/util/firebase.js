import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyChCI0lkOdXycjalK4OL8M2EJbb93NBhSY",
  authDomain: "archer-4d1a8.firebaseapp.com",
  databaseURL: "https://archer-4d1a8.firebaseio.com",
  projectId: "archer-4d1a8",
  storageBucket: "archer-4d1a8.appspot.com",
  messagingSenderId: "327515106806",
  appId: "1:327515106806:web:556aeb4081885274a8ebd7",
  measurementId: "G-073RXQYQK0",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
