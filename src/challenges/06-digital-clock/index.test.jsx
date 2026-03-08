import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DigitalClock from './index'

describe('DigitalClock', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
    vi.setSystemTime(new Date(2025, 0, 1, 14, 30, 45))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('displays the current time', () => {
    render(<DigitalClock />)
    expect(screen.getByText(/14:30:45/)).toBeInTheDocument()
  })

  it('has a button to toggle format', () => {
    render(<DigitalClock />)
    expect(screen.getByRole('button', { name: /switch to 12h/i })).toBeInTheDocument()
  })

  it('switches to 12h format when toggle is clicked', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<DigitalClock />)
    await user.click(screen.getByRole('button', { name: /switch to 12h/i }))
    expect(screen.getByText(/02:30:45 PM/)).toBeInTheDocument()
  })

  it('switches back to 24h format', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<DigitalClock />)
    await user.click(screen.getByRole('button', { name: /switch to 12h/i }))
    await user.click(screen.getByRole('button', { name: /switch to 24h/i }))
    expect(screen.getByText(/14:30:45/)).toBeInTheDocument()
  })

  it('updates every second', () => {
    render(<DigitalClock />)
    expect(screen.getByText(/14:30:45/)).toBeInTheDocument()
    act(() => { vi.advanceTimersByTime(1000) })
    expect(screen.getByText(/14:30:46/)).toBeInTheDocument()
  })
})
