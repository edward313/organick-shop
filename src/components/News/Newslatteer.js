import React from "react";
import arrow from "../../assets/Arrow.svg";
import { Link } from "react-router-dom";
import new_1 from "../../assets/news-1.png";
import new_2 from "../../assets/news-2.png";
import News from "./News";
const Newslatteer = () => {
  return (
    <div className="box mt-[177px] mb-[200px]">
      {/* title */}
      <div className="flex justify-between items-end">
        <div className="w-[700px]">
          <span className=" font-yellowtail text-4xl text-green">News</span>
          <h2 className="font-roboto font-extrabold text-[50px] text-primary">
            Discover weekly content about organic food, & more
          </h2>
        </div>
        <div className="flex items-center px-[39px] py-[28px] bg-white rounded-2xl gap-2 border-solid border-[1px] border-primary">
          <Link className="font-roboto font-bold text-primary text-xl">
            More News
          </Link>
          <img src={arrow}></img>
        </div>
      </div>

      {/* item */}
      <div>
        <div className="mt-[15px] flex gap-[46px]">
          <News
            banner={new_1}
            title={"The Benefits of Vitamin D & How to Get It"}></News>
          <News
            banner={new_2}
            title={"Our Favourite Summertime Tommeto"}></News>
        </div>
      </div>
    </div>
  );
};

export default Newslatteer;
