import { assets } from "@/assets/assets";
import React from "react";

function About() {
  return (
    <div className="md:max-w-6xl mx-auto px-4 sm:px-2 md:px-1 w-full">
      <div className=" text-center py-10">
        <p className="text-base">Introduction</p>
        <p className="text-4xl">About me</p>

        {/* user Intro code */}
        <div className="flex flex-col md:flex-row justify-center gap-10 mt-10 ">
          {/* left img */}
          <div className="md:w-96 flex justify-center  ">
            <img src={assets?.user_image?.src} />
          </div>
          {/* Right details */}
          <div className="flex flex-col gap-">
            <p className="text-[17px] md:max-w-2xl text-start  leading-8">
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>

            {/* main div */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-6xl mx-auto px-4 py-6">
              {/* Skills Card */}
              <div className="flex flex-col items-start p-4 border rounded-lg border-gray-300 shadow-sm bg-white">
                <img
                  className="w-6 h-6"
                  src={assets?.code_icon?.src}
                  alt="icon"
                />
                <p className="text-lg font-semibold mt-3">Skills</p>
                <p className="text-sm text-start font-bold mt-2 leading-relaxed">
                  React.js | Next.js | JavaScript | Node.js | Express | MongoDB
                </p>
              </div>

              {/* Education Card */}
              <div className="flex flex-col items-start p-4 border rounded-lg border-gray-300 shadow-sm bg-white">
                <img
                  className="w-6 h-6"
                  src={assets?.edu_icon?.src}
                  alt="icon"
                />
                <p className="text-lg font-semibold mt-3">Education</p>
                <p className="text-sm font-semibold mt-2 leading-relaxed">
                  MCA in Computer Application <br />
                  BCA in Computer Application
                </p>
              </div>

              {/* Projects Card */}
              <div className="flex flex-col items-start p-4 border rounded-lg border-gray-300 shadow-sm bg-white">
                <img
                  className="w-6 h-6"
                  src={assets?.project_icon?.src}
                  alt="icon"
                />
                <p className="text-lg font-semibold mt-3">Projects</p>
                <p className="text-sm mt-2 leading-relaxed">
                  Built more than 5 projects
                </p>
              </div>
            </div>

            {/* Tool image code */}
            <div className="">
              <p className="text-start">Tool i use</p>
              <div className="flex flex-wrap items-center  gap-5 mt-2">
                <div className="w-14 h-14 border rounded-lg border-gray-500">
                  <img
                    className="p-3"
                    src={assets?.vscode?.src}
                    alt="tool icon"
                  />
                </div>
                <div className="w-14 h-14 border rounded-lg border-gray-500">
                  <img
                    className="p-3"
                    src={assets?.firebase?.src}
                    alt="tool icon"
                  />
                </div>
                <div className="w-14 h-14 border rounded-lg border-gray-500">
                  <img className="p-3" src={assets?.git?.src} alt="tool icon" />
                </div>
                <div className="w-14 h-14 border rounded-lg border-gray-500">
                  <img
                    className="p-3"
                    src={assets?.mongodb?.src}
                    alt="tool icon"
                  />
                </div>
                <div className="w-14 h-14 border rounded-lg border-gray-500">
                  <img
                    className="p-3"
                    src={assets?.figma?.src}
                    alt="tool icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
