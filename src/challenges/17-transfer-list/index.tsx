import { useState } from 'react'

interface TransferListProps {
  initialLeft: string[]
  initialRight: string[]
}

export default function TransferList({ initialLeft, initialRight }: TransferListProps) {
  const [left, setLeft] = useState(initialLeft)
  const [right, setRight] = useState(initialRight)
  const [checked, setChecked] = useState<Set<string>>(new Set())

  const toggleCheck = (item: string) => {
    setChecked(prev => {
      const next = new Set(prev)
      if (next.has(item)) next.delete(item)
      else next.add(item)
      return next
    })
  }

  const moveRight = () => {
    const toMove = left.filter(item => checked.has(item))
    setLeft(left.filter(item => !checked.has(item)))
    setRight([...right, ...toMove])
    setChecked(prev => {
      const next = new Set(prev)
      toMove.forEach(item => next.delete(item))
      return next
    })
  }

  const moveLeft = () => {
    const toMove = right.filter(item => checked.has(item))
    setRight(right.filter(item => !checked.has(item)))
    setLeft([...left, ...toMove])
    setChecked(prev => {
      const next = new Set(prev)
      toMove.forEach(item => next.delete(item))
      return next
    })
  }

  const leftCheckedCount = left.filter(i => checked.has(i)).length
  const rightCheckedCount = right.filter(i => checked.has(i)).length

  const renderList = (items: string[], label: string) => (
    <div style={{ border: '1px solid #d1d5db', borderRadius: '4px', padding: '8px', minWidth: '150px' }}>
      <h3>{label}</h3>
      {items.map(item => (
        <label key={item} style={{ display: 'block', padding: '4px 0' }}>
          <input
            type="checkbox"
            checked={checked.has(item)}
            onChange={() => toggleCheck(item)}
          />
          {' '}{item}
        </label>
      ))}
      {items.length === 0 && <p>Empty</p>}
    </div>
  )

  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      {renderList(left, 'Left')}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <button onClick={moveRight} disabled={leftCheckedCount === 0} aria-label="Move selected right">
          →
        </button>
        <button onClick={moveLeft} disabled={rightCheckedCount === 0} aria-label="Move selected left">
          ←
        </button>
      </div>

      {renderList(right, 'Right')}
    </div>
  )
}
