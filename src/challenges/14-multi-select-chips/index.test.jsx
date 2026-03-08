import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MultiSelectChips from './index'

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
]

describe('MultiSelectChips', () => {
  it('renders selected values as chips', () => {
    render(<MultiSelectChips options={options} value={['react', 'vue']} onChange={() => {}} />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Vue')).toBeInTheDocument()
  })

  it('adds an item when clicked from dropdown', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<MultiSelectChips options={options} value={[]} onChange={onChange} />)
    await user.click(screen.getByPlaceholderText('Search...'))
    await user.click(screen.getByText('Angular'))
    expect(onChange).toHaveBeenCalledWith(['angular'])
  })

  it('removes a chip when × is clicked', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<MultiSelectChips options={options} value={['react', 'vue']} onChange={onChange} />)
    await user.click(screen.getByLabelText('Remove React'))
    expect(onChange).toHaveBeenCalledWith(['vue'])
  })

  it('filters dropdown by search text', async () => {
    const user = userEvent.setup()
    render(<MultiSelectChips options={options} value={[]} onChange={() => {}} />)
    await user.type(screen.getByPlaceholderText('Search...'), 'sv')
    expect(screen.getByText('Svelte')).toBeInTheDocument()
    expect(screen.queryByText('React')).not.toBeInTheDocument()
  })

  it('excludes already-selected items from dropdown', async () => {
    const user = userEvent.setup()
    render(<MultiSelectChips options={options} value={['react']} onChange={() => {}} />)
    await user.click(screen.getByPlaceholderText('Search...'))
    expect(screen.queryByRole('option', { name: 'React' })).not.toBeInTheDocument()
    expect(screen.getByText('Vue')).toBeInTheDocument()
  })
})
