import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyH7ir_XIh9CL5B3ZQilxTBnKAMRpg6xc",
  authDomain: "easy-list-e43da.firebaseapp.com",
  databaseURL: "https://easy-list-e43da.firebaseio.com",
  projectId: "easy-list-e43da",
  storageBucket: "easy-list-e43da.appspot.com",
  messagingSenderId: "166646180338",
  appId: "1:166646180338:web:95f5f6b680167361a6e36b",
  measurementId: "G-QJLMGVL7CB",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
  timestampsInSnapshots: true,
  experimentalForceLongPolling: true,
});

export const db = firebase.firestore();

export default firebase;
