import { useState } from 'react'

export function useToggle(initialValue: boolean = false): [boolean, () => void] {
  // TODO: Initialize state with the provided initial value
  const [value] = useState(initialValue)

  // TODO: Create a toggle function that flips the boolean value
  const toggle = () => {}

  return [value, toggle]
}

export default function ToggleDemo() {
  const [isOn, toggle] = useToggle()

  return (
    <div>
      <h2>useToggle Demo</h2>
      {/* TODO: Display the toggle state and wire up the button */}
      <p>State: {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}
