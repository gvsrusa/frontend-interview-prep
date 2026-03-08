import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useDocumentTitle } from './index'
import DocumentTitleDemo from './index'

describe('useDocumentTitle', () => {
  beforeEach(() => {
    document.title = 'Test'
  })

  it('sets the document title', () => {
    renderHook(() => useDocumentTitle('Hello World'))
    expect(document.title).toBe('Hello World')
  })

  it('updates when title changes', () => {
    const { rerender } = renderHook(({ title }) => useDocumentTitle(title), {
      initialProps: { title: 'Page 1' },
    })
    expect(document.title).toBe('Page 1')
    rerender({ title: 'Page 2' })
    expect(document.title).toBe('Page 2')
  })

  it('handles empty string', () => {
    renderHook(() => useDocumentTitle(''))
    expect(document.title).toBe('')
  })

  it('renders demo component', async () => {
    render(<DocumentTitleDemo />)
    expect(document.title).toBe('Count: 0')
    await userEvent.click(screen.getByText('Increment'))
    expect(document.title).toBe('Count: 1')
  })
})
