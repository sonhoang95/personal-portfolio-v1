import React from "react"
import oops from "../images/oops.png"
import { GoQuote } from "react-icons/go"

export default function AboutMe() {
  return (
    <>
      <h2 className="text-2xl lg:text-3xl font-bold text-accent mb-8">
        About Me
      </h2>
      <div className="text 2xl lg:text-3xl italic text-primary tracking-wide flex flex-col gap-20 lg:flex-row items-center justify-between">
        <div className="lg:w-2/3 relative mt-4">
          <span className="absolute font-bold text-purple-500 transform top-0 left-0 -translate-y-4 lg:-translate-x-10 lg:-translate-y-10 opacity-50">
            <GoQuote className="w-8 h-8 lg:w-12 lg:h-12" />
          </span>
          <p className="text-2xl lg:text-3xl text-center lg:text-left">
            I'm a web developer with an art & design background. In other words,
            I went to art school and returned a programmer.
          </p>
        </div>

        <div className=" w-1/2 lg:w-1/4 transform -translate-y-8">
          <img src={oops} alt="oops icon" />
        </div>
      </div>
    </>
  )
}
