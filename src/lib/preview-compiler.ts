import * as React from 'react'

interface CompileResult {
  component: React.ComponentType | null
  error: string | null
}

export async function compileComponent(code: string, ext: string): Promise<CompileResult> {
  try {
    const res = await fetch('/__api/transform', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, ext }),
    })
    const data = await res.json()

    if (data.error) {
      const cleaned = data.error
        .replace(/^<stdin>:\d+:\d+: /gm, '')
        .replace(/\n\n[\s\S]*$/, '')
      return { component: null, error: cleaned }
    }

    const mod: { exports: Record<string, unknown> } = { exports: {} }
    const customRequire = (id: string): unknown => {
      if (id === 'react') return React
      throw new Error(`Module not found: ${id}`)
    }

    const fn = new Function('module', 'exports', 'require', 'React', data.code)
    fn(mod, mod.exports, customRequire, React)

    const exported = mod.exports.default ?? mod.exports
    if (typeof exported === 'function') {
      return { component: exported as React.ComponentType, error: null }
    }

    return { component: null, error: 'No component exported' }
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Compilation failed'
    return { component: null, error: msg }
  }
}
