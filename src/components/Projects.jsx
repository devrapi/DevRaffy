import React from "react";
import Project1 from "./project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
const Projects = () => {
  const projects = [
    {
      title:
        "SK Connect: A Comprehensive Web Application for Youth Leaderships",
      component: <Project1 />,
      description:
        "SK Connect is an innovative web application designed to empower youth leaders and engage communities. The system is developed using cutting-edge tools and technologies such as Laravel 11, React.js, and Tailwind CSS. These tools enable a seamless, responsive, and user-friendly experience across all devices.",
      link: "https://sk-connect.jebsdev.solutions/",
    },
    {
      title: "Jorgao: A Shoe Store Inspired by Nike",
      component: <Project2 />,
      description:
        "Jorgao is a modern and stylish online shoe store inspired by the innovative designs of Nike. The platform offers a seamless shopping experience, showcasing a wide range of high-quality footwear. Built using CodeIgniter 3 and Bootstrap for the UI, it features responsive design, secure payment integration, and a user-friendly interface to enhance customer satisfaction.",
      link: "https://jorgao.jamesantiaguel.com/UserSide",
    },
    {
      title: "My Portfolio: Showcasing My Work and Skills",
      component: <Project3 />,
      description:
        "This is my personal portfolio, where I showcase my skills, projects, and achievements. Built with modern web technologies such as React.js and Tailwind CSS, it provides a smooth user experience, with responsive design for all screen sizes. ",
      link: "https://jorgao.jamesantiaguel.com/UserSide",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Heading Section */}
      <div className="py-10 md:py-16">
        <h1 className="text-3xl font-bold text-start md:text-4xl lg:text-5xl font-SquidFont text-greenCustom">
          Recent Projects
        </h1>
      </div>

      {/* Project Sections */}
      {projects.map((project, index) => (
        <div
          key={index}
          className="mb-12 overflow-hidden transition-shadow duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl"
        >
          {/* Title */}
          <div className="py-8 text-center">
            <h1 className="text-lg font-bold md:text-xl lg:text-2xl font-robotoRegular">
              {project.title}
            </h1>
          </div>

          {/* Project Content */}
          <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-2">
            {/* Left Section */}
            <div className="flex items-center justify-center">
              {project.component}
            </div>

            {/* Right Section */}
            <div className="flex flex-col px-0 sm:px-8 md:px-12 lg:px-16 xl:px-24">
              <p className="mt-5 text-sm leading-relaxed md:text-base lg:text-lg font-robotoRegular">
                {project.description}
              </p>

              <div className="flex justify-start mt-6 sm:justify-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-sm text-white transition-transform transform rounded-md shadow-md md:text-base lg:text-lg bg-pinkCustom hover:bg-pink-600 hover:scale-105"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
