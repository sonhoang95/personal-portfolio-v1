import React from "react"

export default function Beam() {
  return (
    <>
      {/* Beam thingy */}
      <div className="absolute top-0 inset-x-0 transform -translate-y-full flex gap-8 justify-center items-end">
        <div className="bg-red-500 w-2 h-12 rounded mb-12 transform -rotate-45 origin-bottom"></div>
        <div className="bg-yellow-500 w-2 h-20 rounded mb-12"></div>
        <div className="bg-green-500 w-2 h-12 rounded mb-12 transform rotate-45 origin-bottom"></div>
      </div>
    </>
  )
}
