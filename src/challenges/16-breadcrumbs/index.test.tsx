import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Breadcrumbs from './index'

const items = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Laptop', href: '/products/laptop' },
]

describe('Breadcrumbs', () => {
  it('renders all breadcrumb items', () => {
    render(<Breadcrumbs items={items} />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('Laptop')).toBeInTheDocument()
  })

  it('renders non-last items as links', () => {
    render(<Breadcrumbs items={items} />)
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/')
    expect(screen.getByText('Products').closest('a')).toHaveAttribute('href', '/products')
  })

  it('renders the last item as text with aria-current="page"', () => {
    render(<Breadcrumbs items={items} />)
    const last = screen.getByText('Laptop')
    expect(last.closest('a')).toBeNull()
    expect(last).toHaveAttribute('aria-current', 'page')
  })

  it('has an accessible nav landmark', () => {
    render(<Breadcrumbs items={items} />)
    expect(screen.getByLabelText('breadcrumb')).toBeInTheDocument()
  })

  it('supports a custom separator', () => {
    render(<Breadcrumbs items={items} separator=">" />)
    const separators = screen.getAllByText('>')
    expect(separators.length).toBe(2)
  })
})
