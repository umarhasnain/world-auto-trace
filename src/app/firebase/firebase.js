// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNus8oLDO0KQvy8lyShDMKOZs4JQUjDxA",
  authDomain: "foodi-resturent-project.firebaseapp.com",
  projectId: "foodi-resturent-project",
  storageBucket: "foodi-resturent-project.firebasestorage.app",
  messagingSenderId: "152364732501",
  appId: "1:152364732501:web:d77fb9958f4254d08644dc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
