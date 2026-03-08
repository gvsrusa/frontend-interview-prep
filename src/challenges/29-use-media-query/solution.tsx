import { useState, useEffect } from 'react'

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const mql = window.matchMedia(query)
    setMatches(mql.matches)

    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    mql.addEventListener('change', handler)

    return () => mql.removeEventListener('change', handler)
  }, [query])

  return matches
}

export default function MediaQueryDemo() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')

  return (
    <div>
      <h2>useMediaQuery Demo</h2>
      <p>Mobile viewport: {isMobile ? 'Yes' : 'No'}</p>
      <p>Prefers dark mode: {prefersDark ? 'Yes' : 'No'}</p>
    </div>
  )
}
