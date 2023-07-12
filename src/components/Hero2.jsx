import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
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
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = window.innerHeight / 2;

      if (scrollPosition > triggerPosition) {
        controls.start({
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, delay: 0.2 },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <>
      <div className="overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={controls}
          className="text-white font-semibold sm:text-5xl text-3xl text-center p-2  sm:mt-8 mt-4 tracking-wide"
        >
          Here's what I do
        </motion.div>
        <div className="flex flex-col md:flex-row md:items-center justify-center items-center  md:py-20 py-5 md:mt-10 mt-5">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={controls}
            className="w-full md:w-1/2 order-2 md:order-1 md:mb-4 p-2"
          >
            <img src={Home} alt="" className="" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={controls}
            className="w-full md:w-1/2 order-1 md:order-2 md:mt-4 p-2"
          >
            <h1 className="text-white md:text-5xl text-3xl p-2 text-center">
              MERN Stack Developer
            </h1>
            <div className="flex flex-wrap  justify-center items-center py-4">
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
            <div className="text-gray-500 text-xl p-2 ">
              <h1>
                ⚡ Develop highly interactive Front end / User Interfaces for
                your web applications
              </h1>
              <h1 className="py-2">
                ⚡ Building responsive website front end using ReactJS etc ...
              </h1>
              <h1 className="py-2">
                ⚡ Creating application backend in Node, Express
              </h1>
              <h1 className="py-2">
                ⚡ Integration of third party services such as Firebase / Socket
              </h1>
            </div>
          </motion.div>
        </div>
      </div>
      {/* <div style={{ height: "2000px" }}></div> Placeholder for scrolling */}
      {/* <Link to="section2" smooth={true} duration={1000}>
        Scroll to Section 2
      </Link> */}
    </>
  );
}

export default Hero2;
