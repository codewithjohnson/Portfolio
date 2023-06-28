import React, { useRef } from "react";
import { useInView } from "framer-motion";

const About = () => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, {
    once: true,
  });

  return (
    <div
      ref={aboutRef}
      id="about"
      className="w-full bg-[#2B2D33]"
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <div className="flex flex-col justify-between w-full gap-10 px-5 py-16 md:py-20 xl:px-40 md:flex-row">
        {/* left */}
        <div className="md:w-[20%]  w-full">
          <h1 className="text-4xl text-left text-white uppercase font-jost">
            About Me
          </h1>
        </div>

        {/* right */}
        <div className="w-full md:px-5 right">
          <div className="text-lg leading-[40px] text-gray-300 font-jost">
            <p>
              Hi, I'm{" "}
              <span className="font-medium text-green-500">
                Muyiwa Johnson{" "}
              </span>
              and an agile javascript developer. i have a passion for building
              solutions that run on the web.Over the last 4 years, I have built
              projects ranging from simple websites to complex web applications.
              I have also worked with a wide range of technologies in the
              javascript ecosystem. I am a self-taught developer with a
              bachelor's degree in physics. i believe in adapting to new
              technologies and learning new skills.
            </p>

            <p className="mt-5">
              I have majorly worked on internal tools for companies and I am
              currently working on a few personal projects I am currently open
              to new opportunities. If you have a project or an idea you would
              like to discuss, please feel free to reach out to me.
            </p>

            <p className="py-3">
              <span className="text-secondary">Current Skills: </span>
              HTML, CSS, SCSS, React, Typescript, APIs, Nextjs, Bootstrap,
              Tailwind, Nodejs, Express, Firebase, Git, Github, Figma
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
