import { useState } from 'react'

export function useKeyPress(targetKey: string): boolean {
  // TODO: Track whether the target key is currently pressed
  // TODO: Add keydown and keyup event listeners on the window
  // TODO: Update state when the target key is pressed/released
  // TODO: Clean up listeners on unmount

  return false
}

export default function KeyPressDemo() {
  const isEnterPressed = useKeyPress('Enter')
  const isEscapePressed = useKeyPress('Escape')

  return (
    <div>
      <h2>useKeyPress Demo</h2>
      <p>Press Enter or Escape</p>
      <p>Enter: {isEnterPressed ? 'Pressed' : 'Released'}</p>
      <p>Escape: {isEscapePressed ? 'Pressed' : 'Released'}</p>
    </div>
  )
}
