// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtncVSR1m9lkxLdfCzWKWfa7KCsvKzXR4",
  authDomain: "electiondisplay-cd9a1.firebaseapp.com",
  projectId: "electiondisplay-cd9a1",
  storageBucket: "electiondisplay-cd9a1.firebasestorage.app",
  messagingSenderId: "653096453446",
  appId: "1:653096453446:web:d1cd5e3db24153a4739147"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();


window.db = db;
window.storage = storage;

console.log("Firebase Connected");