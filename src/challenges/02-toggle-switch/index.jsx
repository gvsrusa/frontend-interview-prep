import { useState } from 'react'

export default function ToggleSwitch({ value, onChange, label = 'Toggle' }) {
  const [internalValue, setInternalValue] = useState(false)

  const isControlled = value !== undefined
  const isOn = isControlled ? value : internalValue

  const handleToggle = () => {
    if (isControlled) {
      onChange?.(!value)
    } else {
      setInternalValue(prev => !prev)
    }
  }

  return (
    <div>
      <span>{label}</span>
      <button
        role="switch"
        aria-checked={isOn}
        onClick={handleToggle}
        style={{
          padding: '8px 16px',
          backgroundColor: isOn ? '#22c55e' : '#e5e7eb',
          color: isOn ? 'white' : '#374151',
          border: 'none',
          borderRadius: '9999px',
          cursor: 'pointer',
        }}
      >
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  )
}
