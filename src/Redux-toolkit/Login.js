import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  loggedUserDetails: {}, // Holds user details after login
  newUserData: null, // Holds user data after signup
  isLoading: false, // Tracks loading state (currently unused in the reducers)
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    // Reducer for handling user signup
    signupUser: (state, action) => {
      state.newUserData = action.payload; // Save new user data in the state
      localStorage.setItem("userEmail", action.payload.email); // Store user email in localStorage
      Cookies.set("token", action.payload.accessToken, { expires: 30 }); // Set auth token in cookies with 30-day expiration
    },
    // Reducer for handling user login
    loginUser: (state, action) => {
      state.loggedUserDetails = action.payload; // Save logged user details in the state
      localStorage.setItem("userEmail", action.payload.email); // Store user email in localStorage
      Cookies.set("token", action.payload.accessToken, { expires: 30 }); // Set auth token in cookies with 30-day expiration
    },
  },
});

// Exporting the actions to be used in components
export const { signupUser, loginUser } = loginSlice.actions;

// Exporting the reducer to be used in the store
export default loginSlice.reducer;
