import React from "react";
import logo_img from "../../assets/images/logo.svg";

function Hero() {
  return (
    <div className="max-w-6xl mx-auto text-center mb-20 px-10 pt-16">
      <img src={logo_img} alt="logo" className="mx-auto my-16" />
      <h3 className="text-4xl font-bold mb-8 text-darkgrayishBlue md:text-5xl">
        A history of everything you copy
      </h3>
      <div className="text-grayishBlue mb-8 max-w-3xl mx-auto text-2xl">
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </div>
      <div className="flex flex-col justify-center space-y-6 w-full text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
        <button className="bg-strongCyan text-white rounded-lg px-8 py-4 text-xl font-bold hover:bg-lightBlue">
          Download for iOS
        </button>
        <button className="bg-lightBlue text-white rounded-lg px-8 py-4 text-xl font-bold hover:bg-strongCyan">
          Download for Mac
        </button>
      </div>
    </div>
  );
}

export default Hero;
