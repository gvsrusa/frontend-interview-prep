import { useState, useEffect, useRef } from 'react'

interface UseFetchResult<T> {
  data: T | null
  loading: boolean
  error: string | null
}

const globalCache = new Map<string, unknown>()

export function useFetch<T = unknown>(url: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(
    (globalCache.get(url) as T) ?? null
  )
  const [loading, setLoading] = useState(!globalCache.has(url))
  const [error, setError] = useState<string | null>(null)
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    if (globalCache.has(url)) {
      setData(globalCache.get(url) as T)
      setLoading(false)
      setError(null)
      return
    }

    const controller = new AbortController()
    abortRef.current = controller

    setLoading(true)
    setError(null)

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((json: T) => {
        globalCache.set(url, json)
        setData(json)
        setLoading(false)
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err.message)
          setLoading(false)
        }
      })

    return () => controller.abort()
  }, [url])

  return { data, loading, error }
}

export default function FetchDemo() {
  const [userId, setUserId] = useState(1)
  const { data, loading, error } = useFetch<{ name: string }>(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  )

  return (
    <div>
      <h2>useFetch Demo</h2>
      <button onClick={() => setUserId((id) => id + 1)}>Next User</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <p>User: {data.name}</p>}
    </div>
  )
}
