<!-- firebase.js -->

<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js"></script>

<script>
const firebaseConfig = {
  apiKey: "AIzaSyDDaXmNZ49QhYkptagma6vRQhHcXmgjhes",
  authDomain: "electiondisplay-daca0.firebaseapp.com",
  projectId: "electiondisplay-daca0"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
</script>
