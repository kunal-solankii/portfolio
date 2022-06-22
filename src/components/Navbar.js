import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800  sticky top-0 z-50 text-gray-400">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <span className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl hover:text-2xl">
            {"<Kunal Solanki/> "}
          </a>
        </span>
        <nav className=" md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#work" className="mr-5 hover:text-white">
            Work ( )
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills ( )
          </a>
          <a href="#personalprojects" className="mr-5 hover:text-white">
            Projects ( )
          </a>
          <a href="#aboutme" className="mr-5 hover:text-white">
            About Me ( )
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-base mt-4 md:mt-0">
          Contact Me
          <span className="animate-bounce">
            <ArrowRightIcon className="w-5 h-5 rotate-90 ml-1" />
          </span>

        </a>
      </div>
    </header>
  );
}