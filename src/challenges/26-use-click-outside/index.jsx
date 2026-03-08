import { useRef, useState } from 'react'

export function useClickOutside(ref, handler) {
  // TODO: Add a document-level event listener for mousedown/click
  // TODO: Check if the click target is outside the ref element
  // TODO: Call handler when a click outside is detected
  // TODO: Clean up the listener on unmount
}

export default function ClickOutsideDemo() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useClickOutside(dropdownRef, () => setIsOpen(false))

  return (
    <div>
      <h2>useClickOutside Demo</h2>
      <button onClick={() => setIsOpen(true)}>Open Dropdown</button>
      {isOpen && (
        <div ref={dropdownRef} style={{ border: '1px solid #ccc', padding: 16 }}>
          <p>Dropdown content</p>
          <p>Click outside to close</p>
        </div>
      )}
    </div>
  )
}
