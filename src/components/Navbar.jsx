import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
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
          <div className="mx-2 text-xl tracking-tighter font-SquidFont">
            <a
              href="/public/img/DAPADAP_RAFFY_CV (1).pdf"
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

      {/* Page Sections */}
      {/* <div ref={aboutRef} className="p-4 mt-20 bg-gray-100">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p>Content for the "Who I Am" section.</p>
      </div>
      <div ref={projectsRef} className="p-4 mt-20 bg-gray-200">
        <h2 className="text-2xl font-bold">Projects</h2>
        <p>Content for the "Projects" section.</p>
      </div>
      <div ref={contactsRef} className="p-4 mt-20 bg-gray-300">
        <h2 className="text-2xl font-bold">Contacts</h2>
        <p>Content for the "Contacts" section.</p>
      </div> */}
    </div>
  );
};

export default Navbar;
