import React from "react";
import bannerCta from "../../assets/bannerCTA.jpg";
const BannerCta = () => {
  return (
    <div
      className="box h-[323px]  bg-bottom rounded-[30px] mt-[150px]"
      style={{
        backgroundImage: `url(${bannerCta})`,
      }}>
      <div className=" flex justify-between w-[1258px] mx-auto py-[105px] items-center ">
        <h2 className="font-roboto text-white font-extrabold text-[50px] w-[357px]">
          Subscribe to our Newsletter
        </h2>
        <div>
          <input
            type="text"
            placeholder="Your Email Address"
            className=" w-[350px] py-[28px] px-[23px] rounded-xl"></input>
          <button className="ml-3 w-[220px] px-[48px] py-[28px] bg-primary text-white rounded-2xl font-roboto text-xl ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerCta;
