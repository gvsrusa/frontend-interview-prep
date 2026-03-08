# Image Carousel

## Description

Build an image carousel (slideshow) with previous/next navigation, pagination dots, and optional auto-play.

## Requirements

- Accept an `images` prop: array of `{ src: string, alt: string }`
- Display one image at a time, starting with the first
- **Previous/Next** buttons to navigate slides
- Wrap around: going past the last image returns to the first, and vice versa
- **Pagination dots**: one dot per image, clicking a dot jumps to that slide
- **Auto-play** (optional): when `autoPlay` is true, advance slides automatically at the given `interval` (default 3000ms)
- Clean up auto-play timer on unmount

## Examples

```jsx
<ImageCarousel
  images={[
    { src: '/cat.jpg', alt: 'Cat' },
    { src: '/dog.jpg', alt: 'Dog' },
    { src: '/bird.jpg', alt: 'Bird' },
  ]}
  autoPlay
  interval={2000}
/>
```
