// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc, onSnapshot, deleteDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDDaXmNZ49QhYkptagma6vRQhHcXmgjhes",
  authDomain: "electiondisplay-daca0.firebaseapp.com",
  projectId: "electiondisplay-daca0",
  storageBucket: "electiondisplay-daca0.firebasestorage.app",
  messagingSenderId: "387914551638",
  appId: "1:387914551638:web:85cd5a2a5538f9efd906f7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { doc, setDoc, getDoc, onSnapshot, deleteDoc, ref, uploadBytes, getDownloadURL };