import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ToggleSwitch from './index'

describe('ToggleSwitch', () => {
  it('renders in OFF state by default (uncontrolled)', () => {
    render(<ToggleSwitch />)
    const toggle = screen.getByRole('switch')
    expect(toggle).toHaveAttribute('aria-checked', 'false')
    expect(toggle).toHaveTextContent('OFF')
  })

  it('toggles on click in uncontrolled mode', async () => {
    const user = userEvent.setup()
    render(<ToggleSwitch />)
    const toggle = screen.getByRole('switch')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-checked', 'true')
    expect(toggle).toHaveTextContent('ON')
  })

  it('renders the custom label', () => {
    render(<ToggleSwitch label="Dark Mode" />)
    expect(screen.getByText('Dark Mode')).toBeInTheDocument()
  })

  it('works in controlled mode with value and onChange', async () => {
    const handleChange = vi.fn()
    const { rerender } = render(<ToggleSwitch value={false} onChange={handleChange} />)
    const toggle = screen.getByRole('switch')
    expect(toggle).toHaveAttribute('aria-checked', 'false')

    await userEvent.setup().click(toggle)
    expect(handleChange).toHaveBeenCalledWith(true)

    rerender(<ToggleSwitch value={true} onChange={handleChange} />)
    expect(toggle).toHaveAttribute('aria-checked', 'true')
  })

  it('toggles back to OFF on second click (uncontrolled)', async () => {
    const user = userEvent.setup()
    render(<ToggleSwitch />)
    const toggle = screen.getByRole('switch')
    await user.click(toggle)
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-checked', 'false')
    expect(toggle).toHaveTextContent('OFF')
  })
})
