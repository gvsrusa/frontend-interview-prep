import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { resolve, normalize, dirname } from 'path'
import { transformSync } from 'esbuild'

function fileApiPlugin(): Plugin {
  const srcRoot = resolve(__dirname, 'src')

  function validatePath(filePath: string): string | null {
    const abs = resolve(srcRoot, filePath)
    const norm = normalize(abs)
    if (!norm.startsWith(srcRoot)) return null
    if (!norm.includes('/challenges/') && !norm.includes('/dsa/')) return null
    if (norm.includes('..')) return null
    return norm
  }

  return {
    name: 'file-api',
    configureServer(server) {
      server.middlewares.use('/__api/transform', (req, res) => {
        if (req.method !== 'POST') { res.writeHead(405); res.end('Method not allowed'); return }
        let body = ''
        req.on('data', (chunk: Buffer) => { body += chunk.toString() })
        req.on('end', () => {
          try {
            const { code, ext } = JSON.parse(body)
            if (!code || !ext) { res.writeHead(400); res.end('Missing code or ext'); return }
            const result = transformSync(code, {
              loader: ext as 'tsx' | 'jsx' | 'ts' | 'js',
              format: 'cjs',
              jsx: 'transform',
              target: 'esnext',
            })
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ code: result.code }))
          } catch (e: unknown) {
            const msg = e instanceof Error ? e.message : 'Transform failed'
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: msg }))
          }
        })
      })

      server.middlewares.use('/__api/file', (req, res) => {
        if (req.method === 'GET') {
          const url = new URL(req.url!, `http://${req.headers.host}`)
          const p = url.searchParams.get('path')
          if (!p) { res.writeHead(400); res.end('Missing path'); return }
          const abs = validatePath(p)
          if (!abs) { res.writeHead(403); res.end('Forbidden path'); return }
          try {
            const content = readFileSync(abs, 'utf-8')
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ content }))
          } catch {
            res.writeHead(404); res.end('File not found')
          }
        } else if (req.method === 'POST') {
          let body = ''
          req.on('data', (chunk: Buffer) => { body += chunk.toString() })
          req.on('end', () => {
            try {
              const { path: p, content } = JSON.parse(body)
              if (!p || typeof content !== 'string') { res.writeHead(400); res.end('Invalid body'); return }
                    const abs = validatePath(p)
                    if (!abs) { res.writeHead(403); res.end('Forbidden path'); return }
                    mkdirSync(dirname(abs), { recursive: true })
                    writeFileSync(abs, content, 'utf-8')
              res.writeHead(200, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ ok: true }))
            } catch {
              res.writeHead(500); res.end('Write error')
            }
          })
        } else {
          res.writeHead(405); res.end('Method not allowed')
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), fileApiPlugin()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
