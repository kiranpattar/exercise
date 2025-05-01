import React from "react";
import { Navigate } from "react-router-dom";

const AuthHOC = (WrappedComponent) => {
  return function AuthComponent(props) {
    const isAuthenticated = localStorage.getItem("authToken"); // Check token

    if (!isAuthenticated) {
      return <Navigate to="/login" replace />; // Redirect to login if not authenticated
    }

    return <WrappedComponent {...props} />; // Render the original component
  };
};

export default AuthHOC;
