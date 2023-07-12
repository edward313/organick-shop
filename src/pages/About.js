import React from "react";
import BannerTitle from "../components/Banner/BannerTitle";
import HeroAbout from "../components/Hero/HeroAbout";
import WhyChooseUs from "../components/News/WhyChooseUs";
import Team from "../components/Team/Team";
import Categogy from "../components/Categogy/Categogy";

const About = () => {
  return (
    <div>
      <BannerTitle></BannerTitle>
      <HeroAbout></HeroAbout>
      <WhyChooseUs></WhyChooseUs>
      <Team></Team>
      <Categogy></Categogy>
    </div>
  );
};

export default About;
