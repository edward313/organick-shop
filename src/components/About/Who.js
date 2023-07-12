import React from "react";
import farm from "../../assets/farm.jpg";
import WhoItem from "./WhoItem";
const Who = () => {
  return (
    <div className="flex items-center relative w-[1900px] mx-auto overflow-y-hidden max-w-[100%-36px]">
      <img src={farm} className=""></img>
      <div className="w-[38%] h-[733px] bg-white absolute right-[16.5%] rounded-3xl px-[90px] py-[78px] shadow ">
        <span className="font-yellowtail text-green text-4xl">
          Eco Friendly
        </span>
        <h2 className="font-roboto font-extrabold text-[50px] text-primary">
          Econis is a Friendly Organic Store
        </h2>

        <WhoItem title={"Start with Our Company First"}></WhoItem>
        <WhoItem title={"Learn How to Grow Yourself"}></WhoItem>
        <WhoItem title={"Farming Strategies of Today"}></WhoItem>
      </div>
    </div>
  );
};

export default Who;
