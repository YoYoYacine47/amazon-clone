import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBS_rZDv4oNbFJDlnuNSe7Omcy2ogEfnsY",
  authDomain: "clone-2ae08.firebaseapp.com",
  projectId: "clone-2ae08",
  storageBucket: "clone-2ae08.appspot.com",
  messagingSenderId: "655664564722",
  appId: "1:655664564722:web:594993fd50998fa5fd036b",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
