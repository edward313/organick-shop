import React from "react";
import Profile_1 from "../../assets/profile-1.jpg";
import twiter from "../../assets/Twiter.png";
import fb from "../../assets/Fb.png";
const Profile = ({ img, name, work }) => {
  return (
    <div className="w-[449px] h-[615px] bg-white shadow-lg rounded-[30px]">
      <img src={img} className="rounded-t-[30px]"></img>
      <div className="px-[35px] py-[28px] flex  justify-between">
        <div>
          <h3 className="healing text-[25px]">{name}</h3>
          <span className="sub-title text-[22px] capitalize">{work}</span>
        </div>
        <div className="flex items-end gap-4">
          <img src={twiter}></img>
          <img src={fb}></img>
        </div>
      </div>
    </div>
  );
};

export default Profile;
