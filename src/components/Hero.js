import React from "react";
import AvatarBackgroundGrid from "./AvatarBackgroundGrid";
import avatar from "../images/avatar.jpeg";
import {
  AiOutlineGithub,
  AiOutlineCodepen,
  AiFillLinkedin,
} from "react-icons/ai";
import { motion } from "framer-motion";

const btnVariants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 4.2,
      type: "spring",
      stiffness: 50,
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: "beforeChildren",
    },
  },
};

const childrenVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

export default function Hero() {
  return (
    <>
      <div className="flex flex-col-reverse items-center mt-6 lg:flex-row lg:justify-between">
        <div className="space-y-4 mt-24 md:mt-16 lg:mt-6 lg:max-w-xl">
          <div className="mb-4">
            <motion.h1
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                duration: 1,
                delay: 3,
              }}
              className="text-4xl text-center md:text-5xl lg:text-left lg:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-teal-500 to-teal-500 dark:from-teal-500 dark:via-blue-500 dark:to-blue-500 bg-clip-text text-transparent tracking-wider mb-6"
            >
              {`<Hello World! />`}{" "}
              <div className="text-yellow-300 animate-wiggle inline-block">
                👋🏼
              </div>
            </motion.h1>

            <motion.p
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                duration: 1,
                delay: 3.5,
              }}
              className="text-secondary text-xl md:text-2xl lg:text-3xl tracking-wide px-4 text-center lg:text-left leading-relaxed relative pl-0 pb-4"
            >
              "I'm{" "}
              <span
                className="text-transparent bg-gradient-to-r  from-teal-500
                to-blue-500  bg-clip-text font-bold"
              >
                Son
              </span>
              , a{" "}
              <span
                className="text-transparent bg-gradient-to-r from-teal-500
                via-teal-600 to-blue-500 bg-clip-text font-bold"
              >
                front-end web developer
              </span>{" "}
              who loves making experiences that stick."
            </motion.p>
          </div>

          {/* cta button */}
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-8"
            variants={btnVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              variants={childrenVariants}
              whileHover="hover"
              whileFocus="hover"
              href="https://drive.google.com/file/d/1oLVol0WgbxHDZrLSF9y6d7XOfW0mWwxJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-2 px-3 lg:py-2 lg:px-4 bg-gradient-to-br 
                from-blue-400 to-blue-600 dark:from-teal-400 dark:to-teal-600 text-xs lg:text-sm rounded-lg text-white shadow font-semibold "
            >
              Download Resume
            </motion.a>

            <div className="flex items-center gap-4">
              <motion.a
                variants={childrenVariants}
                href="https://www.linkedin.com/in/son-nguyen-6a0b4b157/"
                target="_blank"
                rel="noreferrer noopener"
                title="LinkedIn"
              >
                <AiFillLinkedin className="w-5 h-5 lg:w-6 lg:h-6 hover:text-accent transform hover:-translate-y-1 transition-all duration-400" />
              </motion.a>

              <motion.a
                variants={childrenVariants}
                href="https://github.com/sonhoang95"
                target="_blank"
                rel="noreferrer noopener"
                title="Github"
              >
                <AiOutlineGithub className="w-5 h-5 lg:w-6 lg:h-6 hover:text-accent transform hover:-translate-y-1 transition-all duration-400" />{" "}
              </motion.a>

              <motion.a
                variants={childrenVariants}
                href="https://codepen.io/sonhoang95"
                target="_blank"
                rel="noreferrer noopener"
                title="Codepen"
              >
                {" "}
                <AiOutlineCodepen className="w-5 h-5 lg:w-6 lg:h-6 hover:text-accent transform hover:-translate-y-1 transition-all duration-400" />{" "}
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <div aria-hidden={true}>
            <AvatarBackgroundGrid />
          </div>
          <div className="absolute top-0 lg:right-6 flex items-center justify-center w-full h-full">
            <motion.div
              className="border-4 border-accent rounded-full p-2"
              initial={{ y: -500 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 5.5,
                type: "spring",
                stiffness: 40,
              }}
            >
              <img
                src={avatar}
                alt="personal avatar"
                className="w-36 h-36 overflow-hidden rounded-full md:h-40 md:w-40 lg:h-44 lg:w-44"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
