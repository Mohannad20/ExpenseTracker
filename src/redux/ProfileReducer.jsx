import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuth, updateEmail, updateProfile } from "firebase/auth";

// Thunk to update the username
export const updateUsername = createAsyncThunk(
  "profile/updateUsername",
  async (username, { rejectWithValue }) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      try {
        await updateProfile(user, { displayName: username });
        return username;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    } else {
      return rejectWithValue("User not found");
    }
  }
);

// Thunk to change the email
export const changeEmail = createAsyncThunk(
  "profile/changeEmail",
  async (email, { rejectWithValue }) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      try {
        await updateEmail(user, email);
        return email;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    } else {
      return rejectWithValue("User not found");
    }
  }
);

// Thunk to fetch the user profile
export const fetchUserProfile = createAsyncThunk(
  "profile/fetchUserProfile",
  async (_, { rejectWithValue }) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      try {
        return {
          username: user.displayName,
          email: user.email,
        };
      } catch (error) {
        return rejectWithValue(error.message);
      }
    } else {
      return rejectWithValue("User not found");
    }
  }
);

const ProfileSlice = createSlice({
  name: "profile",
  initialState: {
    username: "",
    email: "",
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUsername.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUsername.fulfilled, (state, action) => {
        state.loading = false;
        state.username = action.payload;
      })
      .addCase(updateUsername.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(changeEmail.pending, (state) => {
        state.loading = true;
      })
      .addCase(changeEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.email = action.payload;
      })
      .addCase(changeEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.username = action.payload.username;
        state.email = action.payload.email;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ProfileSlice.reducer;