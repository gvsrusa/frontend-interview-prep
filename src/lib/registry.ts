export interface ChallengeMeta {
  type: 'react' | 'dsa'
  title: string
  difficulty: 'easy' | 'medium' | 'hard'
  category: string
  language?: 'ts' | 'js'
  languages: ('ts' | 'js')[]
  hints?: string[]
  timeLimit?: number
}

export interface ChallengeEntry {
  slug: string
  meta: ChallengeMeta
  components?: {
    ts?: () => Promise<{ default: React.ComponentType }>
    js?: () => Promise<{ default: React.ComponentType }>
  }
  solutions?: {
    ts?: () => Promise<{ default: React.ComponentType }>
    js?: () => Promise<{ default: React.ComponentType }>
  }
}

const reactMeta = import.meta.glob<ChallengeMeta>(
  '../challenges/*/meta.json',
  { eager: true, import: 'default' }
)

const dsaMeta = import.meta.glob<ChallengeMeta>(
  '../dsa/*/meta.json',
  { eager: true, import: 'default' }
)

const reactTsxComponents = import.meta.glob<{ default: React.ComponentType }>(
  '../challenges/*/index.tsx'
)
const reactJsxComponents = import.meta.glob<{ default: React.ComponentType }>(
  '../challenges/*/index.jsx'
)

const reactTsxSolutions = import.meta.glob<{ default: React.ComponentType }>(
  '../challenges/*/solution.tsx'
)
const reactJsxSolutions = import.meta.glob<{ default: React.ComponentType }>(
  '../challenges/*/solution.jsx'
)

function extractSlug(path: string): string {
  const parts = path.split('/')
  return parts[parts.length - 2]
}

function findBySlug<T>(globs: Record<string, T>, slug: string): T | undefined {
  const key = Object.keys(globs).find(k => k.includes(`/${slug}/`))
  return key ? globs[key] : undefined
}

export function getReactChallenges(): ChallengeEntry[] {
  return Object.entries(reactMeta)
    .filter(([path]) => !path.includes('_template'))
    .map(([path, meta]) => {
      const slug = extractSlug(path)
      return {
        slug,
        meta: { ...meta, languages: meta.languages ?? [meta.language ?? 'ts'] },
        components: {
          ts: findBySlug(reactTsxComponents, slug) as (() => Promise<{ default: React.ComponentType }>) | undefined,
          js: findBySlug(reactJsxComponents, slug) as (() => Promise<{ default: React.ComponentType }>) | undefined,
        },
        solutions: {
          ts: findBySlug(reactTsxSolutions, slug) as (() => Promise<{ default: React.ComponentType }>) | undefined,
          js: findBySlug(reactJsxSolutions, slug) as (() => Promise<{ default: React.ComponentType }>) | undefined,
        },
      }
    })
    .sort((a, b) => a.slug.localeCompare(b.slug))
}

export function getDsaChallenges(): ChallengeEntry[] {
  return Object.entries(dsaMeta)
    .filter(([path]) => !path.includes('_template'))
    .map(([path, meta]) => ({
      slug: extractSlug(path),
      meta: { ...meta, languages: meta.languages ?? [meta.language ?? 'ts'] },
    }))
    .sort((a, b) => a.slug.localeCompare(b.slug))
}

export function getAllChallenges(): ChallengeEntry[] {
  return [...getReactChallenges(), ...getDsaChallenges()]
}
