import React from "react";
import circle from "../../assets/circle.png";

import vegatable from "../../assets/vegatable.jpg";
import shopping from "../../assets/shopping.svg";
import plant from "../../assets/plant.svg";
import time from "../../assets/time.svg";
import payment from "../../assets/payment.svg";

import Items from "./Items";
const WhyChooseUs = () => {
  return (
    <div className="bg-gray py-[190px]">
      {/* Content */}
      <div className="box flex items-center gap-12">
        <div className="w-[48%]">
          <span className="sub-title">Why Choose us?</span>
          <h2 className="healing ">
            We do not buy from the open market & traders.
          </h2>
          <p className="desc">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard the 1500s, when an
            unknown
          </p>

          <div className="mt-9">
            <div className="mt-[24px]">
              <div className="inline-flex gap-2 items-center py-[29px] pl-[27px] pr-[90px] bg-gray_1 rounded-[49px]">
                <img src={circle}></img>
                <span className="healing text-[20px] ">
                  100% Natural Product
                </span>
              </div>
              <p className="desc ml-[60px] w-[444px] mt-[12px]">
                Simply dummy text of the printing and typesetting industry Lorem
                Ipsum
              </p>
            </div>
            <div className="mt-[24px]">
              <div className="inline-flex gap-2 items-center py-[29px] pl-[27px] pr-[90px] bg-gray_1 rounded-[49px]">
                <img src={circle}></img>
                <span className="healing text-[20px] ">
                  Increases resistance
                </span>
              </div>
              <p className="desc ml-[60px] w-[444px] mt-[12px]">
                Simply dummy text of the printing and typesetting industry Lorem
                Ipsum
              </p>
            </div>
          </div>
        </div>
        <div className="w-[600px] rounded-3xl">
          <img src={vegatable} className="w-[600px] rounded-3xl"></img>
        </div>
      </div>

      {/* item  */}

      {/* div */}

      <div className="w-[1118px] mx-auto mt-[90px] flex gap-8">
        <Items img={shopping} title={"Return Policy"}></Items>
        <Items img={plant} title={"100% Fresh"}></Items>
        <Items img={time} title={"Support 24/7"}></Items>
        <Items img={payment} title={"Secured Payment"}></Items>
      </div>
    </div>
  );
};

export default WhyChooseUs;
