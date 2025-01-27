import React from "react";

const Footer = () => {
  const LinkedIn = "/img/linkedin.png";
  const Github = "/img/github.png";
  const Gmail = "/img/gmail.png";

  return (
    <>
      <footer class=" rounded-sm shadow-sm bg-gray-900">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
                DevRapi
              </span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="https://www.linkedin.com/in/raffy-dapadap-a1b5ab349/"
                  target="_blank"
                  class="hover:underline me-4 md:me-6"
                >
                  <img src={LinkedIn} class="h-8 mb-1" alt="Flowbite Logo" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/devrapi"
                  class="hover:underline me-4 md:me-6"
                  target="_blank"
                >
                  <img src={Github} class="h-8 mb-1" alt="Flowbite Logo" />
                  <span>Github</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:raffymaranan22@gmail.com"
                  className="hover:underline me-4 md:me-6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Gmail} className="h-8 mb-1" alt="Flowbite Logo" />
                  <span>Gmail</span>
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              DevRapi™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
