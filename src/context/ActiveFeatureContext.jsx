import { createContext, useState } from 'react'

export const ActiveFeatureContext = createContext(null)

export function ActiveFeatureProvider({ children }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <ActiveFeatureContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </ActiveFeatureContext.Provider>
  )
}
