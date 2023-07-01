import React from "react";

const ItemPoint = ({ item }) => {
  return (
    <div className=" flex mb-4 ">
      <div className="w-[100px] h-[100px] bg-white flex justify-center items-center rounded-[20px] ">
        <img src={item.img} alt=""></img>
      </div>

      <div className="ml-3">
        <span className="font-roboto text-[25px] text-green font-extrabold">
          {item.title}
        </span>
        <p className="font-Open text-[18px] text-[#525C60] ">
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum
        </p>
      </div>
    </div>
  );
};

export default ItemPoint;
