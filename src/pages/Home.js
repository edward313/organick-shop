import React from "react";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner.js";
import About from "../components/About/About.js";
import OurProduct from "../components/Product/OurProduct";
import Counter from "../components/Counter/Counter";
const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Banner></Banner>
      <About></About>
      <OurProduct></OurProduct>
      <Counter></Counter>
    </div>
  );
};

export default Home;
