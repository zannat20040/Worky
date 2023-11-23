import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center py-6">
        <span className="loading loading-spinner loading-lg block justify-center py-9"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate
      state={{ redirectTo: location.pathname }}
      to="/authentication/login"
    ></Navigate>
    // <Navigate state={location.pathname} to="/authentication/login"></Navigate>
  );
};

export default PrivateRoute;
