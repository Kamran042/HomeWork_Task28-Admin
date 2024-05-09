import React from "react";
import Header from "../../Layout/Admin/Header/Header";
import Footer from "../../Layout/Admin/Footer/Footer";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

const AdminRoot = () => {
  return (
    <React.Fragment>
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
      <Toaster/>
    </React.Fragment>
  );
};

export default AdminRoot;
