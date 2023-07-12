import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaGoogle,
} from "react-icons/fa6";
import HeroImage from "./HeroImage";

function Hero() {
  useEffect(() => {
    const heroSection = document.getElementById("hero-section");
    heroSection.style.opacity = 0;

    const showHeroSection = () => {
      heroSection.style.opacity = 1;
    };

    const timeout = setTimeout(showHeroSection, 500); // Delay the appearance of the hero section

    return () => clearTimeout(timeout); // Clean up the timeout on unmount
  }, []);

  return (
    <>
      <motion.div
        id="hero-section"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="md:flex md:text-start text-center justify-center  md:mt-10 md:py-10 py-8"
      >
        <div className="md:w-1/2 p-1 h-full md:mt-14">
          <div className="md:text-7xl text-4xl  text-gray-300 font-semibold ">
            <h1>Hello👋</h1>
          </div>
          <div>
            <h1 className="sm:text-3xl text-xl text-gray-400 sm:font-medium font-light py-6">
              I'm <span className="text-pink-600 font-bold">Vikash Sharma</span>
              . MERN Stack Developer, Open Source Enthusiast 🔥. Always
              learning.
            </h1>
            <div className="flex gap-2 md:justify-start justify-center items-center">
              <motion.div
                whileHover={{ rotate: 360 }}
                className="md:text-5xl text-4xl"
              >
                <a
                  href="https://www.linkedin.com/in/vikashsharmaa25/"
                  target="_blank"
                >
                  <FaLinkedin className="bg-blue-700 text-white p-2 rounded-full shadow-lg duration-200" />
                </a>
              </motion.div>

              <motion.div
                whileHover={{ rotate: 360 }}
                className="md:text-5xl text-4xl"
              >
                <a href="https://github.com/vikashsharmaa25" target="_blank">
                  <FaGithub className="bg-black text-white p-2 rounded-full shadow-lg duration-200" />
                </a>
              </motion.div>

              <motion.div
                whileHover={{ rotate: 360 }}
                className="md:text-5xl text-4xl"
              >
                <a
                  href="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                >
                  <FaGoogle className="bg-red-700 text-white p-2 rounded-full shadow-lg duration-200" />
                </a>
              </motion.div>

              <motion.div
                whileHover={{ rotate: 360 }}
                className="md:text-5xl text-4xl"
              >
                <a
                  href="https://twitter.com/vikashsharmaa25?t=u9qt5kxKBucP5t2adTy6Iw&s=09"
                  target="_blank"
                >
                  <FaTwitter className="bg-blue-500 text-white p-2 rounded-full shadow-lg duration-200" />
                </a>
              </motion.div>

              <motion.div
                whileHover={{ rotate: 360 }}
                className="md:text-5xl text-4xl"
              >
                <a
                  href="https://www.instagram.com/vikashsharmaa25/"
                  target="_blank"
                >
                  <FaInstagram className="bg-pink-600 text-white p-2 rounded-full shadow-lg duration-200" />
                </a>
              </motion.div>
            </div>
          </div>
          <NavLink to="/contact">
            <div className="pt-8 pb-2">
              <button className="group relative py-2 px-8 bg-pink-700 overflow-hidden rounded-lg">
                <div className="absolute inset-0 w-0 bg-blue-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-white group-hover:text-white text-2xl">
                  Contact Me
                </span>
              </button>
            </div>
          </NavLink>
        </div>
        <div className="md:w-1/2">
          <HeroImage />
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
