import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDeFlOeRoiNjqH9LAclnqnehXNY6scPqzE",
  authDomain: "businessio-37c69.firebaseapp.com",
  projectId: "businessio-37c69",
  storageBucket: "businessio-37c69.appspot.com",
  messagingSenderId: "287926988132",
  appId: "1:287926988132:web:39c6aaf2f8994406e75e71"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
