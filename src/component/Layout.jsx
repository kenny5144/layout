import React from "react";
import Nav from "./Nav/Nav";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <div>
        Footer
      </div>
    </div>
  );
};

export default Layout;
