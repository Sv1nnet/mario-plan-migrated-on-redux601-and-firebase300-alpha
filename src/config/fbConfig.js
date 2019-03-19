import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Initialize Firebase
var config = {
  apiKey: "AIzaSyC6G8oGB6ZQkoH86HDEscPcCjXqXcBtPSE",
  authDomain: "mario-plan-df098.firebaseapp.com",
  databaseURL: "https://mario-plan-df098.firebaseio.com",
  projectId: "mario-plan-df098",
  storageBucket: "mario-plan-df098.appspot.com",
  messagingSenderId: "338398631240"
};
firebase.initializeApp(config);
// firebase.firestore(); // We don't need this anymore because we create firestore in index.js

export default firebase;
