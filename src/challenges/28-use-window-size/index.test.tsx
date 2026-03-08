import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { render, screen } from '@testing-library/react'
import { useWindowSize } from './index'
import WindowSizeDemo from './index'

describe('useWindowSize', () => {
  it('returns current window dimensions', () => {
    const { result } = renderHook(() => useWindowSize())
    expect(result.current.width).toBe(window.innerWidth)
    expect(result.current.height).toBe(window.innerHeight)
  })

  it('updates on window resize', () => {
    const { result } = renderHook(() => useWindowSize())

    act(() => {
      Object.defineProperty(window, 'innerWidth', { value: 500, writable: true })
      Object.defineProperty(window, 'innerHeight', { value: 400, writable: true })
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current.width).toBe(500)
    expect(result.current.height).toBe(400)
  })

  it('cleans up event listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = renderHook(() => useWindowSize())
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('resize', expect.any(Function))
    removeSpy.mockRestore()
  })

  it('returns numbers for both dimensions', () => {
    const { result } = renderHook(() => useWindowSize())
    expect(typeof result.current.width).toBe('number')
    expect(typeof result.current.height).toBe('number')
  })

  it('renders demo component', () => {
    render(<WindowSizeDemo />)
    expect(screen.getByText(/Width:/)).toBeInTheDocument()
    expect(screen.getByText(/Height:/)).toBeInTheDocument()
  })
})
