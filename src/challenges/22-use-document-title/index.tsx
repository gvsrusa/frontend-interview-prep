import { useState } from 'react'

export function useDocumentTitle(title) {
  // TODO: Use useEffect to set document.title whenever title changes
  // TODO: Optionally restore the original title on unmount
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
