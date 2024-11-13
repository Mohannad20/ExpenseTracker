// src/hooks/useAuth.js
import { useState, useEffect } from "react";
import { auth } from "../firebaseConfig"; // Import Firebase authentication instance
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";

function useAuth() {
  const [user, setUser] = useState(null);  // Track the current user
  const [loading, setLoading] = useState(true);  // Loading state to track auth state changes

  // Listen to auth state changes (user login, signup, or logout)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);  // Set loading to false once the auth state is checked
    });

    return unsubscribe; // Cleanup listener on component unmount
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw new Error("Login failed: " + error.message);
    }
  };

  // Signup function
  const signup = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw new Error("Signup failed: " + error.message);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      throw new Error("Logout failed: " + error.message);
    }
  };

  return { user, loading, login, signup, logout };
}

export default useAuth;
