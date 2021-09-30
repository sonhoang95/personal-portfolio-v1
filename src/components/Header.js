import React, { useState, useRef, useEffect } from "react"
import { links } from "../data"
import { NavLink, Link } from "react-router-dom"
import { HiMenuAlt1, HiX } from "react-icons/hi"
import { FiMoon, FiSun } from "react-icons/fi"
import useDarkMode from "../utilities/useDarkMode"
import avatar from "../images/avatar.jpeg"

export default function Header() {
  const [isDark, setIsDark] = useDarkMode()
  const [isToggled, setIsToggled] = useState(false)

  const mobileMenuRef = useRef()

  useEffect(() => {
    if (isToggled) {
      mobileMenuRef.current.classList.remove("hidden")
    } else {
      mobileMenuRef.current.classList.add("hidden")
    }
  }, [isToggled])

  function handleToggleMobileMenu() {
    setIsToggled(!isToggled)
  }
  return (
    <>
      <header className="container h-32 max-w-screen-lg px-5 mx-auto uppercase overflow-hidden sm:px-12 md:px-20 relative">
        <nav
          className="flex items-center justify-start h-full mt-auto space-x-6 text-sm md:justify-start"
          aria-label="Main Navigation"
        >
          {/* logo */}
          <div className="flex-1 md:flex-none lg:flex-none">
            <Link to="/">
              <img
                src={avatar}
                alt="logo"
                className="w-10 h-10 border-2 rounded-full transform hover:-translate-y-1 transition-transform duration-200 hover:border-accent cursor-pointer"
              />
            </Link>
          </div>

          {/* primary nav */}
          <ul className="items-center flex-grow hidden space-x-6 md:flex">
            {links.map(link => (
              <li key={link.id}>
                <NavLink
                  exact
                  className="tracking-wider font-semibold hover:text-accent"
                  to={link.url}
                  activeClassName="text-accent"
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* toggle theme button */}
          {isDark ? (
            <FiSun
              className="w-5 h-5 text-primary hover:text-accent transform hover:-translate-y-1 cursor-pointer transition-transform duration-200 hidden md:block"
              onClick={() => setIsDark(!isDark)}
            />
          ) : (
            <FiMoon
              className="w-5 h-5 text-primary hover:text-accent transform hover:-translate-y-1 cursor-pointer transition-transform duration-200 hidden md:block"
              onClick={() => setIsDark(!isDark)}
            />
          )}

          {/* mobile button */}

          <button
            onClick={handleToggleMobileMenu}
            className="focus:outline-none"
          >
            <HiMenuAlt1 className="w-6 h-6 text-primary hover:text-accent  cursor-pointer transition-colors duration-200 md:hidden lg:hidden" />
          </button>
        </nav>
      </header>
      {/* mobile menu */}
      <div
        className="fixed h-screen bg-primary w-full z-10 hidden"
        ref={mobileMenuRef}
      >
        <button
          onClick={handleToggleMobileMenu}
          className="md:hidden focus:outline-none"
        >
          <HiX className="w-6 h-6 text-primary hover:text-accent cursor-pointer transition-colors duration-200 md:hidden fixed top-14 right-6" />
        </button>
        <div className="flex flex-col h-screen items-center justify-around ">
          {links.map(link => (
            <li className="list-none" key={link.id}>
              <NavLink
                exact
                activeClassName="text-accent"
                className="block py-2 px-4 hover:text-accent transform hover:-translate-y-1 text-lg transition-transform duration-200 uppercase"
                to={link.url}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
          {isDark ? (
            <FiSun
              className="w-5 h-5 text-primary hover:text-accent transform hover:-translate-y-1 cursor-pointer transition-transform duration-200 "
              onClick={() => setIsDark(!isDark)}
            />
          ) : (
            <FiMoon
              className="w-5 h-5 text-primary hover:text-accent transform hover:-translate-y-1 cursor-pointer transition-transform duration-200 "
              onClick={() => setIsDark(!isDark)}
            />
          )}
        </div>
      </div>
    </>
  )
}
