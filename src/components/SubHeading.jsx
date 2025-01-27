import React from "react";

const SubHeading = () => {
  const Sub = "/public/img/subHEad.mp4";
  return (
    <div className="grid items-center grid-cols-1 gap-10 sm:py-10 md:py-12 lg:py-14 xl:py-18 lg:gap-6 md:gap-8 xl:my-20 md:grid-cols-2">
      {/* Title Section */}

      {/* Image Section */}
      <div className="flex justify-start">
        <video
          src={Sub}
          alt="About Me"
          className="object-contain w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
          autoPlay
          loop
          muted
        />
      </div>

      {/* Text Section */}
      <div className="font-robotoRegular">
        <h1 className="text-xl font-bold text-center md:text-left md:text-2 xl lg:3xl font-SquidFont text-greenCustom">
          Connecting Creativity with Real-World
        </h1>

        <p className="mt-5 text-sm leading-relaxed md:text-base lg:text-lg font-robotoRegular">
          I strive to blend creativity and functionality, crafting solutions
          that not only inspire but also deliver measurable outcomes. My goal is
          to create meaningful experiences that bridge the gap between
          innovation and practicality.
        </p>
      </div>
    </div>
  );
};

export default SubHeading;
