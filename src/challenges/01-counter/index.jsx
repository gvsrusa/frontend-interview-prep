import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  const handleButtonClick = (button) => {
    if(button === 'increment'){
      setCount(count+1)
    }
    if(button === 'decrement'){
      setCount(count-1)
    }
    if(button === 'reset'){
      setCount(0)
    }
  }
  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() =>handleButtonClick('increment')}>Increment</button>
      <button onClick={() =>handleButtonClick('decrement')}>Decrement</button>
      <button onClick={() =>handleButtonClick('reset')}>Reset</button>
    </div>
  )
}
