import React from "react";
import { Fragment } from "react";
import banner1 from "../../assets/banner-1.png";
import banner2 from "../../assets/banner-2.png";
const Banner = () => {
  return (
    <div className="w-[1400px] mx-auto flex gap-9 my-[150px]">
      <div
        className="w-[682px] h-[367px] "
        style={{
          backgroundImage: `url(${banner1})`,
        }}>
        <div className="w-[278px] ml-[70px] py-32  ">
          <span className="font-yellowtail text-4xl  text-white">
            Natural!!
          </span>
          <h3 className="font-roboto text-5xl  text-white font-extrabold">
            Get Garden Fresh Fruits
          </h3>
        </div>
      </div>
      <div
        className="w-[682px] h-[367px] "
        style={{
          backgroundImage: `url(${banner2})`,
        }}>
        <div className="w-[278px] ml-[70px] py-32 ">
          <span className="font-yellowtail text-4xl  text-green">Offer!!</span>
          <h3 className="font-roboto text-4xl  text-primary font-extrabold">
            Get 10% off on Vegetables
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
