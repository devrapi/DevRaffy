import React from "react";
import Focus from "./Focus";

const AboutMe = () => {
  const AboutMe = "/img/AboutMe.png";

  return (
    <div className="grid items-center grid-cols-1 gap-6 md:grid-cols-2">
      {/* Title Section */}
      <div className="col-span-1 text-center md:col-span-2 font-robotoBold">
        <h1 className="text-3xl font-bold text-start md:text-4xl lg:text-5xl font-SquidFont text-greenCustom">
          <Focus />
        </h1>
      </div>

      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src={AboutMe}
          alt="About Me"
          className="object-contain w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
        />
      </div>

      {/* Text Section */}
      <div className="font-robotoRegular">
        {/* <h2 className="text-lg font-bold md:text-2xl lg:text-4xl">About Me</h2> */}
        <p className="mt-5 text-sm leading-relaxed md:text-base lg:text-lg font-robotoRegular">
          Hi, I'm Raffy Dapadap, an aspiring IT professional with a passion for
          technology and innovation. I am currently "gradwaiting" for my
          Bachelor of Science in Information Technology degree. My journey in
          programming and web development has been fueled by a strong curiosity
          and a desire to create meaningful and impactful solutions
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
