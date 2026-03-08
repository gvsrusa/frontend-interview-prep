import { useState, useRef, useCallback } from 'react';

const TOTAL_ITEMS = 10000;
const ITEM_HEIGHT = 35;
const CONTAINER_HEIGHT = 400;
const BUFFER = 5;

const allItems = Array.from({ length: TOTAL_ITEMS }, (_, i) => ({
  id: i,
  text: `Item #${i} — ${Math.random().toString(36).substring(2, 8)}`,
}));

export default function VirtualizedList() {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef(null);

  const totalHeight = TOTAL_ITEMS * ITEM_HEIGHT;
  const startIndex = Math.max(0, Math.floor(scrollTop / ITEM_HEIGHT) - BUFFER);
  const visibleCount = Math.ceil(CONTAINER_HEIGHT / ITEM_HEIGHT) + 2 * BUFFER;
  const endIndex = Math.min(TOTAL_ITEMS, startIndex + visibleCount);
  const visibleItems = allItems.slice(startIndex, endIndex);
  const offsetY = startIndex * ITEM_HEIGHT;

  const handleScroll = useCallback((e) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  return (
    <div>
      <h2>Virtualized List</h2>
      <p>Render {TOTAL_ITEMS} items efficiently ({endIndex - startIndex} in DOM)</p>
      <div
        ref={containerRef}
        onScroll={handleScroll}
        style={{ height: CONTAINER_HEIGHT, overflowY: 'auto', border: '1px solid #ccc' }}
      >
        <div style={{ height: totalHeight, position: 'relative' }}>
          <div style={{ position: 'absolute', top: offsetY, left: 0, right: 0 }}>
            {visibleItems.map((item) => (
              <div
                key={item.id}
                style={{
                  height: ITEM_HEIGHT,
                  padding: '4px 8px',
                  boxSizing: 'border-box',
                  borderBottom: '1px solid #eee',
                }}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
