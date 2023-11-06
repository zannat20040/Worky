import React from "react";

import { NavLink } from "react-router-dom";

const AuthenticationLayout = () => {
  return (
    <div className="bg-gray-100 rounded-md  ">
      <ul className="grid grid-cols-2 text-center">
        <NavLink to="/authentication/signup" className=" no-underline rounded-md duration-300 py-2 transition-all">
          Signup
        </NavLink>
        <NavLink to="/authentication/login" className=" no-underline rounded-md  duration-300 py-2 transition-all">
          Login
        </NavLink>
      </ul>
    </div>
  );
};

export default AuthenticationLayout;
