import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Educationsvg from "../assets/education.svg";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

function Education() {
  return (
    <>
      <div className="max-w-[1350px] mx-auto p-3 ">
        <Navbar />
        <div className="md:py-12 py-5 md:flex justify-center items-center">
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
              src={Educationsvg}
              alt=""
            />
          </motion.div>
          <div className="md:w-1/2 p-2 overflow-x-hidden">
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="sm:text-6xl text-4xl font-medium text-center text-gray-300"
            >
              Educations
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 2 }}
              className="text-gray-300 sm:text-3xl text-2xl text-center py-4"
            >
              Basic Qualification and Certifications
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
              className="text-gray-500 text-xl text-center"
            >
              I actively participate in hackathons and other tech-related
              activities. Below are some of my Qualifications.
            </motion.div>
          </div>
        </div>
        <motion.div className="py-10 overflow-x-hidden">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 3 }}
            className="text-gray-300 sm:text-5xl text-4xl text-center py-5"
          >
            Degrees Received
          </motion.div>

          {/* =================first educations ============================ */}

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 3 }}
            className="mt-5 max-w-[1000px] mx-auto shadow shadow-pink-600 hover:shadow-md hover:shadow-pink-600 rounded"
          >
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 3.2 }}
              className="bg-pink-600  p-4 text-gray-300 text-2xl font-semibold rounded"
            >
              <div className="flex justify-between items-center ">
                <h1 className="sm:text-2xl text-[18px]">
                  PSIT College of Higher Education
                </h1>
                <span className="sm:text-xl text-[12px] ">2021 - 2023</span>
              </div>
              <h1 className="sm:text-xl text-[16px]">
                Bachelor of Computer Applications
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3.5 }}
              className="px-6 pt-6 text-gray-300 text-xl"
            >
              ⚡ I have Completed my Graduation.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3.7 }}
              className="px-6 pt-1 text-gray-300 text-xl"
            >
              ⚡ I have studied core subjects like Data Structures, DBMS,
              Networking, Security, etc.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3.9 }}
              className="px-6 pt-1 text-gray-300 text-xl"
            >
              ⚡ I have also completed various online courses for MERN Stack etc
              ...
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 4.1 }}
              className="px-6 pt-1 text-gray-300 text-xl"
            >
              ⚡ I have implemented several projects based on what I've learn
              under my Computer Applications course.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 4.3 }}
              className="px-6 pt-1 pb-8 text-gray-300 text-xl"
            >
              ⚡ I have secured 73.8 Percent.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -1000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 4.5 }}
            >
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
          </motion.div>

          {/* =================second educations ============================ */}

          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 4.4 }}
            className="max-w-[1000px] mx-auto shadow shadow-pink-600 hover:shadow-md hover:shadow-pink-600 rounded mt-5"
          >
            <div className="bg-pink-600  p-4 text-gray-300 text-2xl font-semibold rounded">
              <div className="flex justify-between items-center ">
                <h1 className="sm:text-2xl text-xl">RBT Vidyalaya</h1>
                <span className="sm:text-xl text-[16px]">2018 - 2019</span>
              </div>
              <h1 className="sm:text-xl text-[16px]">Science</h1>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 4.5 }}
              className="px-6 pt-2 text-gray-300 text-xl"
            >
              ⚡ I have completed my Intermediate
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 4.7 }}
              className=" px-6 pt-2 text-gray-300 text-xl"
            >
              ⚡ I have studied core subjects Mathematics, Physics, Chemistry
              etc.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 4.9 }}
              className=" px-6 py-2  text-gray-300 text-xl"
            >
              ⚡ I have secured 60.4 Percent.
            </motion.div>
            <motion.a
              initial={{ opacity: 0, x: -1000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 5.2 }}
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
            </motion.a>
          </motion.div>
        </motion.div>
        <Footer />
      </div>
    </>
  );
}

export default Education;
