import React from "react";
import LogoWall from "../ReactBitsComponents/LogoWall";
import { div } from "framer-motion/client";

const LogoSkills = () => {
  const react = "/public/img/react.png";
  const html = "/public/img/html.png";
  const css = "/public/img/css-3.png";
  const js = "/public/img/js.png";
  const php = "/public/img/php.png";
  const figma = "/public/img/figma.png";
  const sql = "/public/img/sql.png";
  const git = "/public/img/github.png";

  const logoImgs = [
    { imgUrl: react, altText: "React Bits Logo" },
    { imgUrl: html, altText: "html Bits Logo" },
    { imgUrl: css, altText: "css Bits Logo" },
    { imgUrl: js, altText: "js Bits Logo" },
    { imgUrl: php, altText: "php Bits Logo" },
    { imgUrl: sql, altText: "sql Bits Logo" },
    { imgUrl: git, altText: "git Bits Logo" },
    { imgUrl: figma, altText: "figma Bits Logo" },
  ];

  return (
    <div className="pt-4 pb-12 md:pb-20 lg:pb-24 xl:pb-32">
      <div className="flex justify-center px-4 py-6 md:py-12 lg:py-16">
        <h1 className="text-3xl font-bold text-start md:text-4xl lg:text-5xl font-SquidFont text-greenCustom">
          Tools for crafting intuitive designs
        </h1>
      </div>
      <div className="relative w-full p-4">
        <LogoWall
          items={logoImgs}
          direction="horizontal"
          pauseOnHover={true}
          size="clamp(6rem, 1rem + 10vmin, 15rem)" // Adjusted for better scaling
          duration="60s"
          bgColor="#ffff"
          bgAccentColor="#ed1b76"
        />
      </div>
    </div>
  );
};

export default LogoSkills;
