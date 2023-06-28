import React from "react";
import { Link } from "react-router-dom";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { handleSmoothScroll } from "./funcs";

type Props = {};

const HeroText = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-12 pt-5 md:pt-0 md:px-0">
      {/* greeting text */}
      <p className="w-full py-1 text-2xl font-medium text-center text-secondary md:text-left">
        Hello, I'm
      </p>

      {/* name */}
      <h1 className="w-full py-1 text-4xl font-medium text-center text-white md:text-left md:text-6xl">
        Muyiwa Johnson
      </h1>

      {/* description */}
      <p className="w-full py-3 text-lg font-medium text-center text-white capitalize font-openSans md:text-left">
        an <span className=" glow-animation">Agile Javascript</span> developer
        from <span className="text-[#F0C45C]">Nigeria.</span>
      </p>

      {/* about me */}
      <p className="py-5 text-center text-white md:pr-32 md:text-left">
        I'm a software developer with a passion for building beautiful and
        functional user interfaces.
      </p>

      {/* buttons */}
      <div className="flex flex-row items-center w-full gap-20 pt-6 font-openSans ">
        <Link
          onClick={(e) => handleSmoothScroll(e, "#about")}
          to="#about"
          className="px-10 py-3 text-sm font-semibold text-white capitalize rounded-full bg-gradient-to-r from-secondary to-secondary/80 hover:bg-gradient-to-r hover:from-[#1FBE59] hover:to-[#F0C45C] transition-all  duration-300 ease-in-out"
        >
          About Me
        </Link>

        {/* social links */}
        <div className="flex flex-row items-center justify-between gap-5">
          {/* twitter */}
          <Link to="#" className="text-white">
            <BsTwitter className="w-5 h-5 text-white" />
          </Link>

          {/* linkedin */}
          <Link to="#" className="text-white">
            <BsGithub className="w-5 h-5 text-white" />
          </Link>

          {/* github */}
          <Link to="#" className="text-white">
            <BsLinkedin className="w-5 h-5 text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
