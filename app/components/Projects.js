import React from "react";
import { assets, workData } from "@/assets/assets";

function Projects() {
  return (
    <div className="md:max-w-6xl mx-auto w-full px-4 py-10">
      <p className="text-black text-lg text-center">My Portfolio</p>
      <p className="text-black text-2xl md:text-3xl text-center pt-2">
        My Projects
      </p>
      <p className="text-black md:max-w-xl w-full mx-auto text-center pt-3">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>

      <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-6 mt-10">
        {workData?.map((project, index) => (
          <div
            key={index}
            className="relative rounded-xl hover:-translate-[4px] duration-500 cursor-pointer overflow-hidden  shadow-lg group"
          >
            <img
              src={project?.bgImage}
              alt="project background"
              className="w-full h-64 object-cover "
            />
            <div className="absolute bottom-2 bg-white rounded-lg left-4 w-56 h-16 px-2 pt-2">
              <div className="flex items-center justify-between gap-2">
                <p className="text-black text-lg font-semibold">
                  {project?.title}
                </p>
                <div className="w-8 h-8 flex items-center justify-center border rounded-full">
                  <img
                    src={assets?.send_icon?.src}
                    alt="icon"
                    className="w-4 h-4"
                  />
                </div>
              </div>
              <p className="text-black text-sm ">{project?.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* button */}
      <div className="flex items-center justify-center border w-32 h-10 rounded-full border-gray-400 cursor-pointer gap-2 mt-10 mx-auto">
        <button>Show more </button>
        <img src={assets?.right_arrow_bold?.src} alt="icon" className="w-4" />
      </div>
    </div>
  );
}

export default Projects;
