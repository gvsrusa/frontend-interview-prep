import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { getReactChallenges, getDsaChallenges, type ChallengeEntry } from '@/lib/registry'
import { useProgress } from '@/hooks/useProgress'
import { DifficultyBadge, StatusBadge, LanguagesBadge, CategoryBadge } from './ProgressBadge'

type Tab = 'react' | 'dsa'
type Difficulty = 'all' | 'easy' | 'medium' | 'hard'

export default function Dashboard() {
  const [tab, setTab] = useState<Tab>('react')
  const [difficulty, setDifficulty] = useState<Difficulty>('all')
  const [category, setCategory] = useState<string>('all')
  const [search, setSearch] = useState('')
  const { getStatus } = useProgress()

  const reactChallenges = useMemo(() => getReactChallenges(), [])
  const dsaChallenges = useMemo(() => getDsaChallenges(), [])

  const challenges = tab === 'react' ? reactChallenges : dsaChallenges

  const categories = useMemo(() => {
    const cats = new Set(challenges.map(c => c.meta.category))
    return ['all', ...Array.from(cats).sort()]
  }, [challenges])

  const filtered = useMemo(() => {
    return challenges.filter(c => {
      if (difficulty !== 'all' && c.meta.difficulty !== difficulty) return false
      if (category !== 'all' && c.meta.category !== category) return false
      if (search && !c.meta.title.toLowerCase().includes(search.toLowerCase())) return false
      return true
    })
  }, [challenges, difficulty, category, search])

  const completedCount = challenges.filter(c => getStatus(c.slug) === 'completed').length

  return (
    <div className="min-h-screen">
      <header className="border-b border-border bg-surface px-6 py-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-text">Frontend Interview Prep</h1>
          <p className="mt-1 text-text-muted">
            {challenges.length} challenges &middot; {completedCount} completed
          </p>
          <div className="mt-4 h-2 w-full max-w-md rounded-full bg-surface-lighter">
            <div
              className="h-2 rounded-full bg-primary transition-all duration-500"
              style={{ width: `${challenges.length ? (completedCount / challenges.length) * 100 : 0}%` }}
            />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-6">
        {/* Tabs */}
        <div className="mb-6 flex gap-1 rounded-lg bg-surface-light p-1">
          {(['react', 'dsa'] as const).map(t => (
            <button
              key={t}
              onClick={() => { setTab(t); setCategory('all') }}
              className={`flex-1 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors ${
                tab === t ? 'bg-primary text-white' : 'text-text-muted hover:text-text hover:bg-surface-lighter'
              }`}
            >
              {t === 'react' ? 'React Challenges' : 'JavaScript & DSA'}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <input
            type="text"
            placeholder="Search challenges..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="rounded-lg border border-border bg-surface-light px-4 py-2 text-sm text-text placeholder:text-text-muted focus:border-primary focus:outline-none"
          />
          <select
            value={difficulty}
            onChange={e => setDifficulty(e.target.value as Difficulty)}
            className="rounded-lg border border-border bg-surface-light px-3 py-2 text-sm text-text focus:border-primary focus:outline-none"
          >
            <option value="all">All Difficulties</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="rounded-lg border border-border bg-surface-light px-3 py-2 text-sm text-text focus:border-primary focus:outline-none"
          >
            {categories.map(c => (
              <option key={c} value={c}>
                {c === 'all' ? 'All Categories' : c.replace(/-/g, ' ')}
              </option>
            ))}
          </select>
        </div>

        {/* Challenge Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(c => (
            <ChallengeCard key={c.slug} entry={c} tab={tab} status={getStatus(c.slug)} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="py-12 text-center text-text-muted">No challenges match your filters.</p>
        )}
      </div>
    </div>
  )
}

function ChallengeCard({ entry, tab, status }: { entry: ChallengeEntry; tab: Tab; status: string }) {
  const path = tab === 'react' ? `/challenge/${entry.slug}` : `/dsa/${entry.slug}`
  return (
    <Link
      to={path}
      className="group block rounded-xl border border-border bg-surface-light p-5 transition-all hover:border-primary/50 hover:bg-surface-lighter"
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold text-text group-hover:text-primary">{entry.meta.title}</h3>
        <LanguagesBadge languages={entry.meta.languages} />
      </div>
      <div className="flex flex-wrap gap-2">
        <DifficultyBadge difficulty={entry.meta.difficulty} />
        <CategoryBadge category={entry.meta.category} />
        <StatusBadge status={status as 'not_started' | 'in_progress' | 'completed'} />
      </div>
    </Link>
  )
}
