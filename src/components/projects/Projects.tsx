import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { projects } from "./utilities";
import Project from "./Project";

const Projects = () => {
  const projectRef = useRef(null);
  const isInView = useInView(projectRef, {
    once: true,
  });

  return (
    <div
      id="projects"
      ref={projectRef}
      className="py-16 bg-black/40 "
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <div className="flex flex-col justify-between px-5 text-white xl:px-40">
        {/* title */}
        <h1 className="text-5xl font-semibold capitalize font-jost">
          My <span className="text-secondary">Projects</span>
          <p className="py-5 text-sm font-thin normal-case font-raleway">
            Responsive and Adaptive Web Applications
          </p>
        </h1>

        {/* projects */}
        {projects.map((items) => (
          <Project
            key={items.title}
            projectNumber={items.projectNumber}
            title={items.title}
            direction={items.direction}
            description={items.description}
            githubLink={items.githubLink}
            liveLink={items.liveLink}
            image={items.image}
            alt={items.alt}
            stacks={items.stacks}
            blur={items.blur}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
