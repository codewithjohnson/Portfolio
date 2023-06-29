import React from "react";
import HeroText from "./HeroText";
import { DiJavascript1 } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import hero from "../../assets/images/heroo.png";
import design from "../../assets/images/design.png";

type Props = {};

const Hero = () => {
  return (
    <div className="relative w-full bg-primary">
      <div className="flex flex-col-reverse justify-between py-16 gap-y-20 md:flex-row xl:px-40">
        <HeroText />

        {/* hero image */}
        <div className="w-full realtive">
          <img
            src={hero}
            alt="muyiwa johnson"
            className="w-[60%] mx-auto h-[60%] md:w-full md:h-full hover:brightness-100 xl:hover:animate-pulse"
          />
          <DiJavascript1
            title="JavaScript"
            className="absolute bg-black rounded-lg h-9 w-9 text-secondary right-[30px] sm:right-20 md:h-10 md:w-10 md:right-[200px] lg:right-[70px] xl:right-[200px] 2xl:right-[250px] top-28 animated-bounce"
          />
          <SiTypescript
            className="absolute rounded-lg h-9 w-9 text-secondary right-[300px] sm:right-[550px] md:h-10 md:w-10 md:right-[450px] xl:right-[550px] 2xl:right-[650px] top-28 animated-bounce"
            title="Typescript"
          />
          <GrReactjs
            className="absolute rounded-lg h-9 w-9 text-green-500 right-[300px] sm:right-[550px] md:h-10 md:w-10 md:right-[450px] xl:right-[550px] 2xl:right-[650px] top-[300px] animated-bounce"
            title="React"
          />
        </div>
      </div>

      <img
        src={design}
        alt="illustration pf a beautiful design"
        className="hidden md:block md:absolute md:left-2 md:top-28"
      />
    </div>
  );
};

export default Hero;
