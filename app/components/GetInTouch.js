import { assets } from "@/assets/assets";
import React from "react";

function GetInTouch() {
  return (
    <div className="md:max-w-6xl w-full mx-auto px-4 mt-10">
      <form class="flex flex-col items-center text-sm">
        <p class="text-lg  text-black pb-2">Contact Us</p>
        <h1 class="text-4xl   text-black pb-4">Get in touch with us</h1>
        <p class="text-base md:max-w-lg text-gray-500 text-center pb-10">
          I'd love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </p>

        <div class="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          <div class="w-full">
            <label class="text-black/70" for="name">
              Your Name
            </label>
            <input
              class="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-black"
              type="text"
              required
            />
          </div>
          <div class="w-full">
            <label class="text-black/70" for="name">
              Your Email
            </label>
            <input
              class="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-black"
              type="email"
              required
            />
          </div>
        </div>

        <div class="mt-6 w-[350px] md:w-[700px]">
          <label class="text-black/70" for="name">
            Message
          </label>
          <textarea
            class="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-black"
            required
          ></textarea>
        </div>

        <div className="bg-black flex items-center gap-2 justify-center text-white h-12 w-48 my-10 cursor-pointer px-4 rounded active:scale-95 transition">
          <button type="submit" class="text-lg">
            Submit now
          </button>

          <img className="w-5" src={assets?.right_arrow_bold_dark?.src} alt="icon" />
        </div>
      </form>
    </div>
  );
}

export default GetInTouch;
