import { useEffect, useState } from "react"

export default function usePrefersDarkMode() {
  const [value, setValue] = useState(true)

  useEffect(() => {
    const preferDarkTheme = window.matchMedia("(prefers-color-scheme: dark)")
    setValue(preferDarkTheme.matches)

    const handler = () => setValue(preferDarkTheme.matches)
    preferDarkTheme.addEventListener("change", handler)
    return () => preferDarkTheme.removeEventListener("change", handler)
  }, [])

  return value
}
