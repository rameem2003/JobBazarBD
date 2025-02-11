import React from "react";
import Navigation from "../components/shared/Navigation";
import { Outlet } from "react-router";
import Footer from "../components/shared/Footer";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
