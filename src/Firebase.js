import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA7YaNAolnNU67gcV4FhzBE4-xXUiIw8-4",
  authDomain: "twitter-clone-132a8.firebaseapp.com",
  projectId: "twitter-clone-132a8",
  storageBucket: "twitter-clone-132a8.appspot.com",
  messagingSenderId: "758331105241",
  appId: "1:758331105241:web:0cf830726409408caa03c8",
  measurementId: "G-0G4PLFPN28"
};

const FirebaseApp = Firebase.initializeApp(firebaseConfig);

const db = FirebaseApp.firestore();

export default db;