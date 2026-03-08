import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ShoppingCart from './index'

describe('ShoppingCart', () => {
  it('renders product list and empty cart', () => {
    render(<ShoppingCart />)
    expect(screen.getByText('React T-Shirt - $25')).toBeInTheDocument()
    expect(screen.getByText('Cart is empty')).toBeInTheDocument()
    expect(screen.getByText('Total: $0')).toBeInTheDocument()
  })

  it('adds a product to the cart', async () => {
    render(<ShoppingCart />)
    const addButtons = screen.getAllByText('Add to Cart')
    await userEvent.click(addButtons[0])
    expect(screen.queryByText('Cart is empty')).not.toBeInTheDocument()
    expect(screen.getByText('Total: $25')).toBeInTheDocument()
  })

  it('increments quantity when adding same product twice', async () => {
    render(<ShoppingCart />)
    const addButtons = screen.getAllByText('Add to Cart')
    await userEvent.click(addButtons[0])
    await userEvent.click(addButtons[0])
    expect(screen.getByText(/× 2/)).toBeInTheDocument()
    expect(screen.getByText('Total: $50')).toBeInTheDocument()
  })

  it('removes an item from the cart', async () => {
    render(<ShoppingCart />)
    const addButtons = screen.getAllByText('Add to Cart')
    await userEvent.click(addButtons[0])
    await userEvent.click(screen.getByText('Remove'))
    expect(screen.getByText('Cart is empty')).toBeInTheDocument()
  })

  it('updates quantity with + and - buttons', async () => {
    render(<ShoppingCart />)
    const addButtons = screen.getAllByText('Add to Cart')
    await userEvent.click(addButtons[1])
    await userEvent.click(screen.getByText('+'))
    expect(screen.getByText(/× 2/)).toBeInTheDocument()
    expect(screen.getByText('Total: $30')).toBeInTheDocument()
  })
})
