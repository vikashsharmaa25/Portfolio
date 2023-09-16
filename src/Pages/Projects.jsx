import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Projectsvg from "../assets/project.svg";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { BiLogoMongodb, BiLogoTailwindCss } from "react-icons/bi";
import { motion } from "framer-motion";

function Projects() {
  return (
    <>
      <div className="max-w-[1350px] mx-auto p-3">
        <Navbar />
        <div className="overflow-hidden">
          <div className="md:py-20 py-5 md:flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="md:w-1/2 p-4"
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
                src={Projectsvg}
                alt=""
              />
            </motion.div>
            <div className="md:w-1/2 p-2">
              <motion.h1
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 1.7 }}
                className="sm:text-6xl text-4xl font-medium text-center text-gray-300"
              >
                Projects
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 2 }}
                className="text-gray-500 text-xl text-center py-4"
              >
                My projects make use of a vast variety of latest technology
                tools. My best experience is to create NodeJS Backend Projects
                and React Project. Below are some of my projects. Note that not
                all of the mentioned projects are on GitHub yet.
              </motion.p>
            </div>
          </div>
          {/* ===============Projects ==================== */}

          <div className="grid md:grid-cols-3 gap-2 w-full">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 2.4 }}
              className="rounded-md p-5 bg-[#33353a] text-gray-300 "
            >
              <h1 className="text-2xl font-semibold  ">Amazon Clone</h1>
              <p className="text-[18px] py-5">
                An E-commerce website built using MERN[Mongo, Express, React,
                Node] stack and we have also added stripe payment gateway
                integration [in test mode].
              </p>
              <div className="flex items-center  gap-2 flex-wrap">
                <FaReact className="text-blue-700 text-4xl" />
                <FaNodeJs className="text-green-700 text-4xl" />
                <BiLogoTailwindCss className="text-blue-500 text-4xl" />
                <BiLogoMongodb className="text-green-700 text-4xl" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 2.9 }}
              className="rounded-md p-5 bg-[#33353a] text-gray-300 "
            >
              <h1 className="text-2xl font-semibold  ">Job Portal</h1>
              <p className="text-[18px] py-5">
                An Job Portal website built using MERN[Mongo, Express, React,
                Node] stack.Connect. Collaborate. Succeed: Your Gateway to
                Online Opportunities.
              </p>
              <div className="flex items-center  gap-2 flex-wrap">
                <FaReact className="text-blue-700 text-4xl" />
                <FaNodeJs className="text-green-700 text-4xl" />
                <BiLogoTailwindCss className="text-blue-500 text-4xl" />
                <BiLogoMongodb className="text-green-700 text-4xl" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 3.4 }}
              className="rounded-md p-5 bg-[#33353a] text-gray-300 "
            >
              <h1 className="text-2xl font-semibold  ">Google Clone</h1>
              <p className="text-[18px] py-5">
                I tried to Clone Google Search Engine using [React, Tailwind
                Css, Google Apis]. Explore the web with precision using our
                intuitive search engine.
              </p>
              <div className="flex items-center  gap-2 flex-wrap">
                <FaReact className="text-blue-700 text-4xl" />
                <BiLogoTailwindCss className="text-blue-500 text-4xl" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 3.4 }}
              className="rounded-md p-5 bg-[#33353a] text-gray-300 "
            >
              <h1 className="text-2xl font-semibold  ">Youtube Clone</h1>
              <p className="text-[18px] py-5">
                I tried to Clone Youtube using [React, Tailwind Css, Youtube
                Apis].
              </p>
              <div className="flex items-center  gap-2 flex-wrap">
                <FaReact className="text-blue-700 text-4xl" />
                <BiLogoTailwindCss className="text-blue-500 text-4xl" />
              </div>
            </motion.div>
          </div>

          <motion.a
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 3.7 }}
            href="https://github.com/vikashsharmaa25"
            target="_blank"
            className="flex justify-center items-center py-5 "
          >
            <button className="group relative py-3 px-6 bg-pink-700 overflow-hidden rounded-lg">
              <div className="absolute inset-0 w-0 bg-red-600 transition-all duration-[550ms] ease-out group-hover:w-full"></div>
              <span className="relative text-gray-300 group-hover:text-white">
                More Projects (Github)
              </span>
            </button>
          </motion.a>
        </div>
      </div>
    </>
  );
}

export default Projects;
