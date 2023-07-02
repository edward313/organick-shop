import React from "react";
import new_1 from "../../assets/news-1.png";
import avatarIcon from "../../assets/avatarIcon.svg";
import arrow from "../../assets/Arrow.svg";
import { Link } from "react-router-dom";
const News = ({ banner, title }) => {
  return (
    <div
      className="w-[677px] h-[524px] rounded-[30px] relative"
      style={{ backgroundImage: `url(${banner})` }}>
      {/* time */}
      <div className="w-[82px] h-[82px] rounded-full bg-white flex items-center justify-center absolute top-[43px] left-[34px]">
        <span className="font-roboto font-bold text-[25px] text-primary px-[15px] py-[15px] text-center ">
          25 Nov
        </span>
      </div>

      <div className="  bg-white w-[613px] h-[330px] px-[57px] pt-[46px] pb-[60px] rounded-[33px]   absolute bottom-[-60px] left-[32px] shadow-md">
        <div className="flex">
          <img src={avatarIcon} className="mr-3"></img>
          <span className="font-roboto text-[18px] text-primary font-normal">
            By Rachi Card
          </span>
        </div>

        <h3 className="font-roboto text-[25px] text-primary font-extrabold mt-4">
          {title}
        </h3>
        <p className="font-Open text-[18px] text-[#525C60] w-[444px]">
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum
        </p>

        <Link className=" mt-[15px] inline-flex bg-yellow px-[39px] py-[28px] text-xl rounded-2xl text-primary font-bold ">
          Explore Now
          <img src={arrow} alt="22" className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default News;
