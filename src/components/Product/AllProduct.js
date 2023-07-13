import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/Arrow.svg";
import ProductsList from "./ProductsList";

import { ProductItem } from "../../data/Product";
const AllProduct = () => {
  return (
    <div className="">
      <ProductsList ProductItem={ProductItem}></ProductsList>
    </div>
  );
};

export default AllProduct;
