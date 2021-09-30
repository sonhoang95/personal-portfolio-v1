import React, { useState } from "react"
import Modal from "./Modal"
export default function Form() {
  const [user, setUser] = useState({})
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [validation, setValidation] = useState(false)
  const [isDelay, setIsDelay] = useState(false)

  function handleFormSubmit(e) {
    e.preventDefault()

    if (name && email && message) {
      setValidation(true)
    }

    setTimeout(() => {
      setIsDelay(true)
    }, 800)

    setUser({ name: name, email: email, message: message })

    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-2 p-8 text-left w-full lg:w-2/3 capitalize "
      >
        <label
          htmlFor="name"
          className="text-sm font-light tracking-wider opacity-50"
        >
          full name
        </label>
        <input
          value={name}
          type="text"
          name="name"
          id="name"
          className="outline-none border border-gray-400 focus:border-accent bg-transparent p-2 rounded-lg mb-4 tracking-wide text-sm lg:text-md"
          placeholder="John Doe"
          required
          onChange={e => setName(e.target.value)}
        />

        <label
          htmlFor="email"
          className="text-sm font-light tracking-wider opacity-50"
        >
          email
        </label>
        <input
          value={email}
          type="email"
          name="email"
          id="email"
          className="outline-none border border-gray-400 focus:border-accent bg-transparent p-2 rounded-lg mb-8 tracking-wide text-sm lg:text-md"
          placeholder="johndoe@gmail.com"
          required
          onChange={e => setEmail(e.target.value)}
        />

        <label
          htmlFor="message"
          className="text-sm font-light tracking-wider opacity-50"
        >
          message
        </label>
        <textarea
          value={message}
          type="textarea"
          name="message"
          id="message"
          className="outline-none border border-gray-400 focus:border-accent bg-transparent p-2 rounded-lg mb-8 tracking-wide text-sm lg:text-md"
          placeholder="I'm awesome!"
          maxLength="6000"
          rows="6"
          onChange={e => setMessage(e.target.value)}
          required
        />

        <Modal isDelay={isDelay} validation={validation} user={user} />
      </form>
    </>
  )
}
