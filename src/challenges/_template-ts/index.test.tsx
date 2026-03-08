import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Challenge from './index'

describe('Challenge', () => {
  it('renders without crashing', () => {
    render(<Challenge />)
    expect(screen.getByText(/challenge/i)).toBeInTheDocument()
  })
})
