import { useState } from 'react'

export function useWindowSize() {
  // TODO: Initialize state with current window dimensions
  // TODO: Add a resize event listener that updates width and height
  // TODO: Clean up the listener on unmount
  // TODO: Return { width, height }

  return { width: 0, height: 0 }
}

export default function WindowSizeDemo() {
  const { width, height } = useWindowSize()

  return (
    <div>
      <h2>useWindowSize Demo</h2>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
      <p>Resize your browser window!</p>
    </div>
  )
}
