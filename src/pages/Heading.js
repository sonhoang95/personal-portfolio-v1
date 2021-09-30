import React from "react"

export default function Heading() {
  return (
    <div className="relative font-bold text-primary mb-8">
      <h1 className="text-4xl lg:text-5xl mb-20 text-center">
        Welcome to thesonnguyen.com!
      </h1>
      <div className="absolute w-1/3 h-2 rounded bg-gradient-to-r from-blue-500 to-purple-500 top-0 left-0 transform -translate-y-5"></div>
      <div className="absolute w-1/3 h-2 rounded bg-gradient-to-r from-purple-500 to-blue-500 bottom-0 right-0 transform translate-y-7"></div>
    </div>
  )
}
