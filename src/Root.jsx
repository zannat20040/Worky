import React from "react";
import Navbar from "./Component/Common/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Component/Common/Footer";

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
