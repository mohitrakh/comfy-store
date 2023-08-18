import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// will remove later
import { useUserContext } from "../context/user_context";
import { Checkout } from ".";

const PrivateRoute = ({ children }) => {
  let { isAuthenticated } = useAuth0();
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
