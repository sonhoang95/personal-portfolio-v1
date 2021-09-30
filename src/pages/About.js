import React, { useEffect } from "react"
import Header from "../components/Header.js"
import Main from "./Main"
import Footer from "../components/Footer.js"

export default function About({ title }) {
  // Update page title on route change
  useEffect(() => {
    document.title = title || ""
  }, [title])

  return (
    <>
      <div className="flex flex-col min-h-screen bg-primary text-primary transition-colors duration-300">
        <header>
          <Header />
        </header>
        <main className="container flew-grow max-w-screen-lg px-5 pb-32 m-auto mt-16 sm:px-12 md:px-20">
          <Main />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}