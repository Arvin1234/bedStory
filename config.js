import * as firebase from 'firebase';
require("@firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDIFLFnlWTh6mjzhjiuEM3-cLYualpWjNk",
    authDomain: "story-hub-f7dc1.firebaseapp.com",
    databaseURL: "https://story-hub-f7dc1.firebaseio.com",
    projectId: "story-hub-f7dc1",
    storageBucket: "story-hub-f7dc1.appspot.com",
    messagingSenderId: "109052097242",
    appId: "1:109052097242:web:a7f1f703bd862c47b72be3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();