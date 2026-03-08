import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useLocalStorage } from './index'
import LocalStorageDemo from './index'

describe('useLocalStorage', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('returns initial value when localStorage is empty', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'hello'))
    expect(result.current[0]).toBe('hello')
  })

  it('updates the stored value', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', ''))
    act(() => result.current[1]('world'))
    expect(result.current[0]).toBe('world')
  })

  it('reads existing value from localStorage', () => {
    window.localStorage.setItem('test-key', JSON.stringify('saved'))
    const { result } = renderHook(() => useLocalStorage('test-key', 'default'))
    expect(result.current[0]).toBe('saved')
  })

  it('handles objects', () => {
    const { result } = renderHook(() => useLocalStorage('obj-key', { a: 1 }))
    act(() => result.current[1]({ a: 2, b: 3 }))
    expect(result.current[0]).toEqual({ a: 2, b: 3 })
  })

  it('renders demo component', async () => {
    render(<LocalStorageDemo />)
    const input = screen.getByPlaceholderText('Enter your name')
    await userEvent.type(input, 'Alice')
    expect(screen.getByText('Stored name: Alice')).toBeInTheDocument()
  })
})
