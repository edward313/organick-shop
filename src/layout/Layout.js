import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import BannerCta from "../components/Banner/BannerCta";
const Layout = () => {
  return (
    <Fragment>
      <Header> </Header>
      <Outlet></Outlet>
      <BannerCta></BannerCta>
    </Fragment>
  );
};

export default Layout;
