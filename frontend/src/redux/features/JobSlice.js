import { createSlice } from "@reduxjs/toolkit";

export const JobSlice = createSlice({
  name: "Jobs",
  initialState: {
    jobs: [],
  },
  reducers: {
    jobReducer: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.jobs = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { jobReducer } = JobSlice.actions;

export default JobSlice.reducer;
