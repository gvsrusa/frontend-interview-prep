import { useState } from 'react'

interface UseFetchResult<T> {
  data: T | null
  loading: boolean
  error: string | null
}

export function useFetch<T = unknown>(url: string): UseFetchResult<T> {
  // TODO: Track data, loading, and error states
  // TODO: Use useEffect to fetch data when URL changes
  // TODO: Use AbortController to cancel requests on cleanup
  // TODO: Optionally implement a simple cache

  return { data: null, loading: false, error: null }
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
