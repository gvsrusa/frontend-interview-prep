import { useState, useEffect, useCallback } from 'react'

export default function ImageCarousel({ images, autoPlay = false, interval = 3000 }) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % images.length)
  }, [images.length])

  const prev = useCallback(() => {
    setCurrent(prev => (prev - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(next, interval)
    return () => clearInterval(timer)
  }, [autoPlay, interval, next])

  return (
    <div style={{ position: 'relative', textAlign: 'center' }}>
      <img
        src={images[current].src}
        alt={images[current].alt}
        style={{ maxWidth: '100%', height: 'auto' }}
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
        <button onClick={prev} aria-label="Previous slide">Previous</button>
        <button onClick={next} aria-label="Next slide">Next</button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '8px' }}>
        {images.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrent(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: index === current ? '#3b82f6' : '#d1d5db',
              cursor: 'pointer',
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  )
}
