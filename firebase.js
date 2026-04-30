// firebase.js

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDaXmNZ49QhYkptagma6vRQhHcXmgjhes",
  authDomain: "electiondisplay-daca0.firebaseapp.com",
  projectId: "electiondisplay-daca0",
  storageBucket: "electiondisplay-daca0.firebasestorage.app",
  messagingSenderId: "387914551638",
  appId: "1:387914551638:web:85cd5a2a5538f9efd906f7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Make db globally accessible
window.db = db;

// Optional: console check
console.log("Firebase Connected ✅");
