"use client";
import { assets } from "@/assets/assets";
import React, { useState } from "react";
import toast from "react-hot-toast";
// import { InfinitySpin } from "react-loader-spinner";

function GetInTouch() {
  const [loading, setLoading] = useState(false);  

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "5eba1dee-0424-4db6-b1e6-5bf04480a53e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Your message has been submitted.");
        event.target.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
        console.error("Web3Forms Error:", data);
      }
    } catch (error) {
      toast.error("Submission failed. Please check your connection.");
      console.error("Fetch Error:", error);
    }

    setLoading(false);
  };

  return (
    <div className="md:max-w-6xl w-full mx-auto px-4 mt-10">
      <form onSubmit={onSubmit} className="flex flex-col items-center text-sm">
        <p className="text-lg  pb-2">Contact Us</p>
        <h1 className="text-4xl  pb-4">Get in touch with us</h1>
        <p className="text-base md:max-w-lg text-gray-500 text-center pb-10">
          I'd love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          <div className="w-full">
            <label htmlFor="name" className="/70 text-base">
              Your Name
            </label>
            <input
              name="name"
              type="text"
              required
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-black"
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="/70 text-base">
              Your Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-black"
            />
          </div>
        </div>

        <div className="mt-6 w-[350px] md:w-[700px]">
          <label htmlFor="message" className="/70 text-base">
            Message
          </label>
          <textarea
            name="message"
            required
            className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-black"
          ></textarea>
        </div>

        <div className="flex items-center gap-2 justify-center rounded active:scale-95 transition mt-10">
          <button
            type="submit"
            disabled={loading}
            className={`bg-gray-900 text-white rounded font-medium text-base cursor-pointer flex items-center justify-center transition-all duration-300 ${
              loading ? "w-28 h-10" : "w-36 h-10 hover:bg-gray-800"
            }`}
          >
            {/* {loading ? (
              <InfinitySpin width="70" color="#ffffff" />
            ) : (
              "Submit now"
            )} */}
            Submit now
          </button>

          {!loading && (
            <img
              className="w-5"
              src={assets?.right_arrow_bold_dark?.src}
              alt="arrow icon"
            />
          )}
        </div>
      </form>
    </div>
  );
}

export default GetInTouch;
