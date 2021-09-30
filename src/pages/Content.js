import React from "react"
import { SiTailwindcss } from "react-icons/si"
import { FaReact } from "react-icons/fa"

export default function Content() {
  return (
    <>
      <div>
        <div className="space-y-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-accent mb-8">
            A Purpose
          </h2>
          <p className="text-sm">
            I made this website because I want to not only solidify my{" "}
            <span className="font-bold text-primary">
              web development skills with
              <span className="px-2">
                <FaReact className="inline text-blue-500 dark:text-blue-400 w-6 h-6" />
              </span>
              but also testing myself using
              <span className="px-2">
                <SiTailwindcss className="inline text-teal-400 w-6 h-6" />
              </span>
            </span>
          </p>
          <p className="text-sm">
            I really got to apply everything I have learned in this website,
            from planning, designing, developing, launching to maintaining. My
            goal with this site (and journal) is to continue learning web
            development and learn publicity. For sure, there are other things
            that I have yet to encounter, but I’m ready{" "}
            <strong className="text-teal-500 italic">
              to learn, continue to challenge myself, and do interesting things
              that matter.
            </strong>{" "}
          </p>
          <p className="text-sm">
            This also serves a motivation for me to continue making projects
            because now I finally have a place to showcase them and share my
            learning process with everyone.
          </p>
        </div>
      </div>
      <div>
        <div className="space-y-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-accent mb-8">
            What Else?
          </h2>

          <p className="text-sm">
            When I’m not programming , I endlessly browse{" "}
            <a
              className="text-blue-500 hover:underline hover:text-blue-400"
              href="https://twitter.com/web_smasher"
              target="_blank"
              rel="noreferrer noopener"
            >
              Twitter
            </a>
            . I love having conversations with other developers, because it's
            very{" "}
            <code className="mono bg-secondary rounded p-1 text-red-600 text-sm">
              !important
            </code>{" "}
            to stay up to date with all of the technologies. It is also a way
            for me to share my knowledge to the world! I also love{" "}
            <code className="mono bg-secondary rounded p-1 text-red-600 text-sm">
              [watching movies, listening to music, reading, working out]
            </code>
          </p>
        </div>
      </div>
    </>
  )
}
