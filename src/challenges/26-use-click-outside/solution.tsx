import { useRef, useState, useEffect } from 'react'

export function useClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
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
