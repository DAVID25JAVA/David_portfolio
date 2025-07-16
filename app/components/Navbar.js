"use client";
import { assets } from "@/assets/assets";
import React, { useState } from "react";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {/* Background Image */}
      <div className="fixed right-0 left-0 w-11/12 -z-10 translate-y-[-80%]">
        <img
          src={assets?.header_bg_color?.src}
          alt="bg-img"
          className="w-fit"
        />
      </div>

      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg  ">
        <div className="flex justify-between items-center md:py-0 py-2  px-4 md:px-0 md:max-w-6xl mx-auto">
          {/* Logo */}
          <div className="w-28 md:w-40">
            <img
              src={assets?.logo_light?.src}
              alt="logo"
              className="cursor-pointer"
            />
          </div>

          {/* Desktop Menu */}
          <div className="bg-white hidden md:block shadow-sm px-10 py-2 rounded-full">
            <ul className="flex items-center gap-8 text-lg">
              <li className="cursor-pointer">
                <a href="/">Home</a>
              </li>
              <li className="cursor-pointer">
                <a href="about">About</a>
              </li>
              <li className="cursor-pointer">
                <a href="projects">Projects</a>
              </li>
              <li className="cursor-pointer">
                <a href="testimonials">Testimonials</a>
              </li>
            </ul>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <div className="w-7 cursor-pointer">
              <img src={assets?.moon_icon?.src} alt="theme icon" />
            </div>

            {/* Connect Button */}
            <div className="hidden md:block">
              <div className="flex items-center justify-center gap-2 w-28 h-10 rounded-full text-black border-[0.5px]">
                <a href="#Contact" className="flex items-center gap-2">
                  <button className="cursor-pointer">Connect</button>
                  <img
                    src={assets?.arrow_icon?.src}
                    alt="arrow"
                    className="w-3"
                  />
                </a>
              </div>
            </div>

            {/* Hamburger Menu Icon */}
            <div
              onClick={() => setMobileMenu(true)}
              className="block md:hidden"
            >
              <img
                src={assets?.menu_black?.src}
                alt="menu icon"
                className="w-6"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to avoid content hidden behind fixed nav */}
      <div className="pt-[80px] md:pt-[96px]">
        {/* Main Content Wrapper */}
        <div className="md:max-w-6xl px-4 sm:px-3 md:px-3 w-full mx-auto">
          {/* Mobile Menu */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
              mobileMenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end items-center p-4">
              <button onClick={() => setMobileMenu(false)}>
                <img
                  src={assets?.close_black?.src}
                  alt="close"
                  className="w-5"
                />
              </button>
            </div>
            <ul className="flex flex-col gap-5 p-6 text-lg">
              <li>
                <a href="#Home" onClick={() => setMobileMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#About" onClick={() => setMobileMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#Projects" onClick={() => setMobileMenu(false)}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#Testimonials" onClick={() => setMobileMenu(false)}>
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#Contact" onClick={() => setMobileMenu(false)}>
                  Connect
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
