import { useState, useEffect } from 'react'

interface TrafficLightConfig {
  red: number
  yellow: number
  green: number
}

interface TrafficLightProps {
  config?: TrafficLightConfig
}

type LightColor = 'red' | 'yellow' | 'green'

const defaultConfig: TrafficLightConfig = { red: 4000, yellow: 500, green: 3000 }

const transitions: Record<LightColor, LightColor> = {
  red: 'green',
  green: 'yellow',
  yellow: 'red',
}

export default function TrafficLight({ config = defaultConfig }: TrafficLightProps) {
  const [active, setActive] = useState<LightColor>('red')

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(prev => transitions[prev])
    }, config[active])
    return () => clearTimeout(timer)
  }, [active, config])

  const lights: LightColor[] = ['red', 'yellow', 'green']

  return (
    <div
      aria-label="traffic light"
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        gap: '8px',
        padding: '16px',
        backgroundColor: '#1f2937',
        borderRadius: '12px',
      }}
    >
      {lights.map(color => (
        <div
          key={color}
          data-testid={`light-${color}`}
          aria-label={color === active ? `${color} light active` : `${color} light`}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: color === active ? color : '#374151',
            opacity: color === active ? 1 : 0.3,
            transition: 'all 0.3s',
          }}
        />
      ))}
    </div>
  )
}
