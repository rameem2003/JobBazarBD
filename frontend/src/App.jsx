import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AllJobs from "./pages/AllJobs";
import NewJob from "./pages/NewJob";
import JobDetails from "./pages/JobDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/jobs" element={<AllJobs />} />
          <Route path="/newjob" element={<NewJob />} />
          <Route path="/details/:id" element={<JobDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
