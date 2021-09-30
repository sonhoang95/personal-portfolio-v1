import React from "react"
import FooterHeader from "./FooterHeader"
import Form from "./Form"
import Links from "./Links"
import Beam from "./Beam"

export default function Footer() {
  return (
    <div className="py-16 bg-secondary dark:bg-dark">
      <div className="container flew-grow max-w-screen-lg px-5  m-auto mt-32 sm:px-12 md:px-20 text-secondary">
        <div className="flex flex-col items-center text-center w-3/4 mx-auto gap-4 relative">
          <Beam />
          <FooterHeader />
          <Form />
        </div>
        <Links />
      </div>
    </div>
  )
}
