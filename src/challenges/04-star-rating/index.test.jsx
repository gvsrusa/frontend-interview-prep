import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import StarRating from './index'

describe('StarRating', () => {
  it('renders 5 stars by default', () => {
    render(<StarRating />)
    const stars = screen.getAllByRole('button')
    expect(stars).toHaveLength(5)
  })

  it('renders custom number of stars', () => {
    render(<StarRating maxStars={3} />)
    const stars = screen.getAllByRole('button')
    expect(stars).toHaveLength(3)
  })

  it('sets rating on star click', async () => {
    const user = userEvent.setup()
    render(<StarRating />)
    await user.click(screen.getByLabelText('3 stars'))
    expect(screen.getByText('Rating: 3 / 5')).toBeInTheDocument()
  })

  it('calls onChange when rating changes', async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()
    render(<StarRating onChange={handleChange} />)
    await user.click(screen.getByLabelText('4 stars'))
    expect(handleChange).toHaveBeenCalledWith(4)
  })

  it('shows initial rating of 0', () => {
    render(<StarRating />)
    expect(screen.getByText('Rating: 0 / 5')).toBeInTheDocument()
  })
})
