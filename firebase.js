// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc, onSnapshot, deleteDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDDaXmNZ49QhYkptagma6vRQhHcXmgjhes",
  authDomain: "electiondisplay-daca0.firebaseapp.com",
  projectId: "electiondisplay-daca0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore only (no storage)
export const db = getFirestore(app);

// Export Firestore functions
export { doc, setDoc, getDoc, onSnapshot, deleteDoc };
