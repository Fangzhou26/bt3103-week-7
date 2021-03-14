import firebase from "firebase"
var firebaseConfig = {
    apiKey: "AIzaSyAdmG82EWYtJThra3dd4k76Ng1fO0gqqN0",
    authDomain: "bt3103-week-6-3b317.firebaseapp.com",
    projectId: "bt3103-week-6-3b317",
    storageBucket: "bt3103-week-6-3b317.appspot.com",
    messagingSenderId: "891905201882",
    appId: "1:891905201882:web:9305fb493daa8f9dd7b7e3",
    measurementId: "G-JFZ9DKGMS2"
  };

  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;