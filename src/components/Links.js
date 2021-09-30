import React from "react"
import { NavLink } from "react-router-dom"
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineCodepen,
  AiFillLinkedin,
} from "react-icons/ai"

export default function Links() {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:justify-between lg:items-end w-3/4 mx-auto lg:w-full ">
      <p className="text-xs font-light tracking-widest opacity-80">
        © 2020 - 2021 Son Nguyen. All Rights Reserved.
      </p>
      <div className="space-x-6 uppercase">
        <NavLink
          className="hidden lg:inline-block text-sm tracking-wider font-semibold hover:text-accent"
          activeClassName="text-accent"
          exact
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="hidden lg:inline-block text-sm tracking-wider font-semibold hover:text-accent"
          activeClassName="text-accent"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className="hidden lg:inline-block text-sm tracking-wider font-semibold hover:text-accent"
          activeClassName="text-accent"
          to="/projects"
        >
          Portfolio
        </NavLink>
        <div className="flex items-center gap-6 justify-end mt-0  mb-8 lg:mb-0 lg:mt-8">
          <a
            href="https://github.com/sonhoang95"
            target="_blank"
            rel="noreferrer noopener"
            title="Github"
          >
            <AiOutlineGithub className="w-6 h-6 hover:text-accent transform hover:-translate-y-1 transition-all duration-400" />
          </a>{" "}
          <a
            href="https://twitter.com/web_smasher"
            target="_blank"
            rel="noreferrer noopener"
            title="Twitter"
          >
            <AiOutlineTwitter className="w-6 h-6 hover:text-accent transform hover:-translate-y-1 transition-all duration-400" />
          </a>
          <a
            href="https://codepen.io/sonhoang95"
            target="_blank"
            rel="noreferrer noopener"
            title="Codepen"
          >
            <AiOutlineCodepen className="w-6 h-6 hover:text-accent transform hover:-translate-y-1 transition-all duration-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/son-nguyen-6a0b4b157/"
            target="_blank"
            rel="noreferrer noopener"
            title="LinkedIn"
          >
            <AiFillLinkedin className="w-6 h-6 hover:text-accent transform hover:-translate-y-1 transition-all duration-400" />
          </a>
        </div>
      </div>
    </div>
  )
}
