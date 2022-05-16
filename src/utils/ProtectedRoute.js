import React from "react";
// import { Redirect, Route } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";

const ProtectedRoute = ({ permit, children }) => {
  if (!permit) {
    return <ErrorPage text={"404 NOT FOUND"} />;
  }

  return children;
};

export default ProtectedRoute;
