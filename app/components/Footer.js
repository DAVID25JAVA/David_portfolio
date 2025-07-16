import { assets } from "@/assets/assets";
import React from "react";

function Footer() {
  return (
    <div>
      <footer class="px-6 md:px-16 lg:px-24 xl:px-32 w-full">
        <div class="flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-gray-500/30">
          <div class=" ">
            <img
              className="md:h-16 "
              src={assets?.logo_light?.src}
              alt="dummyLogoDark"
            />
            <p class="mt-1 max-w-md text-base text-gray-500">
              Crafted with ❤️ by{" "}
              <span className="font-bold text-black">
                David Pal — Frontend Developer | React.js | Next.js |
              </span>{" "}
              passionate about building modern, responsive web apps.
            </p>
          </div>

          <div class="w-1/2 flex flex-wrap md:flex-nowrap justify-between">
            <div>
              <h2 class="font-semibold text-gray-900 mb-5 md:mt-5">
                GET IN TOUCH
              </h2>
              <ul class="text-base text-gray-500 space-y-2 list-none">
                <li>
                  <a href="#">+91 6393274099</a>
                </li>
                <li>
                  <a href="#">Dp2072000@gmail.com</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="font-semibold text-black mb-5 mt-5">FOLLOW US</h2>
              <div class="text-base text-gray-500 space-y-2 list-none">
                <li>
                  <a href="#">Linkedin</a>
                </li>
                <li>
                  <a href="#">Github</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li></li>
              </div>
            </div>
          </div>
        </div>
        <p class="py-4 text-center text-base text-gray-500">
          Copyright {new Date().getFullYear()} © Company name. All Right
          Reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
