import React from "react"
import Heading from "./Heading"
import Quotes from "./Quotes"
import AboutMe from "./AboutMe"
import Content from "./Content"

export default function Main() {
  return (
    <>
      <div className=" flex flex-col items-center w-11/12 ">
        <div className="text-lg space-y-12 text-secondary dark:text-gray-400 leading-relaxed">
          <div className="mb-8">
            <Heading />
            <Quotes />
          </div>
          <AboutMe />
          <Content />
        </div>
      </div>
    </>
  )
}
