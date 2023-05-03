import React, { useState } from "react";
import { testimonialsData } from "../data/testimonialsData";
import leftarrow  from '../assets/leftArrow.png'
import rightarrow  from '../assets/rightArrow.png'


const Testimonia = () => {
  const [Select, setSelect] = useState(0);
  
  const handlePrevClick = () => {
    if (Select === 0) {
      setSelect(testimonialsData.length - 1);
    } else {
      setSelect(Select - 1);
    }
  };

  const handleNextClick = () => {
    if (Select === testimonialsData.length - 1) {
      setSelect(0);
    } else {
      setSelect(Select + 1);
    }
  };
  return (
    <div id="textimonia" className="max-w-[1640px] flex flex-col md:flex-row gap-3 px-6 mb-8">
      <div className="flex flex-1 gap-4 flex-col justify-center items-center uppercase text-white lg:items-start lg:justify-normal">
        <span className="text-orange font-bold">Testimonia</span>
        <span className="stroke-text font-bold text-4xl">What they </span>
        <span className="text-4xl font-bold">Say About us</span>
        <span className=" capitalize text-justify leading-6">
          {testimonialsData[Select].review}
        </span>
        <span>
          <span className="text-orange">{testimonialsData[Select].name} </span>
          - {testimonialsData[Select].status}
        </span>
      </div>
      <div className="flex-1 relative">
        <div className="hidden relative lg:flex lg:absolute top-[1rem] right-[9rem]  w-[17rem] h-[20rem] border-[2px] border-orange rounded-lg bg-transparent "></div>
        <div className="hidden relative lg:flex lg:absolute bg-orange/80 w-[18rem] h-[19rem] top-[4rem] right-[7rem] rounded-lg"></div>
        <img src={testimonialsData[Select].image} alt="" className="relative self-center w-full top-0 right-0 lg:absolute lg:w-[17rem] h-[20rem] object-cover lg:right-[8rem] lg:top-[2rem] "/>
        <div className=" left-[5rem] bottom-[-4rem] flex gap-4 absolute lg:bottom-[-1rem] lg:left-[1rem]">
            <img src={leftarrow} alt=""  className="w-[20px]" onClick={handlePrevClick}/>
            <img src={rightarrow} alt="" className="w-[20px]" onClick={handleNextClick}/>
        </div>
      </div>
    </div>
  );
};

export default Testimonia;
