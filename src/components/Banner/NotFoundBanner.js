import React from "react";
import leaf from "../../assets/leaf.png";
import No from "../../assets/404.png";
import { Link } from "react-router-dom";
const NotFoundBanner = () => {
  return (
    <div className=" ">
      <div
        className="w-[full] h-[898px] mx-auto  "
        style={{
          backgroundImage: `url(${leaf})`,
        }}>
        {/* content */}
        <div className="box   ">
          <div className="w-[533px]  pt-[214px] ml-auto mr-0">
            <img src={No} className=""></img>
            <h1 className="font-roboto text-[70px] font-extrabold text-primary text-center">
              Page not found
            </h1>
            <p className="font-Open font-semibold text-[18px] text-center">
              The page you are looking for doesn't exist or has been moved
            </p>
            <Link
              to={"/"}
              className="bg-primary font-roboto text-xl text-white px-[46px] py-[28px] inline-flex rounded-2xl text-left mt-5">
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundBanner;
