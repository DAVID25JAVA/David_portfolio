import { assets } from "@/assets/assets";
import React from "react";

function GetInTouch() {
  return (
    <div  className="md:max-w-6xl w-full mx-auto px-4 mt-10">
      <form  className="flex flex-col items-center text-sm">
        <p  className="text-lg  text-black pb-2">Contact Us</p>
        <h1  className="text-4xl   text-black pb-4">Get in touch with us</h1>
        <p  className="text-base md:max-w-lg text-gray-500 text-center pb-10">
          I'd love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </p>

        <div  className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          <div  className="w-full">
            <label  className="text-black/70" for="name">
              Your Name
            </label>
            <input
               className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-black"
              type="text"
              required
            />
          </div>
          <div  className="w-full">
            <label  className="text-black/70" for="name">
              Your Email
            </label>
            <input
               className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-black"
              type="email"
              required
            />
          </div>
        </div>

        <div  className="mt-6 w-[350px] md:w-[700px]">
          <label  className="text-black/70" for="name">
            Message
          </label>
          <textarea
             className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-black"
            required
          ></textarea>
        </div>

        <div  classNameName="bg-black flex items-center gap-2 justify-center text-white h-12 w-48 my-10 cursor-pointer px-4 rounded active:scale-95 transition">
          <button type="submit"  className="text-lg">
            Submit now
          </button>

          <img  classNameName="w-5" src={assets?.right_arrow_bold_dark?.src} alt="icon" />
        </div>
      </form>
    </div>
  );
}

export default GetInTouch;
