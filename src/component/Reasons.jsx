import React from "react";
import nike from "../assets/nike.png";
import nb from "../assets/nb.png";
import addidas from "../assets/adidas.png";
import tick from "../assets/tick.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

const Reasons = () => {
  return (
    <div id="reasons" className="px-6 flex flex-col md:flex-row gap-6">
      <div className="flex-1 gap-2 ">
        <img src={image2} alt="" className=" object-cover" />
        <span className="lg:flex">
          <img src={image3} alt="" className=" object-cover" />
          <img
            src={image4}
            alt=""
            className=" object-cover w-[14rem] grid-cols-[2/3] hidden md:hidden lg:flex"
          />
        </span>
      </div>
      {/* right */}
      <div className="flex-1 uppercase flex-col flex gap-4 px-6 ">
        <span className="font-bold text-orange">some reasons to join us</span>
        <div className="text-white text-3xl md:text-4xl font-bold">
          <span className="stroke-text">why </span>
          <span>choose us ?</span>
        </div>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex text-base text-white gap-4">
            <img src={tick} alt="" className="w-[2rem] h-[2rem]" />
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div className="flex text-base text-white gap-4">
            <img src={tick} alt="" className="w-[2rem] h-[2rem]" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div className="flex text-base text-white gap-4">
            <img src={tick} alt="" className="w-[2rem] h-[2rem]" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div className="flex text-base text-white gap-4">
            <img src={tick} alt="" className="w-[2rem] h-[2rem]" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>

        <span className="font-bold text-gray uppercase">our partners</span>
        <div className="flex gap-2 ">
          <img  src={nike} alt=""className="w-[2.5rem]" />
          <img className="w-[2.5rem]" src={addidas} alt="" />
          <img className="w-[2.5rem]" src={nb} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
