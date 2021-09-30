import React from "react"
import { FaReact } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"
import covid19tracker from "../images/covid19-demo-1.png"

export default function Covid19Tracker() {
  return (
    <div className="space-y-10 mb-24">
      <div className="text-center space-x-4 capitalize">
        {/* <!-- heading --> */}
        <h1 class="mb-8 text-3xl lg:text-6xl font-extrabold tracking-wide">
          <span
            class="
                text-transparent
                bg-gradient-to-r bg-clip-text
                from-teal-400
                to-teal-500
              "
          >
            {`<Covid-19`}{" "}
          </span>
          <span
            class="
                text-transparent
                bg-gradient-to-r bg-clip-text
                from-teal-500
                via-purple-600
                to-purple-500
              "
          >
            {`Live Tracker />`}
          </span>
        </h1>
        <div className="flex flex-col lg:flex-row w-11/12 lg:w-full mx-auto">
          <a
            className="
          text-sm lg:text-base
              inline-block
     mb-4 lg:mb-8
        
             px-3 lg:px-5 py-1 lg:py-2
              rounded
              bg-gradient-to-br
              from-yellow-300
             to-yellow-500
              hover:to-yellow-600
              text-yellow-900
              hover:text-white
              shadow
              hover:shadow-2xl
          
             
              tracking-wide
              transition-all
              duration-500"
            href="https://youtu.be/zttHG4ymHig"
            target="_blank"
            rel="noopener noreferrer"
          >
            video demo
          </a>
          <a
            className="
          text-sm lg:text-base
              inline-block
     mb-4 lg:mb-8
        
     px-3 lg:px-5 py-1 lg:py-2
              rounded
              bg-gradient-to-br
              from-yellow-300
             to-yellow-500
              hover:to-yellow-600
              text-yellow-900
              hover:text-white
              shadow
              hover:shadow-2xl
          
             
              tracking-wide
              transition-all
              duration-500"
            href="https://covid19-live-tracking-app.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            live site
          </a>
          <a
            className="
          text-sm lg:text-base
              inline-block
     mb-4 lg:mb-8
        
     px-3 lg:px-5 py-1 lg:py-2
              rounded
              bg-gradient-to-br
              from-yellow-300
             to-yellow-500
              hover:to-yellow-600
              text-yellow-900
              hover:text-white
              shadow
              hover:shadow-2xl
          
             
              tracking-wide
              transition-all
              duration-500"
            href="https://github.com/sonhoang95/covid19-live-tracker"
            target="_blank"
            rel="noopener noreferrer"
          >
            source code
          </a>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <p className="border-b-2 border-accent">technologies:</p>
          <FaReact className="w-10 h-10 text-sky-600 dark:text-sky-400" />
          <SiTailwindcss className="w-10 h-10 text-teal-500 dark:text-teal-300" />
        </div>
      </div>
      <div className="relative space-y-4 lg:space-y-0">
        <p
          className="   lg:absolute
                top-0
                right-0
                lg:transform
                lg:translate-x-4
                lg:-translate-y-4
                bg-yellow-100
                text-left
                py-4
                px-8
               
                rounded
                shadow-lg
                text-yellow-800
                border-t-4 border-yellow-500"
        >
          Covid-19 Live Tracking is a helpful tool to track and fight Covid-19.
        </p>
        <img
          className="rounded-lg shadow-2xl border-4 border-purple-400"
          src={covid19tracker}
          alt="covid-19-demo"
        />
      </div>
    </div>
  )
}
