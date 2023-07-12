import React from "react";
import YourSvg from "../assets/home.svg";
import { motion } from "framer-motion";

function HeroImage() {
  return (
    <>
      <motion.img
        src={YourSvg}
        alt=""
        className="w-full"
        animate={{
          y: [-10, 10], // Specify the start and end values for the y property
        }}
        transition={{
          duration: 1, // Set the duration of each animation cycle
          repeat: Infinity, // Set the animation to repeat indefinitely
          repeatType: "reverse", // Reverse the animation direction on each cycle
        }}
      />
    </>
  );
}

export default HeroImage;
