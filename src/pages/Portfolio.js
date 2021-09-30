import React, { useEffect } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Covid19Tracker from "../components/Covid19Tracker"
import PluralGroceries from "../components/PluralGroceries"

export default function Portfolio({ title }) {
  // Update page title on route change
  useEffect(() => {
    document.title = title || ""
  }, [title])

  return (
    <div className="flex flex-col min-h-screen bg-primary text-primary transition-colors duration-300">
      <Header />

      <main className="container flew-grow max-w-screen-lg px-5 pb-32 m-auto mt-16 sm:px-12 md:px-20">
        <Covid19Tracker />
        <PluralGroceries />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
