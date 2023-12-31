import React from "react";
import left from "../../assets/left-counter.png";
import right from "../../assets/right-counter.png";
import avatar from "../../assets/avatar.png";
import star from "../../assets/Star.svg";
import chart from "../../assets/chart.png";
import CounterItem from "./CounterItem";
const Counter = () => {
  return (
    <div className="mt-[100px] bg-[#FCFCFC] w-[full] h-[1267px] relative">
      <img src={left} className="absolute left-0"></img>
      <img src={right} className="absolute right-0"></img>

      <div className="w-[1180px] mx-auto text-center pt-[168px]">
        <span className="font-yellowtail text-green text-4xl">Testimonial</span>
        <h2 className="font-roboto text-[50px] text-primary font-extrabold">
          What Our Customer Saying?
        </h2>
        <div className="w-[780px] mx-auto mt-[60px]">
          <img src={avatar} className="block mx-auto"></img>
          <img
            src={star}
            className="block mx-auto mt-5 w-[122px] object-cover"></img>
          <p className="text-xl mt-[25px]">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been.
          </p>
          <div className="flex flex-col mt-[25px]">
            <span className="font-roboto text-[25px] text-primary font-extrabold">
              Sara Taylor
            </span>
            <span className="font-Open text-[15px] text-[#525C60]">
              Consumer
            </span>
          </div>
          {/* stroke */}
        </div>

        <div className="border-solid border-0 border-t border-[#E0E0E0] my-[100px]"></div>

        {/* count */}

        <div className="w-[1003px] mx-auto flex justify-between">
          <CounterItem title={"Organic"} stats={"100%"}></CounterItem>
          <CounterItem title={"Active Product"} stats={"285"}></CounterItem>
          <CounterItem title={"Organic Orchads"} stats={"350+"}></CounterItem>
          <CounterItem title={"Years of Farming"} stats={"25+"}></CounterItem>
        </div>
      </div>
    </div>
  );
};

export default Counter;
