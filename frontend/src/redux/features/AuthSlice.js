import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "Account",
  initialState: {
    account: localStorage.getItem("jobBazarBD")
      ? JSON.parse(localStorage.getItem("jobBazarBD"))
      : "",
  },
  reducers: {
    AccountReducer: (state, action) => {
      state.account = action.payload;
      localStorage.setItem("jobBazarBD", JSON.stringify(action.payload));
    },
  },
});

// Action creators are generated for each case reducer function
export const { AccountReducer } = AuthSlice.actions;

export default AuthSlice.reducer;
