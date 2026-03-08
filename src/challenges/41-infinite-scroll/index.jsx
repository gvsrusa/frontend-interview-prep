import { useState } from "react";
const PAGE_SIZE = 20;
const TOTAL_ITEMS = 100;
function fetchItems(page) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (page - 1) * PAGE_SIZE;
      const data = Array.from({ length: Math.min(PAGE_SIZE, TOTAL_ITEMS - start) }, (_, i) => ({
        id: start + i,
        title: `Post #${start + i + 1}`
      }));
      resolve({ data, hasMore: start + PAGE_SIZE < TOTAL_ITEMS });
    }, 500);
  });
}
export default function InfiniteScroll() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  return <div>
      <h2>Infinite Scroll</h2>
      <div style={{ height: 400, overflowY: "auto", border: "1px solid #ccc" }}>
        {items.map((item) => <div key={item.id} style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
            {item.title}
          </div>)}
        {loading && <p>Loading...</p>}
        {!hasMore && <p>No more items</p>}
        {
    /* TODO: Add a sentinel div here and attach a ref for IntersectionObserver */
  }
      </div>
    </div>;
}
