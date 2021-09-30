import React from "react"
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { SiJavascript, SiTailwindcss } from "react-icons/si"

export default function Skills() {
  return (
    <>
      <div className="my-16 lg:mt-32 lg:mb-60 relative ">
        {/* skills cloud */}
        <div className="hidden lg:block absolute text-xs font-bold capitalize text-primary opacity-25 left-12 top-12">
          figma
        </div>
        <div className="hidden lg:block absolute text-xs font-bold capitalize text-primary opacity-25 -left-12 top-72">
          chartJS
        </div>

        <div className="hidden lg:block absolute text-xs font-bold capitalize text-primary opacity-25 -left-12 top-32">
          framer motion
        </div>

        <div className="hidden lg:block absolute text-xs font-bold capitalize text-primary opacity-25 -right-8 top-24">
          Git
        </div>

        <div className="hidden lg:block absolute text-sm font-bold capitalize text-primary opacity-25 -right-12 -bottom-4">
          stripe
        </div>

        <div className="hidden lg:block absolute font-bold capitalize text-primary opacity-25 left-24 -bottom-24 text-sm">
          ES6
        </div>
        <div className="hidden lg:block absolute font-bold capitalize text-primary opacity-25 left-48 top-24 text-sm">
          React Router
        </div>
        <div className="hidden lg:block absolute font-bold capitalize text-primary opacity-25 right-72 top-24">
          MaterialUI
        </div>
        <div className="hidden lg:block absolute font-bold capitalize text-primary opacity-25 right-28 -bottom-16 text-sm">
          mapboxGL
        </div>
        <div className="hidden lg:block absolute font-bold capitalize text-primary opacity-25 right-20 top-8">
          Context API
        </div>
        <div className="hidden lg:block absolute font-bold capitalize text-primary opacity-25 right-96 -bottom-24 text-sm">
          Accessibility
        </div>
        {/* skillset title */}
        <div className="flex flex-col lg:flex-row gap-4 items-center mb-8 lg:mb-32 text-center justify-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="uppercase tracking-widest font-black text-lg lg:text-xl border-b-4 text-gray-600  dark:border-gray-400 dark:text-gray-200">
            {`<Skillsets />`}
          </p>
          <div className="flex items-center gap-2">
            <div className="hidden lg:block w-3 h-3 rounded-full bg-red-500"></div>
            <div className="hidden lg:block w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className=" hidden lg:block w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>

        {/* skillsets icons grid */}

        <div className="grid grid-cols-5 grid-gap-10 place-items-center">
          <div>
            <FaHtml5 className="w-12 h-12 lg:w-24 lg:h-24 text-red-600 hover:scale-105 transform transition-transform duration-400 " />
          </div>
          <div>
            <FaCss3Alt className="w-12 h-12 lg:w-24 lg:h-24 text-blue-600 hover:scale-105 transform transition-transform duration-400" />
          </div>
          <div>
            <SiTailwindcss className="w-12 h-12 lg:w-24 lg:h-24 text-teal-400 hover:scale-105 transform transition-transform duration-400" />
          </div>
          <div>
            <SiJavascript className="w-12 h-12 lg:w-24 lg:h-24 text-yellow-300 hover:scale-105 transform transition-transform duration-400" />
          </div>
          <div>
            <FaReact className="w-12 h-12 lg:w-24 lg:h-24 text-sky-400 hover:scale-105 transform transition-transform duration-400" />
          </div>
        </div>
      </div>
    </>
  )
}
