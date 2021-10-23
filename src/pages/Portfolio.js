import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Covid19Tracker from "../components/Covid19Tracker";
import PluralGroceries from "../components/PluralGroceries";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 8,
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

export default function Portfolio({ title }) {
  // Update page title on route change
  useEffect(() => {
    document.title = title || "";
  }, [title]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col min-h-screen bg-primary text-primary transition-colors duration-300"
    >
      <Header />

      <main className="container flew-grow max-w-screen-lg px-5 pb-32 m-auto mt-16 sm:px-12 md:px-20">
        <Covid19Tracker />
        <PluralGroceries />
      </main>
      <footer>
        <Footer />
      </footer>
    </motion.div>
  );
}
