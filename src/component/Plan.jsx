import React from "react";
import { plansData } from "../data/plansData";
import whitetick from "../assets/whiteTick.png";
const Plan = () => {
  return (
    <div id="plan" className="px-5 mt-2 flex flex-col gap-8 relative">
      {/* blur */}
            <div className="blur w-[25rem] h-[35rem] left-[20%] "></div>

      <div className="flex-col flex md:flex-row text-center gap-3 text-3xl md:text-3xl lg:gap-4 font-bold justify-center uppercase lg:text-5xl text-white  ">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>

      {/* plans card */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {plansData.map((plans, i) => (
          
          <div key={i} className="plan flex flex-col bg-caloryCard p-5 gap-8 w-[18rem] md:w-full text-white">
            {plans.icon}
            <span className="font-bold">{plans.name}</span>
            <span>${plans.price}</span>
            <div className="">
              {plans.features.map((data,i) => (
                <div key={i} className="flex gap-4 items-center">
                  <img src={whitetick} alt="" className="w-[1rem]" />
                  <span>{data}</span>
                </div>
              ))}
            </div>
            <div className="text-sm">
                <span>see more benefit -> </span>
            </div>
            <button className="text-black">join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
