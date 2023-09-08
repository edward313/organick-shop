import React from "react";

import Bg from "../../assets/Bg-hero.png";

import arrow from "../../assets/Arrow.svg";
const Hero = () => {
  return (
    <div
      className="w-full h-[897px] object-cover relative bg-no-repeat bg-cover mx-auto max-w-[100%-20px]"
      style={{
        backgroundImage: `url(${Bg} )`,
      }}>
      {/* Info  */}
      <div className="box pt-[267px]  ">
        <div className="w-[33%]">
          <h2 className="font-yellowtail text-4xl text-green">
            100% Natural Food
          </h2>
          <h1 className="text-[73px] font-roboto font-extrabold">
            Choose the best healthier way of life
          </h1>
          <a className="inline-flex bg-yellow px-[39px] py-[28px] rounded-2xl text-primary font-bold ">
            Explore Now
            <img src={arrow} alt="22" className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
