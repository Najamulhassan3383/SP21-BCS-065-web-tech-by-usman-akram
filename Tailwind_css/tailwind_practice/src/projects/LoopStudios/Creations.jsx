import React from "react";

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
    </div>
  );
}

export default Creations;
