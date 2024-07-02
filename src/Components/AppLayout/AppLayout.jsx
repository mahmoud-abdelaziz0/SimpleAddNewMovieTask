import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet></Outlet>
      {/* <Footer /> */}
    </>
  );
};

export default AppLayout;