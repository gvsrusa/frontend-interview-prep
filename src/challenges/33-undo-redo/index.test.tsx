import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useUndoRedo } from './index'
import UndoRedoDemo from './index'

describe('useUndoRedo', () => {
  it('initializes with the given state', () => {
    const { result } = renderHook(() => useUndoRedo('hello'))
    expect(result.current.state).toBe('hello')
    expect(result.current.canUndo).toBe(false)
    expect(result.current.canRedo).toBe(false)
  })

  it('sets new state and enables undo', () => {
    const { result } = renderHook(() => useUndoRedo(0))
    act(() => result.current.set(1))
    expect(result.current.state).toBe(1)
    expect(result.current.canUndo).toBe(true)
    expect(result.current.canRedo).toBe(false)
  })

  it('undoes to previous state', () => {
    const { result } = renderHook(() => useUndoRedo('a'))
    act(() => result.current.set('b'))
    act(() => result.current.set('c'))
    act(() => result.current.undo())
    expect(result.current.state).toBe('b')
    expect(result.current.canRedo).toBe(true)
  })

  it('redoes after undo', () => {
    const { result } = renderHook(() => useUndoRedo(0))
    act(() => result.current.set(1))
    act(() => result.current.set(2))
    act(() => result.current.undo())
    act(() => result.current.redo())
    expect(result.current.state).toBe(2)
  })

  it('clears future on new set after undo', () => {
    const { result } = renderHook(() => useUndoRedo(0))
    act(() => result.current.set(1))
    act(() => result.current.set(2))
    act(() => result.current.undo())
    act(() => result.current.set(3))
    expect(result.current.canRedo).toBe(false)
    expect(result.current.state).toBe(3)
  })

  it('renders demo component', async () => {
    render(<UndoRedoDemo />)
    expect(screen.getByText('Current: (empty)')).toBeInTheDocument()
    expect(screen.getByText('Undo')).toBeDisabled()
    expect(screen.getByText('Redo')).toBeDisabled()
  })
})
