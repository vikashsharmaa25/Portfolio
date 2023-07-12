import { React, useEffect } from "react";
import Navbar from "../components/Navbar";
import { motion, useAnimation } from "framer-motion";
import Projectsvg from "../assets/project.svg";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { BiLogoMongodb, BiLogoTailwindCss } from "react-icons/bi";

function Projects() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = window.innerHeight / 2;

      if (scrollPosition > triggerPosition) {
        controls.start({
          opacity: 1,
          x: 0,
          transition: { duration: 1, delay: 0.6 },
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
        <div className="overflow-x-hidden">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="md:py-20 py-5 md:flex justify-center items-center"
          >
            <div className="md:w-1/2 p-4">
              <img src={Projectsvg} alt="" />
            </div>
            <div className="md:w-1/2 p-2">
              <h1 className="sm:text-6xl text-4xl font-medium text-center text-gray-300">
                Projects
              </h1>

              <p className="text-gray-500 text-xl text-center py-4">
                My projects make use of a vast variety of latest technology
                tools. My best experience is to create NodeJS Backend Projects
                and React Project. Below are some of my projects. Note that not
                all of the mentioned projects are on GitHub yet.
              </p>
            </div>
          </motion.div>
          {/* ===============Projects ==================== */}
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={controls}
            className="flex justify-center items-center gap-2 md:flex-nowrap flex-wrap py-5 overflow-x-hidden"
          >
            {/* ===============================first project ============================ */}

            <div className=" rounded-md p-5 bg-[#33353a] text-gray-300">
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
            </div>

            {/* ===============================second project ============================ */}
            <div className="rounded-md p-5 bg-[#33353a] text-gray-300">
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
            </div>
            {/* ===============================Third project ============================ */}

            <div className="rounded-md p-5 bg-[#33353a] text-gray-300">
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
            </div>

            {/* ===================project end ================= */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={controls}
            className="flex justify-center items-center gap-2 md:flex-nowrap flex-wrap py-5 overflow-x-hidden"
          >
            {/* ===============================first project ============================ */}

            <div className="rounded-md p-5 bg-[#33353a] text-gray-300">
              <h1 className="text-2xl font-semibold  ">इतिहास दर्पण</h1>
              <p className="text-[18px] py-5">
                This is a Blog Website create using MERN [Mongo, Express, React,
                Node] stack.That displays information an Indian Freedom Fighter.
                The latest posts appearing first, at the top.
              </p>
              <div className="flex items-center  gap-2 flex-wrap">
                <FaReact className="text-blue-700 text-4xl" />
                <FaNodeJs className="text-green-700 text-4xl" />
                <BiLogoTailwindCss className="text-blue-500 text-4xl" />
                <BiLogoMongodb className="text-green-700 text-4xl" />
              </div>
            </div>
            {/* ===============================Second project ============================ */}

            {/* <div className="rounded-md p-5 bg-[#33353a] text-gray-300">
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
            </div> */}

            {/* ===================project end ================= */}
          </motion.div>

          <a
            href="https://github.com/vikashsharmaa25"
            target="_blank"
            className="flex justify-center items-center py-5"
          >
            <button className="group relative py-3 px-6 bg-pink-700 overflow-hidden rounded-lg">
              <div className="absolute inset-0 w-0 bg-red-600 transition-all duration-[550ms] ease-out group-hover:w-full"></div>
              <span className="relative text-gray-300 group-hover:text-white">
                More Projects ( Github )
              </span>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Projects;
