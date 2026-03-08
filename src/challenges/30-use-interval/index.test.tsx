import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useInterval } from './index'
import IntervalDemo from './index'

describe('useInterval', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('calls the callback at the specified interval', () => {
    const fn = vi.fn()
    renderHook(() => useInterval(fn, 1000))
    act(() => { vi.advanceTimersByTime(3000) })
    expect(fn).toHaveBeenCalledTimes(3)
  })

  it('does not call the callback when delay is null', () => {
    const fn = vi.fn()
    renderHook(() => useInterval(fn, null))
    act(() => { vi.advanceTimersByTime(3000) })
    expect(fn).not.toHaveBeenCalled()
  })

  it('clears interval on unmount', () => {
    const fn = vi.fn()
    const { unmount } = renderHook(() => useInterval(fn, 100))
    unmount()
    act(() => { vi.advanceTimersByTime(500) })
    expect(fn).not.toHaveBeenCalled()
  })

  it('uses the latest callback', () => {
    const fn1 = vi.fn()
    const fn2 = vi.fn()
    const { rerender } = renderHook(
      ({ cb }) => useInterval(cb, 1000),
      { initialProps: { cb: fn1 } }
    )
    rerender({ cb: fn2 })
    act(() => { vi.advanceTimersByTime(1000) })
    expect(fn1).not.toHaveBeenCalled()
    expect(fn2).toHaveBeenCalledTimes(1)
  })

  it('renders demo and increments count', () => {
    render(<IntervalDemo />)
    expect(screen.getByText('Count: 0')).toBeInTheDocument()
    act(() => { vi.advanceTimersByTime(3000) })
    expect(screen.getByText('Count: 3')).toBeInTheDocument()
  })
})
