import React from "react";
import icon1 from "../../assets/images/icon-blacklist.svg";
import icon2 from "../../assets/images/icon-text.svg";
import icon3 from "../../assets/images/icon-preview.svg";

function SuperChargeSection() {
  return (
    <div className="max-w-6xl mx-auto text-center my-20 mx-auto  ">
      <h3 className="text-4xl font-bold mb-8 text-darkgrayishBlue md:text-5xl">
        SuperCharge your workflow
      </h3>

      <p className="text-grayishBlue text-lg mb-8">
        We have got the tools to boost your productivity.
      </p>
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="flex flex-col items-center mb-8">
          <img src={icon1} alt="icon-blacklist" border="0" className="mb-4" />
          <h4 className="text-2xl font-bold mb-4 text-darkgrayishBlue">
            Create blacklists
          </h4>
          <p className="text-grayishBlue text-lg">
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </p>
        </div>
        <div className="flex flex-col items-center mb-8">
          <img src={icon2} alt="icon-text" border="0" className="mb-4" />
          <h4 className="text-2xl font-bold mb-4 text-darkgrayishBlue">
            Plain text snippets
          </h4>
          <p className="text-grayishBlue text-lg">
            Remove unwanted formatting from copied text for a consistent look.
          </p>
        </div>
        <div className="flex flex-col items-center mb-8">
          <img src={icon3} alt="icon-preview" border="0" className="mb-4" />
          <h4 className="text-2xl font-bold mb-4 text-darkgrayishBlue">
            Sneak preview
          </h4>
          <p className="text-grayishBlue text-lg">
            Quick preview of all snippets on your Clipboard for easy access.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SuperChargeSection;
