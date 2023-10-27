import deepEarthDesktop from "./loopstudios-landing-page-main/images/desktop/image-deep-earth.jpg";
import deepEarthMobile from "./loopstudios-landing-page-main/images/mobile/image-deep-earth.jpg";
import nightArcadeDesktop from "./loopstudios-landing-page-main/images/desktop/image-night-arcade.jpg";
import nightArcadeMobile from "./loopstudios-landing-page-main/images/mobile/image-night-arcade.jpg";
import soccerTeamDesktop from "./loopstudios-landing-page-main/images/desktop/image-soccer-team.jpg";
import soccerTeamMobile from "./loopstudios-landing-page-main/images/mobile/image-soccer-team.jpg";
import grid from "./loopstudios-landing-page-main/images/desktop/image-grid.jpg";
import gridMobile from "./loopstudios-landing-page-main/images/mobile/image-grid.jpg";

function Creations() {
  return (
    <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
      {/* creations header */}
      <div className="flex  justify-center mb-20  md:justify-between">
        <h2 className="text-4xl font-bold uppercase text-center md:text-left md:text-3xl">
          Our Creations
        </h2>
        <button className="hidden px-10 py-2 my-0 text-black tracking-widest  uppercase bg-white text-black font-bold border-2 border-black  md:block hover:bg-black hover:text-white">
          See All
        </button>
      </div>
      <div className="flex flex-col justify-center w-full space-y-6 text-2xl uppercase md:flex-row md:justify-between md:space-y-0 md:space-x-6">
        {/* item 1 */}
        <div className="group w-full relative overflow-hidden md:w-1/4">
          <img
            src={deepEarthDesktop}
            alt="deep-earth"
            className="w-full hidden transition-all ease-in-out duration-500 transform group-hover:scale-110 md:block"
          />
          <img
            src={deepEarthMobile}
            alt="deep-earth"
            className="w-full block transition-all ease-in-out duration-500 transform group-hover:scale-110 md:hidden"
          />
          {/* items gradient */}
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70 "></div>
          <h5 className="absolute bottom-4 text-white left-0 px-4 duration-200  md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
            Deep Earth
          </h5>
        </div>
        <div className="group w-full relative overflow-hidden md:w-1/4">
          <img
            src={nightArcadeDesktop}
            alt="deep-earth"
            className="w-full hidden transition-all ease-in-out duration-500 transform group-hover:scale-110 md:block"
          />
          <img
            src={nightArcadeMobile}
            alt="deep-earth"
            className="w-full block transition-all ease-in-out duration-500 transform group-hover:scale-110 md:hidden"
          />
          {/* items gradient */}
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70 "></div>
          <h5 className="absolute bottom-4 text-white left-0 px-4 duration-200  md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
            Night Arcade
          </h5>
        </div>
        <div className="group w-full relative overflow-hidden md:w-1/4">
          <img
            src={soccerTeamDesktop}
            alt="deep-earth"
            className="w-full hidden transition-all ease-in-out duration-500 transform group-hover:scale-110 md:block"
          />
          <img
            src={soccerTeamMobile}
            alt="deep-earth"
            className="w-full block transition-all ease-in-out duration-500 transform group-hover:scale-110 md:hidden"
          />
          {/* items gradient */}
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70 "></div>
          <h5 className="absolute bottom-4 text-white left-0 px-4 duration-200  md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
            Soccer Team VR
          </h5>
        </div>
        <div className="group w-full relative overflow-hidden md:w-1/4">
          <img
            src={grid}
            alt="deep-earth"
            className="w-full hidden transition-all ease-in-out duration-500 transform group-hover:scale-110 md:block"
          />
          <img
            src={gridMobile}
            alt="deep-earth"
            className="w-full block transition-all ease-in-out duration-500 transform group-hover:scale-110 md:hidden"
          />
          {/* items gradient */}
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70 "></div>
          <h5 className="absolute bottom-4 text-white left-0 px-4 duration-200  md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
            The Grid
          </h5>
        </div>
      </div>
      <button className="block px-10 w-56 mx-auto my-4 py-2 my-0 text-black tracking-widest  uppercase bg-white text-black font-bold border-2 border-black  md:hidden hover:bg-black hover:text-white">
        See All
      </button>
    </div>
  );
}

export default Creations;
