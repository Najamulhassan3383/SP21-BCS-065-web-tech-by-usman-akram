import React from "react";
import google from "../../assets/images/logo-google.png";
import ibm from "../../assets/images/logo-ibm.png";
import microsoft from "../../assets/images/logo-microsoft.png";
import hp from "../../assets/images/logo-hp.png";
import vector from "../../assets/images/logo-vector-graphics.png";

function References() {
  return (
    <div className="max-w-6xl mx-auto text-center my-36 mx-auto  ">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <img src={google} alt="google" className="mx-auto mb-16" />
        <img src={ibm} alt="IBM" className="mx-auto mb-16" />

        <img src={microsoft} alt="microsoft" className="mx-auto mb-16" />
        <img src={hp} alt="hp" className="mx-auto mb-16" />
        <img src={vector} alt="vector" className="mx-auto mb-16" />
      </div>
      <h3 className="text-4xl font-bold mb-8 text-darkgrayishBlue md:text-5xl">
        Clipboard for iOS and MacOS
      </h3>
      <div className="text-grayishBlue mb-8 max-w-3xl mx-auto text-2xl">
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you're ready to start adding to your clipboard.
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

export default References;
