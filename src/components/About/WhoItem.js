import React from "react";

const WhoItem = ({ title }) => {
  return (
    <div className="mt-[35px]">
      <h3 className="font-roboto text-[25px] font-bold text-primary">
        {title}
      </h3>
      <p className="font-Open text-[18px] text-[#525C60] ">
        Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium
        doloremque laudantium. Sed ut perspiciatis.
      </p>
    </div>
  );
};

export default WhoItem;
