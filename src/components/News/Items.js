import React from "react";
import shopping from "../../assets/shopping.svg";
const Items = ({ title, img }) => {
  return (
    <div className="w-[257px] h-[335px] rounded-[30px] bg-white shadow-sm flex items-center flex-col px-[35px] py-[50px] ">
      <img src={img}></img>
      <h3 className="healing text-xl mt-4">{title}</h3>
      <p className="desc text-center mt-3">
        Simply dummy text of the printintypesetting industry.
      </p>
    </div>
  );
};

export default Items;
