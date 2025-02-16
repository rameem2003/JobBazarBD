import { configureStore } from "@reduxjs/toolkit";
import JobSlice from "../features/JobSlice";

export default configureStore({
  reducer: {
    allJobs: JobSlice,
  },
});
