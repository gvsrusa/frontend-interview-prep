import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ImageCarousel from './index'

const images = [
  { src: '/img1.jpg', alt: 'Image 1' },
  { src: '/img2.jpg', alt: 'Image 2' },
  { src: '/img3.jpg', alt: 'Image 3' },
]

describe('ImageCarousel', () => {
  it('renders the first image by default', () => {
    render(<ImageCarousel images={images} />)
    expect(screen.getByAltText('Image 1')).toBeInTheDocument()
  })

  it('navigates to the next image', async () => {
    const user = userEvent.setup()
    render(<ImageCarousel images={images} />)
    await user.click(screen.getByLabelText('Next slide'))
    expect(screen.getByAltText('Image 2')).toBeInTheDocument()
  })

  it('navigates to the previous image (wraps around)', async () => {
    const user = userEvent.setup()
    render(<ImageCarousel images={images} />)
    await user.click(screen.getByLabelText('Previous slide'))
    expect(screen.getByAltText('Image 3')).toBeInTheDocument()
  })

  it('wraps around from last to first on next', async () => {
    const user = userEvent.setup()
    render(<ImageCarousel images={images} />)
    await user.click(screen.getByLabelText('Next slide'))
    await user.click(screen.getByLabelText('Next slide'))
    await user.click(screen.getByLabelText('Next slide'))
    expect(screen.getByAltText('Image 1')).toBeInTheDocument()
  })

  it('navigates via pagination dots', async () => {
    const user = userEvent.setup()
    render(<ImageCarousel images={images} />)
    await user.click(screen.getByLabelText('Go to slide 3'))
    expect(screen.getByAltText('Image 3')).toBeInTheDocument()
  })

  it('auto-plays through images', () => {
    vi.useFakeTimers()
    render(<ImageCarousel images={images} autoPlay interval={1000} />)
    expect(screen.getByAltText('Image 1')).toBeInTheDocument()
    act(() => { vi.advanceTimersByTime(1000) })
    expect(screen.getByAltText('Image 2')).toBeInTheDocument()
    act(() => { vi.advanceTimersByTime(1000) })
    expect(screen.getByAltText('Image 3')).toBeInTheDocument()
    vi.useRealTimers()
  })
})
