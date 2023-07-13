import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Home from "../assets/home2.svg";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaNpm,
  FaGit,
  FaBootstrap,
} from "react-icons/fa6";
import { BiLogoMongodb } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";

function Hero2() {
  return (
    <>
      <div className="overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-white font-semibold sm:text-5xl text-3xl text-center p-2 sm:mt-8 mt-4 tracking-wide"
        >
          Here's what I do
        </motion.div>
        <div className="flex flex-col md:flex-row md:items-center justify-center items-center md:py-20 py-5 md:mt-10 mt-5">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="w-full md:w-1/2 order-2 md:order-1 md:mb-4 p-2"
          >
            <motion.img
              animate={{
                y: [-10, 10], // Specify the start and end values for the y property
              }}
              transition={{
                duration: 1, // Set the duration of each animation cycle
                repeat: Infinity, // Set the animation to repeat indefinitely
                repeatType: "reverse", // Reverse the animation direction on each cycle
              }}
              src={Home}
              alt=""
              className=""
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="w-full md:w-1/2 order-1 md:order-2 md:mt-4 p-2"
          >
            <h1 className="text-white md:text-5xl text-3xl p-2 text-center">
              MERN Stack Developer
            </h1>
            <div className="flex flex-wrap justify-center items-center py-4">
              <FaHtml5 className="text-7xl text-orange-700 p-1" />
              <FaCss3 className="text-7xl text-blue-700 p-1" />
              <FaJs className="text-7xl text-yellow-500 p-1" />
              <FaReact className="text-7xl text-blue-500 p-1" />
              <FaNodeJs className="text-7xl text-green-700 p-1" />
              <FaNpm className="text-7xl text-red-500 p-1" />
              <BiLogoMongodb className="text-7xl text-green-700 p-1" />
              <FaGit className="text-7xl text-red-900 p-1" />
              <SiTailwindcss className="text-7xl text-blue-600 p-1" />
              <FaBootstrap className="text-7xl text-purple-800 p-1" />
            </div>
            <div className="text-gray-500 text-xl p-2">
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2.5 }}
              >
                ⚡ Develop highly interactive Front end / User Interfaces for
                your web applications
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2.8 }}
                className="py-2"
              >
                ⚡ Building responsive website front end using ReactJS etc ...
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 3 }}
                className="py-2"
              >
                ⚡ Creating application backend in Node, Express
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 3.2 }}
                className="py-2"
              >
                ⚡ Integration of third party services such as Firebase / Socket
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Hero2;
