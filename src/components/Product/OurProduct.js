import React from "react";

import ProductsList from "./ProductsList";
const OurProduct = () => {
  return (
    <div className=" mt-[100px] mx-auto flex flex-col items-center">
      <span className="font-yellowtail text-4xl text-green ">Categories </span>
      <h2 className="font-roboto text-5xl text-primary font-extrabold">
        Our Products
      </h2>
      <ProductsList></ProductsList>
    </div>
  );
};

export default OurProduct;
