import React from "react";
import AuthenticationLayout from "../Component/Common/AuthenticationLayout";
import Navbar from "../Component/Common/Navbar";
import { Outlet } from "react-router-dom";

const Authentication = () => {
  return (
    <>
      <Navbar></Navbar>
     <div className="px-3">
	 <div className=" w-full md:w-3/5 mx-auto mt-20 shadow-xl p-5">
        <AuthenticationLayout></AuthenticationLayout>
        <h1 className="text-4xl font-bold text-center mt-9 ">
          Welcome to <span className="text-green-800">Worky!</span>
        </h1>
		<p className="text-gray-400  mt-3 text-center">Join our community of job seekers and employers to discover new opportunities and connect with professionals. We're excited to have you on board.</p>
        <Outlet></Outlet>
      </div>
	 </div>
    </>
  );
};

export default Authentication;
