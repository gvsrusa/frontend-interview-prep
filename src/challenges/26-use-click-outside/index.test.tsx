import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useRef } from 'react'
import { renderHook } from '@testing-library/react'
import { useClickOutside } from './index'
import ClickOutsideDemo from './index'

function TestComponent({ onClickOutside }) {
  const ref = useRef(null)
  useClickOutside(ref, onClickOutside)
  return (
    <div>
      <div ref={ref} data-testid="inside">Inside</div>
      <div data-testid="outside">Outside</div>
    </div>
  )
}

describe('useClickOutside', () => {
  it('calls handler when clicking outside the ref', async () => {
    const handler = vi.fn()
    render(<TestComponent onClickOutside={handler} />)
    await userEvent.click(screen.getByTestId('outside'))
    expect(handler).toHaveBeenCalledTimes(1)
  })

  it('does not call handler when clicking inside the ref', async () => {
    const handler = vi.fn()
    render(<TestComponent onClickOutside={handler} />)
    await userEvent.click(screen.getByTestId('inside'))
    expect(handler).not.toHaveBeenCalled()
  })

  it('cleans up listeners on unmount', () => {
    const handler = vi.fn()
    const removeListenerSpy = vi.spyOn(document, 'removeEventListener')
    const { unmount } = render(<TestComponent onClickOutside={handler} />)
    unmount()
    expect(removeListenerSpy).toHaveBeenCalled()
    removeListenerSpy.mockRestore()
  })

  it('renders demo and closes dropdown on outside click', async () => {
    render(<ClickOutsideDemo />)
    await userEvent.click(screen.getByText('Open Dropdown'))
    expect(screen.getByText('Dropdown content')).toBeInTheDocument()
    await userEvent.click(document.body)
    expect(screen.queryByText('Dropdown content')).not.toBeInTheDocument()
  })
})
