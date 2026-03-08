import { mkdirSync, cpSync, readFileSync, writeFileSync, readdirSync } from 'fs'
import { join, resolve } from 'path'

const args = process.argv.slice(2)

function getArg(flag: string, defaultVal: string): string {
  const idx = args.findIndex(a => a.startsWith(`--${flag}=`))
  if (idx !== -1) return args[idx].split('=')[1]
  return defaultVal
}

const title = args.find(a => !a.startsWith('--'))
if (!title) {
  console.error('Usage: npm run new -- "Challenge Title" [--type=react|dsa] [--lang=ts|js] [--category=...] [--difficulty=easy|medium|hard]')
  process.exit(1)
}

const type = getArg('type', 'react') as 'react' | 'dsa'
const lang = getArg('lang', 'ts') as 'ts' | 'js'
const category = getArg('category', type === 'react' ? 'components' : 'strings-arrays')
const difficulty = getArg('difficulty', 'easy') as 'easy' | 'medium' | 'hard'

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '')

const srcDir = resolve(import.meta.dirname, '..', 'src')
const baseDir = type === 'react' ? join(srcDir, 'challenges') : join(srcDir, 'dsa')
const templateDir = join(baseDir, `_template-${lang}`)
const targetDir = join(baseDir, slug)

const existing = readdirSync(baseDir).filter(d => !d.startsWith('_') && !d.startsWith('.'))
const num = String(existing.length + 1).padStart(2, '0')
const numberedSlug = `${num}-${slug}`
const numberedTarget = join(baseDir, numberedSlug)

try {
  mkdirSync(numberedTarget, { recursive: true })
  cpSync(templateDir, numberedTarget, { recursive: true })

  const metaPath = join(numberedTarget, 'meta.json')
  const meta = JSON.parse(readFileSync(metaPath, 'utf-8'))
  meta.title = title
  meta.difficulty = difficulty
  meta.category = category
  meta.language = lang
  meta.type = type
  writeFileSync(metaPath, JSON.stringify(meta, null, 2) + '\n')

  const readmePath = join(numberedTarget, 'README.md')
  let readme = readFileSync(readmePath, 'utf-8')
  readme = readme.replace(/# (Challenge|Problem) Title/, `# ${title}`)
  writeFileSync(readmePath, readme)

  console.log(`\n  Created: src/${type === 'react' ? 'challenges' : 'dsa'}/${numberedSlug}/`)
  console.log(`  Type: ${type} | Language: ${lang} | Difficulty: ${difficulty} | Category: ${category}\n`)
} catch (err) {
  console.error('Error creating challenge:', err)
  process.exit(1)
}
