import { useState, useEffect } from 'react'
import { BREAKPOINTS } from '../utils/breakpoints'

export function useBreakpoint() {
  const getBreakpoint = () => {
    if (typeof window === 'undefined') return 'desktop'
    if (window.innerWidth >= BREAKPOINTS.lg) return 'desktop'
    if (window.innerWidth >= BREAKPOINTS.md) return 'tablet'
    return 'mobile'
  }

  const [breakpoint, setBreakpoint] = useState(getBreakpoint)

  useEffect(() => {
    const lgQuery = window.matchMedia(`(min-width: ${BREAKPOINTS.lg}px)`)
    const mdQuery = window.matchMedia(`(min-width: ${BREAKPOINTS.md}px)`)

    const handler = () => setBreakpoint(getBreakpoint())

    lgQuery.addEventListener('change', handler)
    mdQuery.addEventListener('change', handler)

    return () => {
      lgQuery.removeEventListener('change', handler)
      mdQuery.removeEventListener('change', handler)
    }
  }, [])

  return breakpoint
}
