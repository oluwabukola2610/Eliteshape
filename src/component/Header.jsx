import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-scroll/modules";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex items-center justify-between">
      {/* logo */}
      <div className="flex text-slate-50/60">
        <h1 className="text-3xl md:text-4xl text-orange/70 font-extrabold">
          <span className="stroke-text">Elite</span>
          <span>Shape</span>
        </h1>
      </div>

      <BiMenuAltLeft
        size={40}
        className="fixed top-4 right-2 md:hidden text-orange/60"
        onClick={() => setToggle(!toggle)}
      />

      <ul className="hidden md:flex md:space-x-6 text-white">
        <li className="cursor-pointer hover:text-orange">Home</li>
        <li className="cursor-pointer hover:text-orange">Programs</li>
        <li className="cursor-pointer hover:text-orange">Why us</li>
        <li className="cursor-pointer hover:text-orange">Testimonials</li>
      </ul>

      {/* menu */}
      <ul
        className={
          toggle
            ? "fixed h-[240px] mx-3 w-[120px] rounded-lg top-[3rem] right-0 bg-gradient-to-tr from-orange/100 to-amber-300 z-10 duration-300 p-3 font-bold capitalize space-y-6"
            : "hidden"
        }
      >
        <li>
          <Link
            smooth={true}
            span="true"
            onClick={() => setToggle(false)}
            to="hero"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            smooth={true}
            span="true"
            onClick={() => setToggle(false)}
            to="programs"
          >
            Programs
          </Link>
        </li>
        <li>
          <Link
            smooth={true}
            span="true"
            onClick={() => setToggle(false)}
            to="reason"
          >
            Why us
          </Link>
        </li>
        <li>
          <Link
            smooth={true}
            span="true"
            onClick={() => setToggle(false)}
            to="textimonia"
          >
            Testimonia
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
