import React from "react";
import { Fragment } from "react";

import logo from "../../assets/Logo.svg";
import cartIcons from "../../assets/cart.svg";
import searchIcon from "../../assets/searchIcon.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Fragment>
      <header>
        <div className="container w-[1600px] mx-auto  ">
          <div className="flex  items-center py-16  justify-between">
            <Link to="/">
              <img src={logo} alt="no" className="" />
            </Link>
            {/* navagition */}
            <ul className="flex items-center gap-12 font-bold text-xl space-x-3  ">
              <Link to="/">Home</Link>
              <Link to="/about-us">About</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/Categogy">Category</Link>
            </ul>

            {/* actions */}
            <div className="flex items-center justify-center ">
              <div className="flex  relative">
                <img
                  src={searchIcon}
                  className="block absolute right-1 top-1  "
                />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="flex  bg-gray-50 w-[376px] h-[66px] rounded-3xl border-none focus:outline-none 
                px-3 font-semibold bg-[#FAFAFA]"
                />
              </div>
              <a className="flex items-center w-[159px] h-[56px] rounded-[33px] border-solid border-2 border-[#E0E0E0] ml-5">
                <img src={cartIcons} className="mr-[-2px]" />
                <span className="text-xl ml-[12px] text-primary font-semibold">
                  Cart
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
