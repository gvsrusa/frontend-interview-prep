import { describe, it, expect } from 'vitest'
import { renderHook } from '@testing-library/react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { usePrevious } from './index'
import PreviousDemo from './index'

describe('usePrevious', () => {
  it('returns undefined on initial render', () => {
    const { result } = renderHook(() => usePrevious(0))
    expect(result.current).toBeUndefined()
  })

  it('returns the previous value after update', () => {
    const { result, rerender } = renderHook(({ val }) => usePrevious(val), {
      initialProps: { val: 1 },
    })
    rerender({ val: 2 })
    expect(result.current).toBe(1)
  })

  it('tracks multiple updates', () => {
    const { result, rerender } = renderHook(({ val }) => usePrevious(val), {
      initialProps: { val: 'a' },
    })
    rerender({ val: 'b' })
    expect(result.current).toBe('a')
    rerender({ val: 'c' })
    expect(result.current).toBe('b')
  })

  it('works with objects', () => {
    const obj1 = { x: 1 }
    const obj2 = { x: 2 }
    const { result, rerender } = renderHook(({ val }) => usePrevious(val), {
      initialProps: { val: obj1 },
    })
    rerender({ val: obj2 })
    expect(result.current).toBe(obj1)
  })

  it('renders demo component', async () => {
    render(<PreviousDemo />)
    expect(screen.getByText('Current: 0')).toBeInTheDocument()
    expect(screen.getByText('Previous: N/A')).toBeInTheDocument()
    await userEvent.click(screen.getByText('Increment'))
    expect(screen.getByText('Current: 1')).toBeInTheDocument()
    expect(screen.getByText('Previous: 0')).toBeInTheDocument()
  })
})
