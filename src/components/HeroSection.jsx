import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./Navbar";
import LogoSkills from "./LogoSkills";
import DecryptText from "./DecryptText";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import DecryptName from "./DecryptName";
import SubHeading from "./SubHeading";
import Quote from "./Quote";
import Footer from "./Footer";

const HeroSection = () => {
  const hero = "/img/squid.png";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const formattedDate = new Date().getFullYear();

  // Refs for navigation
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <>
      <div className="px-4 bg-white sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="p-2 bg-white lg:p-6 md:p4">
          <div className="flex items-center justify-between">
            <div className="text-xl tracking-tighter font-SquidFont">
              <h1>DevRapi &copy;{formattedDate}</h1>
            </div>
            <div className="flex-row hidden md:flex">
              <div
                className="mx-2 text-xl tracking-tighter cursor-pointer font-SquidFont"
                onClick={() => scrollToSection(aboutRef)}
              >
                Who I Am
              </div>
              <div
                className="mx-2 text-xl tracking-tighter cursor-pointer font-SquidFont"
                onClick={() => scrollToSection(projectsRef)}
              >
                Projects
              </div>
              <div
                className="mx-2 text-xl tracking-tighter cursor-pointer font-SquidFont"
                onClick={() => scrollToSection(contactsRef)}
              >
                Contacts
              </div>
              <div className="mx-2 text-xl tracking-tighter font-SquidFont">
                <a
                  href="/img/DAPADAP_RAFFY_CV (1).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-2 font-bold text-white rounded-lg bg-custom-gray-4 hover:bg-pinkCustom">
                    Download CV
                  </button>
                </a>
              </div>
            </div>
            {/* Hamburger Icon */}
            <button
              className="block text-xl md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu with Animation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="flex flex-col mt-4 md:hidden"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="py-2 text-xl tracking-tighter cursor-pointer font-robotoRegular"
                  onClick={() => scrollToSection(aboutRef)}
                >
                  Who I Am
                </div>
                <div
                  className="py-2 text-xl tracking-tighter cursor-pointer font-robotoRegular"
                  onClick={() => scrollToSection(projectsRef)}
                >
                  Projects
                </div>
                <div
                  className="py-2 text-xl tracking-tighter cursor-pointer font-robotoRegular"
                  onClick={() => scrollToSection(contactsRef)}
                >
                  Contacts
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex flex-col py-10 ">
          {/* Hero Text */}
          <div className="flex flex-col text-5xl text-center md:text-left md:text-6xl lg:text-7xl xl:text-9xl font-SquidFont">
            {/* <h1>CREATIVE</h1>
            <h1>DEVELOPER</h1> */}
            <DecryptText />
          </div>

          {/* Hero Image */}
          <div className="flex justify-center w-full my-2 md:justify-start">
            <img
              src={hero}
              alt="Hero"
              className="object-contain w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
            />
          </div>

          {/* Arrow and Name */}
          <div className="flex flex-col items-center justify-between w-full pt-3 md:flex-row">
            {/* Down Arrow */}
            <div className="flex items-center justify-center order-2 w-12 h-12 md:order-1 md:w-24 md:h-24">
              {/* <img src={downArrow} alt="Arrow" className="object-contain" /> */}
            </div>

            {/* Name */}
            <div className="flex flex-col items-center order-1 text-5xl md:items-end md:order-2 md:text-6xl lg:text-7xl xl:text-9xl font-SquidFont">
              {/* <h1>RAFFY</h1>
              <h1>DAPADAP</h1> */}
              <DecryptName />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="pt-16 bg-custom-gray-2">
        <AboutMe />
      </div> */}
      <div className="px-4 bg-custom-gray-1 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <Quote />
      </div>
      <div className="px-4 bg-white sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <SubHeading />
      </div>
      {/* */}
      <div
        className="px-4 bg-white sm:px-8 md:px-16 lg:px-24 xl:px-32"
        ref={projectsRef}
      >
        <Projects />
      </div>
      <div>
        <LogoSkills />
      </div>
      <div
        ref={aboutRef}
        className="px-4 bg-white sm:px-8 md:px-16 lg:px-24 xl:px-32"
      >
        <AboutMe />
      </div>
      <div ref={contactsRef} className="mt-10">
        <Footer />
      </div>
    </>
  );
};

export default HeroSection;
