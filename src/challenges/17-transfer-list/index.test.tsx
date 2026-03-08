import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TransferList from './index'

describe('TransferList', () => {
  const leftItems = ['Apple', 'Banana', 'Cherry']
  const rightItems = ['Date', 'Elderberry']

  it('renders left and right lists with items', () => {
    render(<TransferList initialLeft={leftItems} initialRight={rightItems} />)
    expect(screen.getByText('Apple')).toBeInTheDocument()
    expect(screen.getByText('Date')).toBeInTheDocument()
  })

  it('renders transfer buttons', () => {
    render(<TransferList initialLeft={leftItems} initialRight={rightItems} />)
    expect(screen.getByLabelText('Move selected right')).toBeInTheDocument()
    expect(screen.getByLabelText('Move selected left')).toBeInTheDocument()
  })

  it('moves checked items from left to right', async () => {
    const user = userEvent.setup()
    render(<TransferList initialLeft={leftItems} initialRight={rightItems} />)
    await user.click(screen.getByLabelText('Apple'))
    await user.click(screen.getByLabelText('Move selected right'))
    const rightSection = screen.getByText('Right').closest('div')
    expect(rightSection).toHaveTextContent('Apple')
  })

  it('moves checked items from right to left', async () => {
    const user = userEvent.setup()
    render(<TransferList initialLeft={leftItems} initialRight={rightItems} />)
    await user.click(screen.getByLabelText('Date'))
    await user.click(screen.getByLabelText('Move selected left'))
    const leftSection = screen.getByText('Left').closest('div')
    expect(leftSection).toHaveTextContent('Date')
  })

  it('disables move right when no left items are checked', () => {
    render(<TransferList initialLeft={leftItems} initialRight={rightItems} />)
    expect(screen.getByLabelText('Move selected right')).toBeDisabled()
  })
})
