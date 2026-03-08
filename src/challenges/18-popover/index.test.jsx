import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Popover from './index'

describe('Popover', () => {
  it('does not show content initially', () => {
    render(
      <Popover trigger={<button>Open</button>} content={<p>Popover body</p>} />
    )
    expect(screen.queryByText('Popover body')).not.toBeInTheDocument()
  })

  it('shows content on trigger click', async () => {
    const user = userEvent.setup()
    render(
      <Popover trigger={<button>Open</button>} content={<p>Popover body</p>} />
    )
    await user.click(screen.getByText('Open'))
    expect(screen.getByText('Popover body')).toBeInTheDocument()
  })

  it('hides content on second click (toggle)', async () => {
    const user = userEvent.setup()
    render(
      <Popover trigger={<button>Open</button>} content={<p>Popover body</p>} />
    )
    await user.click(screen.getByText('Open'))
    expect(screen.getByText('Popover body')).toBeInTheDocument()
    await user.click(screen.getByText('Open'))
    expect(screen.queryByText('Popover body')).not.toBeInTheDocument()
  })

  it('closes when clicking outside', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <p>Outside</p>
        <Popover trigger={<button>Open</button>} content={<p>Popover body</p>} />
      </div>
    )
    await user.click(screen.getByText('Open'))
    expect(screen.getByText('Popover body')).toBeInTheDocument()
    await user.click(screen.getByText('Outside'))
    expect(screen.queryByText('Popover body')).not.toBeInTheDocument()
  })

  it('renders with dialog role when open', async () => {
    const user = userEvent.setup()
    render(
      <Popover trigger={<button>Open</button>} content={<p>Content</p>} />
    )
    await user.click(screen.getByText('Open'))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })
})
