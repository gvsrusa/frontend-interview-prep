import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { render, screen } from '@testing-library/react'
import { useThrottle } from './index'
import ThrottleDemo from './index'

describe('useThrottle', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('calls the callback immediately on first invocation', () => {
    const fn = vi.fn()
    const { result } = renderHook(() => useThrottle(fn, 1000))
    act(() => result.current())
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('throttles subsequent calls within the delay', () => {
    const fn = vi.fn()
    const { result } = renderHook(() => useThrottle(fn, 1000))
    act(() => result.current())
    act(() => result.current())
    act(() => result.current())
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('allows another call after the delay period', () => {
    const fn = vi.fn()
    const { result } = renderHook(() => useThrottle(fn, 1000))
    act(() => result.current())
    act(() => { vi.advanceTimersByTime(1000) })
    act(() => result.current())
    expect(fn).toHaveBeenCalledTimes(2)
  })

  it('fires a trailing call', () => {
    const fn = vi.fn()
    const { result } = renderHook(() => useThrottle(fn, 1000))
    act(() => result.current())
    act(() => result.current())
    act(() => { vi.advanceTimersByTime(1000) })
    expect(fn).toHaveBeenCalledTimes(2)
  })

  it('renders demo component', () => {
    vi.useRealTimers()
    render(<ThrottleDemo />)
    expect(screen.getByText('Click Fast!')).toBeInTheDocument()
    expect(screen.getByText(/Throttled clicks:/)).toBeInTheDocument()
  })
})
