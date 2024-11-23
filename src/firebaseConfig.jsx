// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GithubAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTLMXnuJEMnn26ENMnZyYW0rG5QCFR3ZQ",
  authDomain: "expensetracker-293b0.firebaseapp.com",
  projectId: "expensetracker-293b0",
  storageBucket: "expensetracker-293b0.firebasestorage.app",
  messagingSenderId: "877870894791",
  appId: "1:877870894791:web:79880b700abc0b28faf8e2",
  measurementId: "G-DLB7MNGD05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GithubAuthProvider();
provider.setCustomParameters({
  allow_signup: "true",
})
export const auth = getAuth(app);