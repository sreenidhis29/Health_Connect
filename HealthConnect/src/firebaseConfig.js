import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2imZ4HCBDJkTlQkApQ5dWbE_SgNk8yiE",
  authDomain: "health-connect-11d55.firebaseapp.com",
  projectId: "health-connect-11d55",
  storageBucket: "health-connect-11d55.firebasestorage.app",
  messagingSenderId: "644094672816",
  appId: "1:644094672816:web:7f3ac044d7c713fadb6075",
  measurementId: "G-BNZFC635DR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Firestore
const auth = getAuth(app);
const firestore = getFirestore(app);

// Export app as default
export default app;

// You can also export auth and firestore for use elsewhere
export { auth, firestore };
