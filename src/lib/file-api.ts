export async function readFile(path: string): Promise<string> {
  const res = await fetch(`/__api/file?path=${encodeURIComponent(path)}`)
  if (!res.ok) throw new Error(`Failed to read file: ${res.status}`)
  const data = await res.json()
  return data.content
}

export async function writeFile(path: string, content: string): Promise<void> {
  const res = await fetch('/__api/file', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ path, content }),
  })
  if (!res.ok) throw new Error(`Failed to write file: ${res.status}`)
}
