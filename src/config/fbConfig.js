import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Initialize Firebase
var config = {
  // Put your firebase config here
};
firebase.initializeApp(config);
// firebase.firestore(); // We don't need this anymore because we create firestore in index.js

export default firebase;
