import React from "react"

export default function Header() {
  return (
    <>
      <h1 className="text-lg lg:text-2xl font-bold tracking-widest border-b-4 text-gray-600 border-gray-300 dark:border-gray-400 dark:text-gray-200 uppercase ">
        {`<Get in touch 👋🏼 />`}
      </h1>
      <p className="opacity-80">
        Feel free to email me about anything. Do you have some feedback or
        suggestions? You can also reach me around the web @{" "}
        <a
          className="text-accent hover:underline"
          href="https://github.com/sonhoang95"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        ,{" "}
        <a
          className="text-accent hover:underline"
          href="https://twitter.com/web_smasher"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </p>
    </>
  )
}
