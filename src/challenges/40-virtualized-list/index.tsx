import { useState } from 'react';

// TODO: Implement a virtualized list that renders 10,000 items efficiently.
// Only items visible in the viewport (plus a buffer) should be in the DOM.

const TOTAL_ITEMS = 10000;
const ITEM_HEIGHT = 35;
const CONTAINER_HEIGHT = 400;

const allItems = Array.from({ length: TOTAL_ITEMS }, (_, i) => ({
  id: i,
  text: `Item #${i} — ${Math.random().toString(36).substring(2, 8)}`,
}));

export default function VirtualizedList() {
  // TODO: Track scroll position to determine visible items
  // TODO: Calculate start and end indices based on scroll position
  // TODO: Only render the visible slice of items
  // TODO: Use a container with overflow-y: auto and a spacer for total height

  return (
    <div>
      <h2>Virtualized List</h2>
      <p>Render {TOTAL_ITEMS} items efficiently</p>
      {/* TODO: Replace this naive render with a virtualized implementation */}
      <div style={{ height: CONTAINER_HEIGHT, overflowY: 'auto', border: '1px solid #ccc' }}>
        {allItems.map((item) => (
          <div key={item.id} style={{ height: ITEM_HEIGHT, padding: '4px 8px' }}>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
