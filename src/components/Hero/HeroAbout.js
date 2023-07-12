import React from "react";
import salat from "../../assets/salat.png";
import tomato from "../../assets/tomato.png";
import car from "../../assets/car.svg";
import arrow from "../../assets/Arrow.svg";

import { Link } from "react-router-dom";
const HeroAbout = () => {
  return (
    <div className="mt-[160px] mb-[160px]">
      <div className=" w-[1500px] mx-auto flex ">
        {/* img */}
        <div className="w-[65%] h-[100%] relative">
          <img src={salat} className=""></img>
          <img
            src={tomato}
            className="absolute mix-blend-multiply bottom-[-100px] left-[-90px]"></img>
        </div>
        <div className="w-[675px]">
          <span className="font-yellowtail text-green text-4xl">About Us</span>
          <h2 className="font-roboto text-primary text-[50px] font-extrabold mt-2 w-[80%] leading-[1.25]">
            We do Creative Things for Success
          </h2>
          <p className="font-Open text-lg text-[#525C60] mt-4">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <p className="font-Open text-lg text-[#525C60] mt-4">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>

          <div className="flex gap-1 mt-12">
            <div className="flex gap-4">
              <img src={car}></img>
              <h3 className="font-roboto text-primary text-[25px] font-extrabold mt-2 w-[80%] leading-[1.25]">
                Modern Agriculture Equipment
              </h3>
            </div>
            <div className="flex gap-4">
              <img src={car}></img>
              <h3 className="font-roboto text-primary text-[25px] font-extrabold mt-2 w-[80%] leading-[1.25]">
                No growth hormones are used
              </h3>
            </div>
          </div>
          <div className="mt-5">
            <Link className="inline-flex bg-primary px-[39px] py-[20px] rounded-2xl text-white font-bold cursor-pointer">
              Shop Now
              <img src={arrow} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
