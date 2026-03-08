import { useState, useRef, useEffect } from 'react'

export default function MultiSelectChips({ options, value = [], onChange }) {
  const [search, setSearch] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const available = options.filter(
    o => !value.includes(o.value) && o.label.toLowerCase().includes(search.toLowerCase())
  )

  const addItem = (val) => {
    onChange?.([...value, val])
    setSearch('')
  }

  const removeItem = (val) => {
    onChange?.(value.filter(v => v !== val))
  }

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '300px' }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '4px',
          padding: '4px',
          border: '1px solid #d1d5db',
          borderRadius: '4px',
          minHeight: '40px',
          alignItems: 'center',
        }}
      >
        {value.map(v => {
          const opt = options.find(o => o.value === v)
          return (
            <span
              key={v}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '2px 8px',
                backgroundColor: '#dbeafe',
                borderRadius: '9999px',
                fontSize: '14px',
              }}
            >
              {opt?.label}
              <button
                aria-label={`Remove ${opt?.label}`}
                onClick={() => removeItem(v)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontSize: '14px' }}
              >
                ×
              </button>
            </span>
          )
        })}
        <input
          placeholder="Search..."
          value={search}
          onChange={e => { setSearch(e.target.value); setIsOpen(true) }}
          onFocus={() => setIsOpen(true)}
          style={{ border: 'none', outline: 'none', flex: 1, minWidth: '60px', padding: '4px' }}
        />
      </div>

      {isOpen && available.length > 0 && (
        <ul
          role="listbox"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            border: '1px solid #d1d5db',
            borderRadius: '4px',
            backgroundColor: 'white',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            maxHeight: '200px',
            overflow: 'auto',
            zIndex: 100,
          }}
        >
          {available.map(option => (
            <li
              key={option.value}
              role="option"
              aria-selected={false}
              onClick={() => addItem(option.value)}
              style={{ padding: '8px 12px', cursor: 'pointer' }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
