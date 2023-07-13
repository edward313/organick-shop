import React, { Fragment } from "react";
import BannerTitle from "../components/Banner/BannerTitle";
import ProductsList from "../components/Product/ProductsList";
import AllProduct from "../components/Product/AllProduct";
const Shop = () => {
  return (
    <Fragment>
      <BannerTitle></BannerTitle>
      <AllProduct></AllProduct>
    </Fragment>
  );
};

export default Shop;
