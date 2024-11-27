import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  browserLocalPersistence,
  browserSessionPersistence,
  GithubAuthProvider,
  GoogleAuthProvider,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { auth } from "../firebaseConfig";

// Async thunk for email/password login
const loginWithEmailAndPassword = createAsyncThunk(
  "auth/loginWithEmailAndPassword",
  async ({ email, password, rememberMe }, { rejectWithValue }) => {
    try {
      await setPersistence(
        auth,
        rememberMe ? browserLocalPersistence : browserSessionPersistence
      );
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return { user: userCredential.user, isLogged: true }; // Return user object
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

// Async thunk for GitHub login
const loginWithGithub = createAsyncThunk(
  "auth/loginWithGithub",
  async (_, { rejectWithValue }) => {
    try {
      const provider = new GithubAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      return { user: userCredential.user, isLogged: true }; // Return user object
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

// Async thunk for Google login
const loginWithGoogle = createAsyncThunk(
  "auth/loginWithGoogle",
  async (_, { rejectWithValue }) => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      return { user: userCredential.user, isLogged: true }; // Return user object
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

// Async thunk for logout
const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      return null; // Clear user state
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

const AuthReducer = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLogged: false,
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Email login
      .addCase(loginWithEmailAndPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithEmailAndPassword.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLogged = action.payload.isLogged;
        state.loading = false;
        state.error = null;
      })
      .addCase(loginWithEmailAndPassword.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      
      // Github login
      .addCase(loginWithGithub.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithGithub.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLogged = action.payload.isLogged;
        state.loading = false;
        state.error = null;
      })
      .addCase(loginWithGithub.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      // Google login
      .addCase(loginWithGoogle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLogged = action.payload.isLogged;
        state.loading = false;
        state.error = null;
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isLogged = false;
        state.error = null;
      });
  },
});

export { loginWithEmailAndPassword, loginWithGithub, loginWithGoogle, logout };
export default AuthReducer.reducer;
