import React from "react";
import instagram from "../assets/instagram.png";
import git from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

function Footer() {
  return (
    <div className="relative">
      <div className="blur w-[25rem] h-[30rem] right-[30%]"></div>
      {/* blur */}
      <hr className="border border-lightgray" />
      <div className="flex flex-col gap-3 items-center justify-center p-2 h-[15rem]">
        <div className="flex gap-3">
          <img
            src={instagram}
            alt=""
            className="w-[3rem] h-[3rem] cursor-pointer"
          />
          <img
            src={linkedin}
            alt=""
            className="w-[3rem] h-[3rem] cursor-pointer"
          />
          <img src={git} alt="" className="w-[3rem] h-[3rem] cursor-pointer" />
        </div>
        <div className="flex text-slate-50/60 py-3">
        <h1 className="text-5xl text-orange/70 font-extrabold"><span className="stroke-text">Elite</span><span>Shape</span></h1>
      </div>
      </div>
    </div>
  );
}

export default Footer;
