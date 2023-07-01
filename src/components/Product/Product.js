import React from "react";
// import product from "../../assets/product-1.png";
import star from "../../assets/Star.svg";
import { Link } from "react-router-dom";
const Product = ({ item }) => {
  console.log(item);
  return (
    <div className="w-[335px] h-[483px] bg-[rgb(249,248,248)] pt-[60px] rounded-[33px]  relative ">
      <Link to={`/product/${item.id}`}>
        <img
          src={item.img}
          alt="product"
          className="flex object-center  mix-blend-multiply w-[328px] h-[328px] object-contain"></img>
      </Link>

      <div className="px-[30px]">
        <h4 className="font-roboto text-xl text-primary font-extrabold border-b-2 pb-[13px] border-[#DEDDDD] ">
          {item.name}
        </h4>
        {/* price */}
        <div className="flex justify-between items-center">
          <span className="font-Open text-[18px] font-bold text-primary pt-3">
            $ {item.price}.00
          </span>
          <div>
            <img src={star} alt="star"></img>
          </div>
        </div>
      </div>
      {/* type */}

      <div className="px-[12px] py-[6px] bg-primary inline-block  rounded-lg absolute top-[30px] left-[30px]">
        <span className="font-Open text-white text-[15px]">{item.type}</span>
      </div>
    </div>
  );
};

export default Product;
