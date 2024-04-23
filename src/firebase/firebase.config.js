// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn9eLXNXn7uDLGWb2yJyPlDrgnyBXL3s0",
  authDomain: "user-email-password-46732.firebaseapp.com",
  projectId: "user-email-password-46732",
  storageBucket: "user-email-password-46732.appspot.com",
  messagingSenderId: "1065916026989",
  appId: "1:1065916026989:web:5fe746c92f4b22d5056f64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;