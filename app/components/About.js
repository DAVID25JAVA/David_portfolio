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
          <div className="md:w-72 flex justify-center items-center">
            <img src={assets?.user_image?.src} />
          </div>
          {/* Right details */}
          <div className="flex flex-col gap-5">
            <p className="text-[17px] md:max-w-2xl text-start text-gray-500 leading-8">
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>

            {/* main div */}
            <div className="flex flex-col md:flex-row justify-center md:justify-start md:items-start items-center gap-5">
              <div className="flex items-start gap-5">
                <div className="md:w-44 md:h-40 p-3 border rounded border-gray-400">
                  <img
                    className="w-6 h-6"
                    src={assets?.code_icon?.src}
                    alt="icon"
                  />
                  <p className="text-lg text-start mt-3 font-semibold">
                    Skills
                  </p>
                  <p className="text-sm font-bold text-start mt-2">
                     React.js | Next.js | JavaScript | Node.js | Express | MongoDB
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="md:w-44 md:h-40 p-3 border rounded border-gray-400">
                  <img
                    className="w-6 h-6"
                    src={assets?.edu_icon?.src}
                    alt="icon"
                  />
                  <p className="text-lg text-start mt-3 font-semibold">
                    Education
                  </p>
                  <p className="text-sm text-start mt-2">
                     MCA in Computer Application 
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="md:w-44 md:h-40 p-3 border rounded border-gray-400">
                  <img
                    className="w-6 h-6"
                    src={assets?.project_icon?.src}
                    alt="icon"
                  />
                  <p className="text-xl text-start mt-3 font-semibold">
                    Projects
                  </p>
                  <p className="text-sm text-start mt-2">
                   Built more than 5 projects
                  </p>
                </div>
              </div>
            </div>
            
            {/* Tool image code */}
            <div className="">
                <p className="text-start">Tool i use</p>
                <div className="flex flex-wrap items-center  gap-5 mt-2">
                    <div className="w-14 h-14 border rounded-lg border-gray-500">
                        <img className="p-3" src={assets?.vscode?.src} alt="tool icon"/>
                    </div>
                    <div className="w-14 h-14 border rounded-lg border-gray-500">
                        <img className="p-3" src={assets?.firebase?.src} alt="tool icon"/>
                    </div>
                    <div className="w-14 h-14 border rounded-lg border-gray-500">
                        <img className="p-3" src={assets?.git?.src} alt="tool icon"/>
                    </div>
                    <div className="w-14 h-14 border rounded-lg border-gray-500">
                        <img className="p-3" src={assets?.mongodb?.src} alt="tool icon"/>
                    </div>
                    <div className="w-14 h-14 border rounded-lg border-gray-500">
                        <img className="p-3" src={assets?.figma?.src} alt="tool icon"/>
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
