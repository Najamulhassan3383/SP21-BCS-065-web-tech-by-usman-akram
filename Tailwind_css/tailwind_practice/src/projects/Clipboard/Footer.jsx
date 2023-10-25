import React from "react";
import logo from "../../assets/images/logo.svg";

function Footer() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-6xl mx-auto text-center my-20 mx-auto  ">
        <div className="flex flex-col items-center justify-between md:flex-row ">
          <img src={logo} alt="logo" className="scale-50" />
          {/* container for menus and socials */}
          <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue ">
            {/* menus */}
            <div className="flex flex-col items-center justify-between  space-y-4 md:ml-24 md:flex-row md:mb-0 md:space-y-0 md:space-x-24 text-grayishBlue ">
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    FAQs
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Press Kit
                  </a>
                </div>
              </div>
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Install Guide
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
