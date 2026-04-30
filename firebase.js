// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAtncVSR1m9lkxLdfCzWKWfa7KCsvKzXR4",
  authDomain: "electiondisplay-cd9a1.firebaseapp.com",
  projectId: "electiondisplay-cd9a1",
  messagingSenderId: "653096453446",
  appId: "1:653096453446:web:d1cd5e3db24153a4739147"
};

// Init
firebase.initializeApp(firebaseConfig);

// ✅ ONLY Firestore (NO STORAGE)
const db = firebase.firestore();
window.db = db;

console.log("Firebase Connected");
