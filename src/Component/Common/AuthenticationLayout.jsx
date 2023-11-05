import React from "react";

import { NavLink } from "react-router-dom";

const AuthenticationLayout = () => {
  return (
    <div>
      <ul className="grid grid-cols-2 text-center">
        <NavLink to="/authentication/signup" className="bg-gray-100 no-underline rounded-md py-2  ">
          Signup
        </NavLink>
        <NavLink to="/authentication/login" className="bg-gray-100 no-underline rounded-md py-2  ">
          Login
        </NavLink>
      </ul>
    </div>
  );
};

export default AuthenticationLayout;
