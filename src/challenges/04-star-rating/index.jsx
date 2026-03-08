import { useState } from 'react'

export default function StarRating({ maxStars = 5, onChange }) {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const handleClick = (value) => {
    setRating(value)
    onChange?.(value)
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: '4px' }}>
        {Array.from({ length: maxStars }, (_, i) => {
          const starValue = i + 1
          const filled = starValue <= (hover || rating)
          return (
            <button
              key={i}
              aria-label={`${starValue} star${starValue > 1 ? 's' : ''}`}
              onClick={() => handleClick(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '24px',
                color: filled ? '#f59e0b' : '#d1d5db',
              }}
            >
              ★
            </button>
          )
        })}
      </div>
      <p>Rating: {rating} / {maxStars}</p>
    </div>
  )
}
