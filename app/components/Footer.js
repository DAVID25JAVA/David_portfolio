import { assets } from "@/assets/assets";
import React from "react";
import { Phone } from "lucide-react";

function Footer() {
  return (
    <div>
      <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full">
        <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-gray-500/30">
          <div className=" ">
            <img
              className="md:h-16 "
              src={assets?.logo_light?.src}
              alt="dummyLogoDark"
            />
            <p className="mt-1 max-w-md text-base text-gray-500">
              Crafted with ❤️ by{" "}
              <span className="font-bold text-black">
                David Pal — Frontend Developer | React.js | Next.js |
              </span>{" "}
              passionate about building modern, responsive web apps.
            </p>
          </div>

          <div className="w-1/2 flex flex-wrap md:flex-nowrap justify-between">
            <div>
              <h2 className="font-semibold mb-5 md:mt-5">
                GET IN TOUCH
              </h2>
              <ul className="text-base text-gray-500 space-y-3 list-none">
                <li>
                  <a
                    className="flex items-center gap-2"
                    href="tel:+91639327099"
                  >
                    <Phone className="w-5" />
                    <span className="hover:text-blue-800 hover:underline">
                      +91 639327099
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-2"
                    href="mailto:Dp2072000@gmail.com"
                  >
                    <img
                      className="w-5"
                      src={assets?.mail_icon?.src}
                      alt="email"
                    />
                    <span className="hover:text-blue-800 hover:underline">
                      Dp2072000@gmail.com
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold   mb-5 mt-5">FOLLOW US</h2>
              <div className="text-base text-gray-500 space-y-2 list-none">
                <li>
                  <a
                    className="hover:text-blue-800 hover:underline"
                    href="https://www.linkedin.com/in/david-pal-ba6a72246"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>

                <li>
                  <a
                    className="hover:text-blue-800 hover:underline"
                    href="https://github.com/DAVID25JAVA"
                    target="_blank"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-800 hover:underline" href="#">
                    Twitter
                  </a>
                </li>
                <li></li>
              </div>
            </div>
          </div>
        </div>
        <p className="py-4 text-center text-base text-gray-500">
          Copyright {new Date().getFullYear()} © Company name. All Right
          Reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
