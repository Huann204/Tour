import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // Nếu không có token thì đá về trang login
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  // Nếu có token thì render children (VD: Dashboard)
  return children;
};

export default ProtectedRoute;
