import React from 'react';
import Header from "../../Layout/Site/Header/Header";
import Footer from "../../Layout/Site/Footer/Footer";
import { Outlet } from 'react-router';

const SiteRoot = () => {
  return (
    <React.Fragment>
        <Header/>
        <Outlet/>
        <Footer/>
    </React.Fragment>
  )
}

export default SiteRoot