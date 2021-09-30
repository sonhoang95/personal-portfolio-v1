import React, { useEffect } from "react"
import Header from "../components/Header.js"
import Hero from "../components/Hero.js"
import Interests from "../components/Interests.js"
import Skills from "../components/Skills.js"
import Footer from "../components/Footer.js"

export default function Home({ title }) {
  // Update page title on route change
  useEffect(() => {
    document.title = title || ""
  }, [title])

  return (
    <div className="flex flex-col min-h-screen bg-primary text-primary transition-colors duration-300">
      <Header />
      <main className="container flew-grow max-w-screen-lg px-5 m-auto mt-8 sm:px-12 md:px-20">
        <Hero />
        <Interests />
        <Skills />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}