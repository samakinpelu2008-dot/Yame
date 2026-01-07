// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Replace this config with your Firebase project's config
const firebaseConfig = {
  apiKey: "AIzaSyBEOlLBZvTRxjzxBal9HstvnU2121TXzJg",
  authDomain: "storyverse-2dd65.firebaseapp.com",
  projectId: "storyverse-2dd65",
  storageBucket: "storyverse-2dd65.appspot.com",
  messagingSenderId: "547979964176",
  appId: "1:547979964176:web:c4b54dce44caee07ab3f95"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
