import { useState, useRef, useEffect } from 'react'

interface Option {
  value: string
  label: string
}

interface DropdownSelectProps {
  options: Option[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
}

export default function DropdownSelect({
  options,
  value,
  onChange,
  placeholder = 'Select...',
}: DropdownSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [highlightedIndex, setHighlightedIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const filtered = options.filter(o =>
    o.label.toLowerCase().includes(search.toLowerCase())
  )

  const selected = options.find(o => o.value === value)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue)
    setIsOpen(false)
    setSearch('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setHighlightedIndex(i => Math.min(i + 1, filtered.length - 1))
        break
      case 'ArrowUp':
        e.preventDefault()
        setHighlightedIndex(i => Math.max(i - 1, 0))
        break
      case 'Enter':
        e.preventDefault()
        if (filtered[highlightedIndex]) handleSelect(filtered[highlightedIndex].value)
        break
      case 'Escape':
        setIsOpen(false)
        break
    }
  }

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '250px' }}>
      <button
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => { setIsOpen(!isOpen); setHighlightedIndex(0); setSearch('') }}
        style={{ width: '100%', padding: '8px 12px', textAlign: 'left', cursor: 'pointer' }}
      >
        {selected ? selected.label : placeholder}
      </button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            border: '1px solid #d1d5db',
            borderRadius: '4px',
            backgroundColor: 'white',
            zIndex: 100,
          }}
          onKeyDown={handleKeyDown}
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            value={search}
            onChange={e => { setSearch(e.target.value); setHighlightedIndex(0) }}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box', border: 'none', borderBottom: '1px solid #e5e7eb' }}
          />
          <ul role="listbox" style={{ listStyle: 'none', margin: 0, padding: 0, maxHeight: '200px', overflow: 'auto' }}>
            {filtered.map((option, index) => (
              <li
                key={option.value}
                role="option"
                aria-selected={option.value === value}
                onClick={() => handleSelect(option.value)}
                style={{
                  padding: '8px 12px',
                  cursor: 'pointer',
                  backgroundColor: index === highlightedIndex ? '#eff6ff' : 'transparent',
                }}
              >
                {option.label}
              </li>
            ))}
            {filtered.length === 0 && <li style={{ padding: '8px 12px', color: '#9ca3af' }}>No results</li>}
          </ul>
        </div>
      )}
    </div>
  )
}
