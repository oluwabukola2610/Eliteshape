import React from "react";
import Header from "./Header";
import heroImg from "../assets/pexels-nappy-936075-removebg-preview.png";
import heroback from "../assets/hero_image_back.png";
import calories from "../assets/calories.png";
import heart from "../assets/heart.png";
import { motion } from "framer-motion";
import NumberCounter from 'number-counter'

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <div id="hero" className="max-w-[1640px] flex flex-col lg:flex-row justify-between">
      {/* blur effectf */}
      <div className="blur h-[33rem] w-[15rem] left-0"></div>
      <div className="p-8 flex-[3] flex flex-col gap-7 ">
        <Header />
        <div className="flex justify-center lg:justify-start items-center relative mt-6 md:mt-14 uppercase text-white bg-[#363d42] rounded-full w-fit px-4 py-3">
          <motion.div
            className="absolute bg-orange h-[80%] w-[5.4rem] left-[8px] rounded-full z-[1]"
            initial={{ left: "230px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span className="z-[2]">The best fitness in Town</span>
        </div>
        <div className="flex flex-col gap-6 uppercase text-4xl text-center lg:text-start sm:text-6xl font-bold text-white">
          <div>
            <span className="stroke-text pr-3 ">Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <span className="text-sm lowercase font-normal">
            In here we will help you to shape and build your ideal body and live
            up your life to fullest
          </span>
        </div>
        <div className="flex gap-4 justify-center lg:justify-start ">
          <div className="flex flex-col">
            <span className="text-white text-md sm:text-3xl">
              <NumberCounter end={140} start={80} preFix='+' delay='4' />
            </span>
            <span className="uppercase text-gray text-sm">expert coaches</span>
          </div>
          <div className="flex flex-col">
          <span className="text-white text-md sm:text-3xl">
              <NumberCounter end={640} start={480} preFix='+' delay='4' />
            </span>
            <span className="uppercase text-gray text-sm">fitness program</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-md sm:text-3xl">
            <NumberCounter end={870} start={670} preFix='+' delay='4' />

            </span>
            <span className="uppercase text-gray text-sm">members joined</span>
          </div>
        </div>
        <div className="flex gap-3 justify-center lg:justify-start ">
          <button className=" text-white bg-orange w-[8rem]">
            get started
          </button>
          <button className=" hover:cursor-pointer w-[8rem] bg-transparent text-white border-[2px] border-orange">
            learn more
          </button>
        </div>
      </div>
      <div className="flex-[1] relative lg:bg-orange/100 py-3 ">
        <button className=" absolute text-black right-[3rem] top-[3rem]">
          join now
        </button>
        <motion.div
          className="flex flex-col gap-2 text-white bg-darkGrey/90 rounded-md relative lg:absolute left-[2rem] top-[5rem] lg:left-[7rem] lg:top-[7rem] w-fit p-4 items-start"
          whileInView={{ left: "8px" }}
          transition={transition}
          initial={{ right: "-1rem" }}
        >
          <img src={heart} alt="" className="w-[2rem]" />
          <span className="text-gray">Heart Rate</span>{" "}
          <span className="text-white text-xl">118 bpm</span>
        </motion.div>
        <motion.img
        initial={{right:'5rem'}}
        transition={transition}
        whileInView={{right:'13rem'}}
          src={heroImg}
          alt=""
          className=" top-[10rem] right-[8rem]  self-center lg:absolute lg:top-[10rem] lg:right-[12rem]"
        />
        <motion.img
        initial={{right:'8rem'}}
        transition={transition}
        whileInView={{right:'13rem'}}
          src={heroback}
          alt=""
          className="absolute z-[-1] w-[18rem] top-[0rem] right-[1rem] md:top-[3rem] md:right-[14rem] lg:top-[4rem] lg:right-[20rem] md:w-[16rem]"
        />
        <div className="flex gap-2 bg-caloryCard rounded-md p-2 w-[13rem] relative top-[0rem] left-[1rem] lg:absolute lg:top-[32rem] lg:right-[25rem]">
          <img src={calories} alt="" className="w-[3rem]" />
          <div className="flex flex-col justify-between ">
            <span className="text-gray">calories burned</span>
            <span className="text-white">289 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
