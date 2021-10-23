import React, { useEffect } from "react";
import Header from "../components/Header.js";
import Hero from "../components/Hero.js";
import Interests from "../components/Interests.js";
import Skills from "../components/Skills.js";
import Footer from "../components/Footer.js";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

export default function Home({ title }) {
  // Update page title on route change
  useEffect(() => {
    document.title = title || "";
  }, [title]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      exit="exit"
      className="flex flex-col min-h-screen bg-primary text-primary transition-colors duration-300"
    >
      <Header />

      <main className="container flew-grow max-w-screen-lg px-5 m-auto mt-8 sm:px-12 md:px-20">
        <Hero />
        <Interests />
        <Skills />
      </main>
      <footer>
        <Footer />
      </footer>
    </motion.div>
  );
}
