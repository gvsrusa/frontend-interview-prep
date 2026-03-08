import { useState, useEffect, useRef } from 'react'

export function useDocumentTitle(title) {
  const prevTitleRef = useRef(document.title)

  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => {
    const prevTitle = prevTitleRef.current
    return () => {
      document.title = prevTitle
    }
  }, [])
}

export default function DocumentTitleDemo() {
  const [count, setCount] = useState(0)
  useDocumentTitle(`Count: ${count}`)

  return (
    <div>
      <h2>useDocumentTitle Demo</h2>
      <p>Check the browser tab title!</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  )
}
