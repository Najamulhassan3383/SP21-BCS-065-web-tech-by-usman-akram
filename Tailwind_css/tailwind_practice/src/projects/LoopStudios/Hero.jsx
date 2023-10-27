import logo from "./loopstudios-landing-page-main/images/logo.svg";

function Hero() {
  return (
    <div className="max-w-6xl container mx-auto px-6  pt-12 md:px-6 md:pb-12">
      {/* navbar container */}
      <div className="flex items-center font-bold justify-between text-white">
        <img src={logo} alt="logo" className="cursor-pointer" />
        <ul className="flex flex-row font-bold justify-between hidden md:flex">
          <li className="mr-6 group cursor-pointer ">
            <a className="font-bold text-white group-hover:border-b-4 group-hover:transition-all group-hover:ease-in-out group-hover:delay-150 ">
              About
            </a>
          </li>
          <li className="mr-6 group cursor-pointer ">
            <a className="font-bold text-white group-hover:border-b-4 group-hover:transition-all group-hover:ease-in-out group-hover:delay-150 ">
              Careers
            </a>
          </li>
          <li className="mr-6 group cursor-pointer ">
            <a className="font-bold text-white group-hover:border-b-4 group-hover:transition-all group-hover:ease-in-out group-hover:delay-150 ">
              Events
            </a>
          </li>
          <li className="mr-6 group cursor-pointer ">
            <a className="font-bold text-white group-hover:border-b-4 group-hover:transition-all group-hover:ease-in-out group-hover:delay-150 ">
              Products
            </a>
          </li>
          <li className="mr-6 group cursor-pointer">
            <a className="font-bold text-white group-hover:border-b-4 group-hover:transition-all group-hover:ease-in-out group-hover:delay-150 ">
              Support
            </a>
          </li>
        </ul>
      </div>
      <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-5xl">
        <h1 className="font-bold">Immersive experiences that deliver</h1>
      </div>
    </div>
  );
}

export default Hero;
