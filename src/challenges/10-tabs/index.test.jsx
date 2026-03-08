import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Tabs from './index'

const tabs = [
  { label: 'Tab 1', content: 'Content for tab 1' },
  { label: 'Tab 2', content: 'Content for tab 2' },
  { label: 'Tab 3', content: 'Content for tab 3' },
]

describe('Tabs', () => {
  it('renders all tab buttons', () => {
    render(<Tabs tabs={tabs} />)
    expect(screen.getByText('Tab 1')).toBeInTheDocument()
    expect(screen.getByText('Tab 2')).toBeInTheDocument()
    expect(screen.getByText('Tab 3')).toBeInTheDocument()
  })

  it('shows the first tab content by default', () => {
    render(<Tabs tabs={tabs} />)
    expect(screen.getByText('Content for tab 1')).toBeInTheDocument()
  })

  it('switches content when a different tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Tabs tabs={tabs} />)
    await user.click(screen.getByText('Tab 2'))
    expect(screen.getByText('Content for tab 2')).toBeInTheDocument()
    expect(screen.queryByText('Content for tab 1')).not.toBeInTheDocument()
  })

  it('marks the active tab with aria-selected', async () => {
    const user = userEvent.setup()
    render(<Tabs tabs={tabs} />)
    expect(screen.getByText('Tab 1')).toHaveAttribute('aria-selected', 'true')
    await user.click(screen.getByText('Tab 2'))
    expect(screen.getByText('Tab 2')).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('Tab 1')).toHaveAttribute('aria-selected', 'false')
  })

  it('uses proper ARIA roles', () => {
    render(<Tabs tabs={tabs} />)
    expect(screen.getByRole('tablist')).toBeInTheDocument()
    expect(screen.getAllByRole('tab')).toHaveLength(3)
    expect(screen.getByRole('tabpanel')).toBeInTheDocument()
  })
})
