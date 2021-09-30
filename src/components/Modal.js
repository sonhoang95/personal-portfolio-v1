import React from "react"
import Popup from "reactjs-popup"
import { FaTimes } from "react-icons/fa"

export default function Modal({ isDelay, validation, user }) {
  return (
    <div>
      <Popup
        trigger={
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-blue-500 hover:to-teal-500 transition-all duration-500 py-2 rounded-lg capitalize text-lg lg:text-xl font-semibold tracking-wide text-gray-100 dark:text-gray-900 mb-12 lg:mb-20 w-full"
          >
            say hello
          </button>
        }
        modal
      >
        {isDelay &&
          (close => (
            <div className="modal w-11/12 lg:w-full bg-primary text-primary  mx-auto h-68 lg:h-80 bg-white p-8 lg:p-16 rounded-xl relative shadow-xl">
              <button className="close" onClick={close}>
                <FaTimes className="absolute top-5 right-5 w-6 h-6 hover:text-accent transition duration-400" />
              </button>
              <div className="text-lg lg:text-xl text-gray-700 dark:text-gray-200 font-bold tracking-widest text-center space-y-2 mb-6 capitalize">
                <p>
                  Hey{" "}
                  <span className="text-accent font-black italic">
                    {user.name}
                  </span>{" "}
                  , You're{" "}
                  <span className=" text-accent font-black italic border-b-4">
                    awesome!
                  </span>
                </p>
              </div>
              <div className="text-sm font-light tracking-widest leading-relaxed space-y-2 text-center relative">
                <span className="absolute text-red-500 text-5xl italic top-0 left-0 transform -translate-x-2 -translate-y-4 lg:translate-x-2">
                  "
                </span>
                <p>Thank you so much for checking out my portfolio</p>
                <p>and leaving me your valuable feedback and suggestion!</p>
              </div>

              <p className="pt-8 text-center font-light tracking-widest leading-relaxed text-sm">
                <span className="text-orange-400 font-bold">Cheerio!</span>
              </p>
            </div>
          ))}
      </Popup>
    </div>
  )
}
