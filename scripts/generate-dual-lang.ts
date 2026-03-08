import { readdirSync, readFileSync, writeFileSync, existsSync, unlinkSync } from 'fs'
import { join, resolve } from 'path'
import { transformSync } from 'esbuild'

const srcDir = resolve(import.meta.dirname, '..', 'src')
const challengesDir = join(srcDir, 'challenges')
const dsaDir = join(srcDir, 'dsa')

function tsToJs(tsCode: string, isJsx: boolean): string {
  const result = transformSync(tsCode, {
    loader: isJsx ? 'tsx' : 'ts',
    jsx: isJsx ? 'preserve' : undefined,
    target: 'esnext',
    format: 'esm',
  })
  return result.code
}

function processChallenge(dir: string, folderName: string, isReact: boolean) {
  const folder = join(dir, folderName)
  if (folderName.startsWith('_template')) return

  const metaPath = join(folder, 'meta.json')
  if (!existsSync(metaPath)) return

  const meta = JSON.parse(readFileSync(metaPath, 'utf-8'))
  const currentLang = meta.language as 'ts' | 'js'

  const tsExt = isReact ? 'tsx' : 'ts'
  const jsExt = isReact ? 'jsx' : 'js'

  const files = ['index', 'solution', 'index.test']

  if (currentLang === 'ts') {
    for (const base of files) {
      const tsFile = join(folder, `${base}.${tsExt}`)
      const jsFile = join(folder, `${base}.${jsExt}`)
      if (existsSync(tsFile)) {
        // Remove old JS file if it exists (from previous faulty generation)
        if (existsSync(jsFile)) unlinkSync(jsFile)
        const tsContent = readFileSync(tsFile, 'utf-8')
        try {
          const jsContent = tsToJs(tsContent, isReact)
          writeFileSync(jsFile, jsContent, 'utf-8')
        } catch (err) {
          console.error(`  Error converting ${tsFile}: ${err}`)
        }
      }
    }
  } else {
    // JS -> TS: just copy the JS content into a TS file (valid JS is valid TS)
    for (const base of files) {
      const jsFile = join(folder, `${base}.${jsExt}`)
      const tsFile = join(folder, `${base}.${tsExt}`)
      if (existsSync(jsFile)) {
        if (existsSync(tsFile)) unlinkSync(tsFile)
        const jsContent = readFileSync(jsFile, 'utf-8')
        writeFileSync(tsFile, jsContent, 'utf-8')
      }
    }
  }

  meta.languages = ['ts', 'js']
  writeFileSync(metaPath, JSON.stringify(meta, null, 2) + '\n', 'utf-8')
}

const challengeFolders = readdirSync(challengesDir).filter(f => !f.startsWith('.'))
const dsaFolders = readdirSync(dsaDir).filter(f => !f.startsWith('.'))

let count = 0
let errors = 0

for (const folder of challengeFolders) {
  try {
    processChallenge(challengesDir, folder, true)
    count++
  } catch (err) {
    console.error(`Error processing challenges/${folder}: ${err}`)
    errors++
  }
}

for (const folder of dsaFolders) {
  try {
    processChallenge(dsaDir, folder, false)
    count++
  } catch (err) {
    console.error(`Error processing dsa/${folder}: ${err}`)
    errors++
  }
}

console.log(`\nProcessed ${count} folders. ${errors} errors.`)
