// firebase.js

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtncVSR1m9lkxLdfCzWKWfa7KCsvKzXR4",
  authDomain: "electiondisplay-cd9a1.firebaseapp.com",
  projectId: "electiondisplay-cd9a1",
  storageBucket: "electiondisplay-cd9a1.firebasestorage.app",
  messagingSenderId: "653096453446",
  appId: "1:653096453446:web:d1cd5e3db24153a4739147"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Make db globally accessible
window.db = db;

// Optional: console check
console.log("Firebase Connected ✅");
