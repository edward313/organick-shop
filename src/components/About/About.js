import React from "react";
import ItemPoint from "./ItemPoint";
import vegan from "../../assets/vegan-food.svg";
import mail from "../../assets/mailbox.svg";
import about from "../../assets/about-1.png";
import arrow from "../../assets/Arrow.svg";
// img

const itemAbout = [
  {
    id: 1,
    title: "Organic Foods Only",
    img: vegan,
  },
  {
    id: 2,
    title: "Quality Standards",
    img: mail,
  },
];
console.log(itemAbout);
const About = () => {
  return (
    <div className="w-full h-[1067px] bg-gray">
      <div className="flex mx-auto  max-w-[1700px]">
        {/* img */}
        <div>
          <img className=" mt-[60px]" src={about}></img>
        </div>
        {/* info */}
        <div className="w-[650px] mt-[150px] ml-[-50px]">
          <h3 className="font-yellowtail text-green text-4xl mt-2">About Us</h3>
          <h2 className="font-roboto text-primary text-5xl font-extrabold mt-2">
            We Believe in Working Accredited Farmers
          </h2>
          <p className="font-Open text-lg text-[#525C60] mt-4">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          {/* point */}
          <div className="mt-12">
            <>
              {itemAbout?.map((item) => {
                return <ItemPoint key={item.id} item={item}></ItemPoint>;
              })}
            </>
          </div>

          {/* btn */}

          <div>
            <a className="inline-flex bg-primary px-[39px] py-[28px] rounded-2xl text-white font-bold cursor-pointer">
              Shop Now
              <img src={arrow} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
