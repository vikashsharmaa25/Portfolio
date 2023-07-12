import React from "react";
import Navbar from "../components/Navbar";
import Profile from "../assets/vikash.jpeg";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaGoogle,
} from "react-icons/fa6";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <div className="max-w-[1350px] mx-auto p-3 ">
        <Navbar />
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="md:py-10 py-5 md:flex justify-center items-center"
        >
          <div className="md:w-1/2 p-4 flex justify-center items-center">
            <div className="max-w-[350px]">
              <img src={Profile} alt="" />
            </div>
          </div>
          <div className="md:w-1/2 p-2">
            <h1 className="sm:text-6xl text-4xl font-medium text-center text-gray-300">
              Contact Me
            </h1>

            <p className="text-gray-500 text-xl text-center py-4">
              You can contact me at the places mentioned below. I will try to
              get back to you as fast as I can.
            </p>
            <div className="flex gap-4 justify-center items-center  p-2 flex-wrap">
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
            <a
              href="https://drive.google.com/file/d/1ID4WC16QDVeKTFN2Idrpp_Cc-inEyvTK/view?usp=drivesdk"
              target="_blank"
              className="flex justify-center items-center py-6"
            >
              <button className="group relative py-2 px-6 bg-pink-600 overflow-hidden rounded-lg">
                <div className="absolute inset-0 w-0 bg-red-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-xl text-gray-300 group-hover:text-white">
                  See My Resume
                </span>
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="pt-24 pb-3"
        >
          <Footer />
        </motion.div>
      </div>
    </>
  );
}

export default Contact;
