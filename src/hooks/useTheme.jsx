import { useContext, createContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export default function ThemeProviderProvider({ children }) {
  // se o valor for diferente de dark, ele é light, se não o valor é dark
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') !== 'dark' ? 'light' : 'dark',
  )

  useEffect(() => {
    const root = window.document.documentElement

    const removeOldTheme = theme === 'dark' ? 'light' : 'dark'

    root.classList.remove(removeOldTheme)
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
