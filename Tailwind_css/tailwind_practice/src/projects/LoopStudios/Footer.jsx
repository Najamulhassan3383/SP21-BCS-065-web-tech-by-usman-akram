import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import logo from "../LoopStudios/loopstudios-landing-page-main/images/logo.svg";

function Footer() {
  return (
    <div className="w-full bg-black  overflow-hidden ">
      {/* logo and links */}
      <div className="flex flex-col  justify-between items-center mb-8 p-12 h-1/2 md:flex-row">
        <div className="text-white text-2xl font-bold ">
          <img src={logo} alt="logo" className="mb-4" />
          <div className="flex flex-col items-center justify-center text-white text-sm md:flex-row">
            <div className="mx-4 text-xl mb-2 md:mb-0">About</div>
            <div className="mx-4 text-xl mb-2 md:mb-0">Careers</div>
            <div className="mx-4 text-xl mb-2 md:mb-0">Events</div>
            <div className="mx-4 text-xl mb-2 md:mb-0">Products</div>
            <div className="mx-4 text-xl mb-2 md:mb-0">Support</div>
          </div>
        </div>

        {/* icons */}
        <div className="flex flex-row items-center justify-center text-white text-2xl mt-4">
          <div className="mx-4">
            <AiFillFacebook className="hover:fill-blue-400 hover:scale:110" />
          </div>
          <div className="mx-4">
            <AiOutlineTwitter className="hover:fill-blue-400 hover:scale:110" />
          </div>
          <div className="mx-4">
            <BsPinterest className="hover:fill-blue-400 hover:scale:110" />
          </div>
          <div className="mx-4">
            <AiFillInstagram className="hover:fill-blue-400 hover:scale:110" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
