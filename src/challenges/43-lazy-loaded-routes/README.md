# Lazy Loaded Routes

## Description
Code-split an app using React.lazy and Suspense. Each "route" should be loaded on demand rather than bundled together.

## Requirements
- Create multiple page components (Home, About, Dashboard)
- Use React.lazy to dynamically import each page
- Wrap lazy components in Suspense with a loading fallback
- Implement simple tab-based navigation to switch between pages
- Show a loading indicator while a lazy component loads

## Examples
- Clicking "Dashboard" tab loads the Dashboard component on demand
- A "Loading..." message appears while the component is being fetched
- Switching back to a previously loaded tab is instant (already cached)
