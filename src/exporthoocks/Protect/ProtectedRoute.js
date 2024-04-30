import { Navigate, Outlet } from "react-router-dom";
import React from "react";
const ProtectedRoute = ({ auth, children }) => {
  if (auth === false) {
    return <Navigate to="/login" replace></Navigate>;
  }

  return children ? children : <Outlet></Outlet>;
};

export default ProtectedRoute;
