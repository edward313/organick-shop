import React from "react";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner.js";
import About from "../components/About/About.js";
import OurProduct from "../components/Product/OurProduct";
import Counter from "../components/Counter/Counter";
import OfferProduct from "../components/Product/OfferProduct";
import Who from "../components/About/Who";
import Newslatteer from "../components/News/Newslatteer";
const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Banner></Banner>
      <About></About>
      <OurProduct></OurProduct>
      <Counter></Counter>
      <OfferProduct></OfferProduct>
      <Who></Who>
      <Newslatteer></Newslatteer>
    </div>
  );
};

export default Home;
