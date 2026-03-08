import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MultiStepForm from './index'

describe('MultiStepForm', () => {
  it('renders the first step', () => {
    render(<MultiStepForm />)
    expect(screen.getByText('Step 1 of 3')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
  })

  it('shows validation errors on empty fields', async () => {
    render(<MultiStepForm />)
    await userEvent.click(screen.getByText('Next'))
    expect(screen.getByText('Step 1 of 3')).toBeInTheDocument()
  })

  it('navigates to next step with valid input', async () => {
    render(<MultiStepForm />)
    await userEvent.type(screen.getByPlaceholderText('Name'), 'John')
    await userEvent.type(screen.getByPlaceholderText('Email'), 'john@test.com')
    await userEvent.click(screen.getByText('Next'))
    expect(screen.getByText('Step 2 of 3')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Address')).toBeInTheDocument()
  })

  it('navigates back to previous step', async () => {
    render(<MultiStepForm />)
    await userEvent.type(screen.getByPlaceholderText('Name'), 'John')
    await userEvent.type(screen.getByPlaceholderText('Email'), 'john@test.com')
    await userEvent.click(screen.getByText('Next'))
    await userEvent.click(screen.getByText('Back'))
    expect(screen.getByText('Step 1 of 3')).toBeInTheDocument()
  })

  it('shows summary on final step', async () => {
    render(<MultiStepForm />)
    await userEvent.type(screen.getByPlaceholderText('Name'), 'John')
    await userEvent.type(screen.getByPlaceholderText('Email'), 'john@test.com')
    await userEvent.click(screen.getByText('Next'))
    await userEvent.type(screen.getByPlaceholderText('Address'), '123 Main St')
    await userEvent.type(screen.getByPlaceholderText('City'), 'Springfield')
    await userEvent.click(screen.getByText('Next'))
    expect(screen.getByText('Step 3 of 3')).toBeInTheDocument()
    expect(screen.getByText('Name: John')).toBeInTheDocument()
    expect(screen.getByText('Email: john@test.com')).toBeInTheDocument()
    expect(screen.getByText('Submit')).toBeInTheDocument()
  })
})
