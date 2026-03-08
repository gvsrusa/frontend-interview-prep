import type { ChallengeStatus } from '@/hooks/useProgress'

const difficultyColors = {
  easy: 'bg-easy/20 text-easy',
  medium: 'bg-medium/20 text-medium',
  hard: 'bg-hard/20 text-hard',
} as const

const statusConfig = {
  not_started: { label: 'Not Started', cls: 'bg-surface-lighter text-text-muted' },
  in_progress: { label: 'In Progress', cls: 'bg-primary/20 text-primary' },
  completed: { label: 'Completed', cls: 'bg-easy/20 text-easy' },
} as const

const langColors = {
  ts: 'bg-blue-500/20 text-blue-400',
  js: 'bg-yellow-500/20 text-yellow-400',
} as const

export function DifficultyBadge({ difficulty }: { difficulty: 'easy' | 'medium' | 'hard' }) {
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${difficultyColors[difficulty]}`}>
      {difficulty}
    </span>
  )
}

export function StatusBadge({ status }: { status: ChallengeStatus }) {
  const cfg = statusConfig[status]
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${cfg.cls}`}>
      {cfg.label}
    </span>
  )
}

export function LanguageBadge({ language }: { language: 'ts' | 'js' }) {
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold uppercase ${langColors[language]}`}>
      {language}
    </span>
  )
}

export function LanguagesBadge({ languages }: { languages: ('ts' | 'js')[] }) {
  if (languages.length === 2) {
    return (
      <span className="inline-flex rounded-full overflow-hidden text-xs font-bold uppercase">
        <span className="bg-blue-500/20 text-blue-400 px-2 py-0.5">TS</span>
        <span className="bg-yellow-500/20 text-yellow-400 px-2 py-0.5">JS</span>
      </span>
    )
  }
  return <LanguageBadge language={languages[0]} />
}

export function LanguageToggle({
  languages,
  activeLang,
  onChange,
}: {
  languages: ('ts' | 'js')[]
  activeLang: 'ts' | 'js'
  onChange: (lang: 'ts' | 'js') => void
}) {
  if (languages.length < 2) return <LanguageBadge language={languages[0]} />

  return (
    <div className="inline-flex rounded-full overflow-hidden text-xs font-bold uppercase">
      {(['ts', 'js'] as const).map(lang => (
        <button
          key={lang}
          onClick={() => onChange(lang)}
          className={`px-3 py-1 transition-colors ${
            activeLang === lang
              ? lang === 'ts'
                ? 'bg-blue-500 text-white'
                : 'bg-yellow-500 text-gray-900'
              : lang === 'ts'
                ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30'
                : 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30'
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  )
}

export function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="rounded-full bg-surface-lighter px-2.5 py-0.5 text-xs font-medium text-text-muted">
      {category.replace(/-/g, ' ')}
    </span>
  )
}
