import { assets } from "@/assets/assets";
import React from "react";
import { MoveRight, Download } from "lucide-react";

function Header() {
  return (
    <div className="md:max-w-6xl mx-auto px-4 sm:px-2 md:px-1 w-full my-8 md:my-14">
      {/* User Details */}
      <div className="flex flex-col justify-center items-center mx-auto gap-5">
        <img
          className="w-28 md:w-36"
          src={assets?.profile_img?.src}
          alt="User image"
        />
        <div className="flex justify-center items-center gap-3">
          <p className=" text-lg md:text-xl">Hi! I'm David Pal</p>
          <img className="w-5 h-5" src={assets?.hand_icon?.src} alt="icon" />
        </div>
        <p className="text-3xl max-w-xl text-center md:leading-14 md:text-5xl">
          Frontend Web Developer Or React Developer.
        </p>
        <p className="max-w-xl text-[18px] text-center">
          Building fast, beautiful, and responsive websites with React.js,
          Next.js, Tailwind CSS, and modern web tech. Let’s turn ideas into
          interactive experiences.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-5">
         <div className=" flex items-center gap-2 justify-center md:w-44 w-40 h-10 border rounded-full bg-black ">
            
          <button className="text-white text-sm cursor-pointer">
            Connect with me
          </button>
          <MoveRight className="text-white w-[18px]" />
         </div>
         <div className="flex items-center gap-3 w-36 h-10 border rounded-full justify-center">
            
          <button className="text-sm cursor-pointer">My Resume</button>
          <Download className="w-[18px]" />
         </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
