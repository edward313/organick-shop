import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/Arrow.svg";
import ProductsList from "./ProductsList";

import { ProductItem } from "../../data/Product";
const OfferProduct = () => {
  return (
    <div className="bg-primary">
      <div className="box py-[200px]">
        {/* title */}
        <div className="flex justify-between items-end">
          <div>
            <span className=" font-yellowtail text-4xl text-green">Offer</span>
            <h2 className="font-roboto font-extrabold text-[50px] text-white">
              We Offer Organic For You
            </h2>
          </div>
          <div className="flex items-center px-[39px] py-[28px] bg-yellow rounded-2xl gap-2">
            <Link className="font-roboto font-bold text-primary text-xl">
              View All Product
            </Link>
            <img src={arrow}></img>
          </div>
        </div>

        <ProductsList ProductItem={ProductItem.slice(0, 4)}></ProductsList>
      </div>
    </div>
  );
};

export default OfferProduct;
