import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useDebounce } from './index'
import DebounceDemo from './index'

describe('useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('returns the initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('hello', 500))
    expect(result.current).toBe('hello')
  })

  it('does not update value before delay', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      { initialProps: { value: 'a' } }
    )
    rerender({ value: 'b' })
    act(() => { vi.advanceTimersByTime(300) })
    expect(result.current).toBe('a')
  })

  it('updates value after delay', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      { initialProps: { value: 'a' } }
    )
    rerender({ value: 'b' })
    act(() => { vi.advanceTimersByTime(500) })
    expect(result.current).toBe('b')
  })

  it('resets timer on rapid changes', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      { initialProps: { value: 'a' } }
    )
    rerender({ value: 'b' })
    act(() => { vi.advanceTimersByTime(300) })
    rerender({ value: 'c' })
    act(() => { vi.advanceTimersByTime(300) })
    expect(result.current).toBe('a')
    act(() => { vi.advanceTimersByTime(200) })
    expect(result.current).toBe('c')
  })

  it('renders demo component', async () => {
    vi.useRealTimers()
    render(<DebounceDemo />)
    expect(screen.getByPlaceholderText('Type something...')).toBeInTheDocument()
    expect(screen.getByText(/Debounced:/)).toBeInTheDocument()
  })
})
