import React from "react";

import { ProductItem } from "../../data/Product";
import star from "../../assets/Star.svg";

import { useParams } from "react-router-dom";

const ProductSingle = () => {
  const params = useParams();

  const Product = ProductItem.filter((product) => {
    return product.id == params.id;
  });
  console.log(Product);
  return (
    <div className="mt-[114px]">
      <div className="box">
        {Product.length > 0 &&
          Product?.map((item) => {
            return (
              <div className="flex gap-[88px] ">
                <div className="w-[600px] bg-[#F9F8F8] h-[600px] relative rounded-3xl">
                  <div>
                    <img
                      src={item.img}
                      className=" mix-blend-multiply w-[600px] h-[600px] object-center object-contain"></img>
                    <div className="px-[12px] py-[6px] bg-primary inline-block  rounded-lg absolute top-[30px] left-[30px]">
                      <span className="font-Open text-white text-[15px]">
                        {item.type}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-[660px] pt-[120px]">
                  <h2 className="healing text-[40px]">{item.name}</h2>
                  <div>
                    <img src={star} alt="star" className="mt-2"></img>
                    <span className="font-Open text-[18px] font-bold text-primary pt-3  inline-block">
                      $ {item.price}.00
                    </span>
                    <p className="desc mt-7">
                      Simply dummy text of the printing and typesetting
                      industry. Lorem had ceased to been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley.
                    </p>
                  </div>
                  <div className="mt-[35px]">
                    <span className="font-roboto text-2xl font-bold">
                      Quality :
                    </span>
                    <input
                      type="number"
                      className="  rounded-2xl w-[134px] h-[80px] bg-gray font-roboto text-xl text-center ml-[22px] px-2"></input>

                    <button className="bg-primary font-roboto text-xl text-white px-[46px] py-[28px] inline-flex rounded-2xl text-left mt-5 ml-5">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div>
        {Product.length == 0 && (
          <h2 className="healing box  text-center">NOT FOUND PRODUCT </h2>
        )}
      </div>
    </div>
  );
};

export default ProductSingle;
