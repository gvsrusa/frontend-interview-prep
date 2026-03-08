import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContextReducerDemo, { ThemeProvider, AuthProvider, useTheme, useAuth } from './index'

describe('Context + useReducer', () => {
  it('renders demo with theme and auth controls', () => {
    render(<ContextReducerDemo />)
    expect(screen.getByText(/Theme:/)).toBeInTheDocument()
    expect(screen.getByText('Login as Alice')).toBeInTheDocument()
  })

  it('toggles theme between light and dark', async () => {
    render(<ContextReducerDemo />)
    const themeBtn = screen.getByText(/Theme:/)
    expect(themeBtn).toHaveTextContent('Theme: light')
    await userEvent.click(themeBtn)
    expect(themeBtn).toHaveTextContent('Theme: dark')
    await userEvent.click(themeBtn)
    expect(themeBtn).toHaveTextContent('Theme: light')
  })

  it('logs in and shows user name', async () => {
    render(<ContextReducerDemo />)
    await userEvent.click(screen.getByText('Login as Alice'))
    expect(screen.getByText('Logged in as: Alice')).toBeInTheDocument()
    expect(screen.getByText('Logout')).toBeInTheDocument()
  })

  it('logs out after login', async () => {
    render(<ContextReducerDemo />)
    await userEvent.click(screen.getByText('Login as Alice'))
    await userEvent.click(screen.getByText('Logout'))
    expect(screen.getByText('Login as Alice')).toBeInTheDocument()
  })

  it('throws when useTheme is used outside provider', () => {
    function BadComponent() {
      useTheme()
      return null
    }
    expect(() => render(<BadComponent />)).toThrow(
      'useTheme must be used within ThemeProvider'
    )
  })
})
