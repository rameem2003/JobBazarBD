import { configureStore } from "@reduxjs/toolkit";
import JobSlice from "../features/JobSlice";
import AuthSlice from "../features/AuthSlice";

export default configureStore({
  reducer: {
    allJobs: JobSlice,
    account: AuthSlice,
  },
});
