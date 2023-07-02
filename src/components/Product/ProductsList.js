import React from "react";
import Product from "./Product";

const ProductsList = ({ ProductItem }) => {
  return (
    <div>
      <div className=" box grid grid-cols-4 gap-5 mt-[40px]">
        <>
          {ProductItem?.map((item) => {
            return <Product key={item.id} item={item}></Product>;
          })}
        </>
      </div>
    </div>
  );
};

export default ProductsList;
