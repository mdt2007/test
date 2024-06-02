
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEW_UCOiSEsjw_YE35oVvHBqOSZFzTMbI",
  authDomain: "test-69447.firebaseapp.com",
  projectId: "test-69447",
  storageBucket: "test-69447.appspot.com",
  messagingSenderId: "803121455858",
  appId: "1:803121455858:web:e9eb8fac243c621eeb266b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)