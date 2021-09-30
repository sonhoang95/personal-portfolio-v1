import React from "react"
import { FaReact, FaCss3Alt, FaStripe } from "react-icons/fa"
import pluralgroceries from "../images/plural-demo.png"

export default function PluralGroceries() {
  return (
    <div className="space-y-10">
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
            {`<Plural`}
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
            {`Groceries />`}
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
            href="https://youtu.be/0gdPnJzWARY"
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
            href="https://plural-groceries.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            live site
          </a>
          <a
            className="
          text-sm lg:text-base
              inline-block
     mb-8 lg:mb-8
        
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
            href="https://github.com/sonhoang95/plural-groceries"
            target="_blank"
            rel="noopener noreferrer"
          >
            source code
          </a>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <p className="border-b-2 border-accent">technologies:</p>
          <FaReact className="w-10 h-10 text-sky-600 dark:text-sky-400" />
          <FaCss3Alt className="w-10 h-10 text-blue-700 dark:text-blue-600" />
          <FaStripe className="w-12 h-12 text-indigo-700 dark:text-indigo-400" />
        </div>
      </div>
      <div className="relative space-y-4 lg:space-y-0">
        <p
          className="   lg:absolute
                lg:top-0
                lg:right-0
                lg:transform
                lg:translate-x-4
                lg:-translate-y-4
                bg-pink-100
                text-left
                py-4
                px-8
               
                rounded
                shadow-lg
                text-pink-900
                border-t-4 border-pink-500"
        >
          PluralGroceries is an online supermarket that allows users to browse,
          add items to cart and checkout with Stripe.
        </p>
        <img
          className="rounded-lg shadow-2xl border-4 border-green-600"
          src={pluralgroceries}
          alt="pluralgroceries-demo"
        />
      </div>
    </div>
  )
}
