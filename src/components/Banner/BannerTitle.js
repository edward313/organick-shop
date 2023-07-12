import React from "react";
import bannerAbout from "../../assets/banner-about.png";
const BannerTitle = () => {
  const str = window.location.pathname;
  const href = str.split("/")[1];

  const title = href.replace("-", " ");
  return (
    <div
      className="w-full h-[450px]"
      style={{
        backgroundImage: `url(${bannerAbout})`,
      }}>
      <div className="flex justify-center items-center py-[184px]">
        <h1 className="font-roboto text-[70px] text-primary font-extrabold capitalize">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default BannerTitle;
