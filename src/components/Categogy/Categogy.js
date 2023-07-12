import React from "react";
import spicy from "../../assets/Spicy.jpg";
const Categogy = () => {
  return (
    <div className="bg-primary w-full h-[896px]">
      <div className="box pt-[188px] mb-4">
        <div className="text-center">
          <span className="sub-title text-center">About us</span>
          <h2 className="healing text-white">What We Offer for You</h2>
        </div>
        <div className="flex gap-5 mt-[33px]">
          <div className="w-[334px] text-center">
            <img src={spicy} className="rounded-[30px]"></img>
            <h6 className=" mt-6 text-[25px] font-roboto  text-white">Spicy</h6>
          </div>
          <div className="w-[334px] text-center">
            <img src={spicy} className="rounded-[30px]"></img>
            <h6 className=" mt-6 text-[25px] font-roboto  text-white">Spicy</h6>
          </div>
          <div className="w-[334px] text-center">
            <img src={spicy} className="rounded-[30px]"></img>
            <h6 className=" mt-6 text-[25px] font-roboto  text-white">Spicy</h6>
          </div>
          <div className="w-[334px] text-center">
            <img src={spicy} className="rounded-[30px]"></img>
            <h6 className=" mt-6 text-[25px] font-roboto  text-white">Spicy</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categogy;
