import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { GiHamburgerMenu, GiCrossedBones } from "react-icons/gi";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    navbar.style.opacity = 0;

    const showNavbar = () => {
      navbar.style.opacity = 1;
    };

    const timeout = setTimeout(showNavbar, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <motion.div
        id="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-300 flex justify-between items-center   py-1 text-2xl"
      >
        <NavLink to="/" className="font-extralight text-4xl">
          {`< vikash />`}
        </NavLink>
        <div className="hidden md:block">
          <ul className="flex gap-x-5 gap-y-2 items-center">
            <NavLink to="/">
              <button className="group relative py-1 px-2 overflow-hidden rounded-lg">
                <div className="absolute inset-0 w-0 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-gray-300 group-hover:text-white">
                  Home
                </span>
              </button>
            </NavLink>
            <NavLink to="/education">
              <button className="group relative py-1 px-2 overflow-hidden rounded-lg">
                <div className="absolute inset-0 w-0 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-gray-300 group-hover:text-white">
                  Education
                </span>
              </button>
            </NavLink>
            <NavLink to="/project">
              <button className="group relative py-1 px-2 overflow-hidden rounded-lg">
                <div className="absolute inset-0 w-0 bg-red-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-gray-300 group-hover:text-white">
                  Projects
                </span>
              </button>
            </NavLink>
            <NavLink to="/contact">
              <button className="group relative py-1 px-2 overflow-hidden rounded-lg">
                <div className="absolute inset-0 w-0 bg-yellow-800 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-gray-300 group-hover:text-white">
                  Contact
                </span>
              </button>
            </NavLink>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {showMenu ? (
              <GiCrossedBones size={30} />
            ) : (
              <GiHamburgerMenu size={30} />
            )}
          </button>
        </div>
      </motion.div>
      {showMenu && (
        <div className="md:hidden">
          <ul className="flex flex-col gap-y-6 items-center text-xl text-center text-white py-2">
            <NavLink to="/" onClick={toggleMenu}>
              <button className="group relative py-1 px-2 overflow-hidden rounded-lg">
                <div className="absolute inset-0 w-0 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-white group-hover:text-white">
                  Home
                </span>
              </button>
            </NavLink>
            <NavLink to="/education" onClick={toggleMenu}>
              <button className="group relative py-1 px-2 overflow-hidden rounded-lg">
                <div className="absolute inset-0 w-0 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-white group-hover:text-white">
                  Education
                </span>
              </button>
            </NavLink>
            <NavLink to="/project" onClick={toggleMenu}>
              <button className="group relative py-1 px-2 overflow-hidden rounded-lg">
                <div className="absolute inset-0 w-0 bg-red-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-white group-hover:text-white">
                  Projects
                </span>
              </button>
            </NavLink>
            <NavLink to="/contact" onClick={toggleMenu}>
              <button className="group relative py-1 px-2 overflow-hidden rounded-lg">
                <div className="absolute inset-0 w-0 bg-yellow-800 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-white group-hover:text-white">
                  Contact
                </span>
              </button>
            </NavLink>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
