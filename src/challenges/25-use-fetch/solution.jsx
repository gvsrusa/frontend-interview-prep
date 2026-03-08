import { useState, useEffect, useRef } from "react";
const globalCache = /* @__PURE__ */ new Map();
function useFetch(url) {
  const [data, setData] = useState(
    globalCache.get(url) ?? null
  );
  const [loading, setLoading] = useState(!globalCache.has(url));
  const [error, setError] = useState(null);
  const abortRef = useRef(null);
  useEffect(() => {
    if (globalCache.has(url)) {
      setData(globalCache.get(url));
      setLoading(false);
      setError(null);
      return;
    }
    const controller = new AbortController();
    abortRef.current = controller;
    setLoading(true);
    setError(null);
    fetch(url, { signal: controller.signal }).then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    }).then((json) => {
      globalCache.set(url, json);
      setData(json);
      setLoading(false);
    }).catch((err) => {
      if (err.name !== "AbortError") {
        setError(err.message);
        setLoading(false);
      }
    });
    return () => controller.abort();
  }, [url]);
  return { data, loading, error };
}
export default function FetchDemo() {
  const [userId, setUserId] = useState(1);
  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return <div>
      <h2>useFetch Demo</h2>
      <button onClick={() => setUserId((id) => id + 1)}>Next User</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <p>User: {data.name}</p>}
    </div>;
}
export { useFetch };
