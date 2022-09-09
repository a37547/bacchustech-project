import React, { Component } from "react";
import { Link, Navigate, Outlet, Route } from "react-router-dom";
import NoAccess from "../../pages/noAccess/index";
import { AppContext } from "../appContext";
import Cookie from "js-cookie";

class ProtectedRoute extends Component {
  static contextType = AppContext;

  state = {};
  render() {
    const isLoggedIn = Cookie.get("token") ? true : false;
    return isLoggedIn ? <Outlet /> : <NoAccess />;
  }
}

export default ProtectedRoute;
