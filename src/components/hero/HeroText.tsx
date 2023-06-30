import React from "react";
import { Link } from "react-router-dom";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { handleSmoothScroll } from "./funcs";

const HeroText = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 pt-5 md:pt-0 md:px-0">
      {/* greeting text */}
      <p className="w-full py-1 text-2xl font-medium text-center text-secondary md:text-left">
        Hello, I'm
      </p>

      {/* name */}
      <h1 className="w-full py-1 text-4xl font-medium text-center text-white md:text-left md:text-6xl">
        Muyiwa Johnson.
      </h1>

      {/* description */}
      <p className="w-full py-5 text-sm text-center text-white capitalize md:text-lg font-openSans md:text-left">
        an <span className=" glow-animation">Agile Javascript</span> developer
        from <span className="text-[#F0C45C]">Nigeria.</span>
      </p>

      {/* about me */}
      <p className="py-5 text-center text-gray-300 md:pr-32 md:text-left font-openSans">
        I'm a software developer with a passion for building beautiful and
        functional user interfaces.
      </p>

      {/* buttons */}
      <div className="flex flex-row items-center justify-center w-full pt-6 gap-x-8 md:gap-20 font-openSans md:justify-start">
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
          <a
            target="_blank"
            href="https://twitter.com/MuyiwaMighty"
            className="text-white"
          >
            <BsTwitter className="w-5 h-5 text-white" />
          </a>

          {/* linkedin */}
          {/* <Link to="#" className="text-white">
            <BsGithub className="w-5 h-5 text-white" />
          </Link> */}

          {/* github */}
          <a
            target="_blank"
            href="https://github.com/codewithjohnson"
            className="text-white"
          >
            <BsLinkedin className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
