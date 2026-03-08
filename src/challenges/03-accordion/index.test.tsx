import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Accordion from './index'

const items = [
  { title: 'Section 1', content: 'Content for section 1' },
  { title: 'Section 2', content: 'Content for section 2' },
  { title: 'Section 3', content: 'Content for section 3' },
]

describe('Accordion', () => {
  it('renders all section titles', () => {
    render(<Accordion items={items} />)
    expect(screen.getByText('Section 1')).toBeInTheDocument()
    expect(screen.getByText('Section 2')).toBeInTheDocument()
    expect(screen.getByText('Section 3')).toBeInTheDocument()
  })

  it('starts with all sections collapsed', () => {
    render(<Accordion items={items} />)
    expect(screen.queryByText('Content for section 1')).not.toBeInTheDocument()
    expect(screen.queryByText('Content for section 2')).not.toBeInTheDocument()
  })

  it('expands a section when its title is clicked', async () => {
    const user = userEvent.setup()
    render(<Accordion items={items} />)
    await user.click(screen.getByText('Section 1'))
    expect(screen.getByText('Content for section 1')).toBeInTheDocument()
  })

  it('collapses an open section when clicked again', async () => {
    const user = userEvent.setup()
    render(<Accordion items={items} />)
    await user.click(screen.getByText('Section 1'))
    expect(screen.getByText('Content for section 1')).toBeInTheDocument()
    await user.click(screen.getByText('Section 1'))
    expect(screen.queryByText('Content for section 1')).not.toBeInTheDocument()
  })

  it('only one section is open at a time', async () => {
    const user = userEvent.setup()
    render(<Accordion items={items} />)
    await user.click(screen.getByText('Section 1'))
    expect(screen.getByText('Content for section 1')).toBeInTheDocument()
    await user.click(screen.getByText('Section 2'))
    expect(screen.queryByText('Content for section 1')).not.toBeInTheDocument()
    expect(screen.getByText('Content for section 2')).toBeInTheDocument()
  })
})
