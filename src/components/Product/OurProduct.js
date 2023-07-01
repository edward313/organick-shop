import React from "react";
import { Link } from "react-router-dom";
import ProductsList from "./ProductsList";
const OurProduct = () => {
  return (
    <div className=" my-[100px] mx-auto flex flex-col items-center">
      <span className="font-yellowtail text-4xl text-green ">Categories </span>
      <h2 className="font-roboto text-5xl text-primary font-extrabold">
        Our Products
      </h2>
      <ProductsList></ProductsList>

      <Link
        className="mt-[122px] px-[46px] py-[28px] bg-primary text-white rounded-2xl font-roboto font-bold text-xl"
        to={`/product`}>
        Load More
      </Link>
    </div>
  );
};

export default OurProduct;
