export default function Breadcrumbs({ items, separator = '/' }) {
  return (
    <nav aria-label="breadcrumb">
      <ol style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, gap: '4px' }}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {index > 0 && <span aria-hidden="true">{separator}</span>}
              {isLast ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <a href={item.href}>{item.label}</a>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
