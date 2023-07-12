import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Educationsvg from "../assets/education.svg";
import { motion, useAnimation } from "framer-motion";
import Footer from "../components/Footer";

function Education() {
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
      <div className="max-w-[1350px] mx-auto p-3">
        <Navbar />
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="md:py-12 py-5 md:flex justify-center items-center"
        >
          <div className="md:w-1/2 p-4">
            <img src={Educationsvg} alt="" />
          </div>
          <div className="md:w-1/2 p-2">
            <h1 className="sm:text-6xl text-4xl font-medium text-center text-gray-300">
              Educations
            </h1>
            <h2 className="text-gray-300 sm:text-3xl text-2xl text-center py-4">
              Basic Qualification and Certifications
            </h2>
            <p className="text-gray-500 text-xl text-center">
              I actively participate in hackathons and other tech-related
              activities. Below are some of my Qualifications.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={controls}
          className="py-10 overflow-x-hidden"
        >
          <h1 className="text-gray-300 sm:text-5xl text-4xl text-center py-5">
            Degrees Received
          </h1>

          {/* =================first educations ============================ */}

          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={controls}
            className="mt-5 max-w-[1000px] mx-auto shadow shadow-pink-600 hover:shadow-md hover:shadow-pink-600 rounded "
          >
            <div className="bg-pink-600  p-4 text-gray-300 text-2xl font-semibold rounded">
              <div className="flex justify-between items-center ">
                <h1 className="sm:text-2xl text-[18px]">
                  PSIT College of Higher Education
                </h1>
                <span className="sm:text-xl text-[12px] ">2021 - 2023</span>
              </div>
              <h1 className="sm:text-xl text-[16px]">
                Bachelor of Computer Applications
              </h1>
            </div>
            <h1 className="px-6 pt-6 text-gray-300 text-xl">
              ⚡ I have Completed my Graduation.
            </h1>
            <h1 className="px-6 pt-1 text-gray-300 text-xl">
              ⚡ I have studied core subjects like Data Structures, DBMS,
              Networking, Security, etc.
            </h1>
            <h1 className="px-6 pt-1 text-gray-300 text-xl">
              ⚡ I have also completed various online courses for MERN Stack etc
              ...
            </h1>
            <h1 className="px-6 pt-1 text-gray-300 text-xl">
              ⚡ I have implemented several projects based on what I've learn
              under my Computer Applications course.
            </h1>
            <h1 className="px-6 pt-1 pb-8 text-gray-300 text-xl">
              ⚡ I have secured 73.8 Percent.
            </h1>
            <a
              href="https://psit.ac.in/"
              target="_blank"
              className="flex justify-end items-center py-4 px-4"
            >
              <button className="group relative py-2 px-6 bg-pink-600 overflow-hidden rounded-lg ">
                <div className="absolute inset-0 w-0 bg-red-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-xl text-gray-300 group-hover:text-white">
                  Visit Website
                </span>
              </button>
            </a>
          </motion.div>

          {/* =================second educations ============================ */}

          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={controls}
            className="max-w-[1000px] mx-auto shadow shadow-pink-600 hover:shadow-md hover:shadow-pink-600 rounded mt-5"
          >
            <div className="bg-pink-600  p-4 text-gray-300 text-2xl font-semibold rounded">
              <div className="flex justify-between items-center ">
                <h1 className="sm:text-2xl text-xl">RBT Vidyalaya</h1>
                <span className="sm:text-xl text-[16px]">2018 - 2019</span>
              </div>
              <h1 className="sm:text-xl text-[16px]">Science</h1>
            </div>
            <h1 className="px-6 pt-2 text-gray-300 text-xl">
              ⚡ I have completed my Intermediate
            </h1>
            <h1 className=" px-6 pt-2 text-gray-300 text-xl">
              ⚡ I have studied core subjects Mathematics, Physics, Chemistry
              etc.
            </h1>
            <h1 className=" px-6 py-2  text-gray-300 text-xl">
              ⚡ I have secured 60.4 Percent.
            </h1>
            <a
              href="https://uniformapp.in/r-b-t-vidyalaya-2131861-deoria"
              target="_blank"
              className="flex justify-end items-center py-4 px-4"
            >
              <button className="group relative py-2 px-6 bg-pink-600 overflow-hidden rounded-lg ">
                <div className="absolute inset-0 w-0 bg-red-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-xl text-gray-300 group-hover:text-white">
                  Visit Website
                </span>
              </button>
            </a>
          </motion.div>
        </motion.div>
        <Footer />
      </div>
    </>
  );
}

export default Education;
