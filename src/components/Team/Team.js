import React from "react";
import Profile from "./Profile";

const Team = () => {
  return (
    <div>
      <div className="box py-[180px] ">
        <div className="text-center w-[852px] block mx-auto">
          <span className="sub-title ">Team</span>
          <h2 className="healing">Our Organic Experts</h2>
          <p className="desc">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
        </div>
        <div className="flex gap-5 mt-[42px]">
          <Profile></Profile>
          <Profile></Profile>
          <Profile></Profile>
        </div>
      </div>
    </div>
  );
};

export default Team;
