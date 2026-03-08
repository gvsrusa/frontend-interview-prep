import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from './index'

describe('ContactForm', () => {
  it('renders the form fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('shows errors when submitting empty form', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByText(/name is required/i)).toBeInTheDocument()
    expect(screen.getByText(/email is required/i)).toBeInTheDocument()
    expect(screen.getByText(/message is required/i)).toBeInTheDocument()
  })

  it('shows error for invalid email', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByLabelText(/name/i), 'John')
    await user.type(screen.getByLabelText(/email/i), 'invalid-email')
    await user.type(screen.getByLabelText(/message/i), 'Hello, this is a test message!')
    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByText(/email is invalid/i)).toBeInTheDocument()
  })

  it('shows error for short message', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByLabelText(/name/i), 'John')
    await user.type(screen.getByLabelText(/email/i), 'john@test.com')
    await user.type(screen.getByLabelText(/message/i), 'Short')
    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByText(/at least 10 characters/i)).toBeInTheDocument()
  })

  it('shows success message on valid submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByLabelText(/name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/message/i), 'Hello, this is a test message!')
    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByText(/thank you/i)).toBeInTheDocument()
  })
})
