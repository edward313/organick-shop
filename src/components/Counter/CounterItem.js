import React from "react";
import chart from "../../assets/chart.png";

const CounterItem = ({ stats, title }) => {
  return (
    <div className="relative w-[211px] h-[211px]">
      <img src={chart} className="absolute " />
      <span className="absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  font-Open font-semibold text-[18px] text-primary whitespace-nowrap">
        <strong className=" block font-roboto text-[50px]  font-extrabold">
          {stats}
        </strong>
        {title}
      </span>
      <span className="absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-roboto text-[50px] text-primary font-extrabold"></span>
    </div>
  );
};

export default CounterItem;
