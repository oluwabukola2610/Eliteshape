import React from "react";
import { programsData } from "../data/programsData";
import rightarrow from "../assets/rightArrow.png";

const Programs = () => {
  return (
    <div id="programs" className="max-w-[1640px] flex flex-col gap-2 px-6">
      <div className="flex-col flex text-center md:flex-row gap-3 text-3xl md:text-3xl lg:gap-8 font-bold justify-center uppercase lg:text-4xl text-white  ">
        <span className="stroke-text">Explore Our</span>
        <span>Programs</span>
        <span className="stroke-text">To Shape You</span>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-4 py-3 ">
        {programsData.map((data) => (
          <div className="programs-img flex flex-col bg-gray p-6 gap-3 text-white justify-between hover:bg-gradient-to-tr from-[#fa5042] to-[#ffa739] cursor-pointer ">
            {data.image}
            <span className="font-bold text-base">{data.heading}</span>
            <span className="font-sm">{data.details}</span>
            <div className="items-center flex gap-8 ">
              <span> Join Now</span>
              <img src={rightarrow} alt="" className="w-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
