import React from "react";
import featur_img from "../../assets/images/image-computer.png";

function Features() {
  return (
    <div className="max-w-6xl mx-auto text-center mt-20 mx-auto ">
      <div className=" relative flex flex-col justify-center space-y-6 w-full text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
        {/* image div */}
        <div className="md:w-1/2">
          <img
            src={featur_img}
            alt="feature"
            className=" md:absolute top-0 right-[50%]"
          />
        </div>
        {/* item container */}
        <div className="flex flex-col mt-16 mb-12 space-y-12 w-full text-xl text-white text-center md:mb-60  md:pl-16 md:w-1/2">
          <div>
            <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
              Quick Search
            </h5>
            <p className="max-w-md m-auto text-grayishBlue">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          <div>
            <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
              Icloud Sync
            </h5>
            <p className="max-w-md m-auto text-grayishBlue">
              Instantly saves and syncs snippets across all your devices.
            </p>
          </div>
          <div>
            <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
              Complete History
            </h5>
            <p className="max-w-md m-auto text-grayishBlue">
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
