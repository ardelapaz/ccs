import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDt-D-mmPlOKMMyOQVDj0rBKG9MjvDEfxg",
  authDomain: "ccs-r6.firebaseapp.com",
  databaseURL: "https://ccs-r6.firebaseio.com",
  projectId: "ccs-r6",
  storageBucket: "ccs-r6.appspot.com",
  messagingSenderId: "334970809062"
};
firebase.initializeApp(config);

export default firebase;