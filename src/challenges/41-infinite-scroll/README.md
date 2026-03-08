# Infinite Scroll

## Description
Load paginated data on scroll using the Intersection Observer API. As the user scrolls to the bottom, automatically fetch and append the next page of results.

## Requirements
- Use a mock API function that returns paginated data
- Detect scroll-to-bottom using IntersectionObserver
- Show a loading indicator while fetching
- Stop fetching when all pages are loaded
- Handle errors gracefully

## Examples
- Initial load shows the first 20 items
- Scrolling to the bottom triggers loading the next page
- A spinner appears while the next page loads
- After the last page, no more requests are made
