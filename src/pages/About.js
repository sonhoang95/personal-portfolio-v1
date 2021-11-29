import React, { useEffect } from 'react';
import Header from '../components/Header.js';
import Main from './Main';
import Footer from '../components/Footer.js';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut',
    },
  },
};

export default function About({ title }) {
  // Update page title on route change
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex flex-col min-h-screen bg-primary text-primary transition-colors duration-300"
      >
        <Header />

        <main className="container flew-grow max-w-screen-lg px-5 pb-32 mx-auto mt-16 sm:px-12 md:px-20">
          <Main />
        </main>
        <footer>
          <Footer />
        </footer>
      </motion.div>
    </>
  );
}
