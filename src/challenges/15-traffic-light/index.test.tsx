import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import TrafficLight from './index'

describe('TrafficLight', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  const config = { red: 2000, yellow: 500, green: 1500 }

  it('renders the traffic light', () => {
    render(<TrafficLight config={config} />)
    expect(screen.getByLabelText('traffic light')).toBeInTheDocument()
  })

  it('starts with red light active', () => {
    render(<TrafficLight config={config} />)
    expect(screen.getByLabelText(/red light active/)).toBeInTheDocument()
  })

  it('transitions from red to green after red duration', () => {
    render(<TrafficLight config={config} />)
    act(() => { vi.advanceTimersByTime(2000) })
    expect(screen.getByLabelText(/green light active/)).toBeInTheDocument()
  })

  it('transitions from green to yellow after green duration', () => {
    render(<TrafficLight config={config} />)
    act(() => { vi.advanceTimersByTime(2000) }) // red → green
    act(() => { vi.advanceTimersByTime(1500) }) // green → yellow
    expect(screen.getByLabelText(/yellow light active/)).toBeInTheDocument()
  })

  it('completes a full cycle back to red', () => {
    render(<TrafficLight config={config} />)
    act(() => { vi.advanceTimersByTime(2000) }) // red → green
    act(() => { vi.advanceTimersByTime(1500) }) // green → yellow
    act(() => { vi.advanceTimersByTime(500) })  // yellow → red
    expect(screen.getByLabelText(/red light active/)).toBeInTheDocument()
  })
})
