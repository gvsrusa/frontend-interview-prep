import { useState } from 'react'

export function useMediaQuery(query: string): boolean {
  // TODO: Use window.matchMedia to create a MediaQueryList
  // TODO: Initialize state with the current match result
  // TODO: Listen for changes on the MediaQueryList
  // TODO: Clean up the listener on unmount

  return false
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
