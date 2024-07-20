
// Import the necessary Firebase SDK modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOnIXymII11eIAH79BQV4gXtteoA84syk",
  authDomain: "fir-ddd3b.firebaseapp.com",
  projectId: "fir-ddd3b",
  storageBucket: "fir-ddd3b.appspot.com",
  messagingSenderId: "42821143773",
  appId: "1:42821143773:web:3e3429e53aee2603db1f34",
  measurementId: "G-GR9768VNY6"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase services instances after initialization
export const auth = getAuth(app); // Get the auth instance using the initialized app
export const db = getFirestore(app); // Get the Firestore instance using the initialized app

// Export the initialized Firebase app (optional, if needed elsewhere)
export default app;
