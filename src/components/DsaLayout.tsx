import { useParams, Link } from 'react-router-dom'
import { useMemo, useState, useCallback, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getDsaChallenges } from '@/lib/registry'
import { readFile, writeFile } from '@/lib/file-api'
import { useProgress } from '@/hooks/useProgress'
import Timer from './Timer'
import CodeEditor from './CodeEditor'
import { DifficultyBadge, LanguageToggle, CategoryBadge, StatusBadge } from './ProgressBadge'

const readmeFiles = import.meta.glob<string>(
  '../dsa/*/README.md',
  { eager: true, query: '?raw', import: 'default' }
)

const LANG_PREF_KEY = 'interview-prep-lang-pref'

function getLangPref(slug: string): 'ts' | 'js' {
  try {
    const prefs = JSON.parse(localStorage.getItem(LANG_PREF_KEY) ?? '{}')
    return prefs[slug] ?? 'ts'
  } catch { return 'ts' }
}

function setLangPref(slug: string, lang: 'ts' | 'js') {
  try {
    const prefs = JSON.parse(localStorage.getItem(LANG_PREF_KEY) ?? '{}')
    prefs[slug] = lang
    localStorage.setItem(LANG_PREF_KEY, JSON.stringify(prefs))
  } catch { /* ignore */ }
}

type RightTab = 'editor' | 'solution'

export default function DsaLayout() {
  const { slug } = useParams<{ slug: string }>()
  const challenges = useMemo(() => getDsaChallenges(), [])
  const entry = challenges.find(c => c.slug === slug)

  const [activeLang, setActiveLang] = useState<'ts' | 'js'>(() => getLangPref(slug ?? ''))
  const { getStatus, updateStatus } = useProgress()
  const [activeTab, setActiveTab] = useState<RightTab>('editor')
  const [hintsRevealed, setHintsRevealed] = useState(0)
  const [solutionRevealed, setSolutionRevealed] = useState(false)
  const [solutionConfirmStep, setSolutionConfirmStep] = useState(false)

  const [editorCode, setEditorCode] = useState<string | null>(null)
  const [editorLoading, setEditorLoading] = useState(true)
  const [solutionCode, setSolutionCode] = useState<string | null>(null)
  const [submitFlash, setSubmitFlash] = useState(false)

  const ext = activeLang === 'ts' ? 'ts' : 'js'
  const indexPath = entry ? `dsa/${slug}/index.${ext}` : ''
  const solutionPath = entry ? `dsa/${slug}/solution.${ext}` : ''

  useEffect(() => {
    setSolutionRevealed(false)
    setSolutionConfirmStep(false)
  }, [slug])

  useEffect(() => {
    if (!indexPath) return
    setEditorLoading(true)
    readFile(indexPath)
      .then(content => { setEditorCode(content); setEditorLoading(false) })
      .catch(() => { setEditorCode(''); setEditorLoading(false) })
  }, [indexPath])

  useEffect(() => {
    if (!solutionRevealed || !solutionPath) return
    setSolutionCode(null)
    readFile(solutionPath)
      .then(setSolutionCode)
      .catch(() => setSolutionCode('// Solution not available'))
  }, [solutionRevealed, solutionPath])

  const handleLangChange = useCallback((lang: 'ts' | 'js') => {
    setActiveLang(lang)
    if (slug) setLangPref(slug, lang)
  }, [slug])

  const handleSubmit = useCallback(async () => {
    if (!indexPath || editorCode === null) return
    try {
      await writeFile(indexPath, editorCode)
      setSubmitFlash(true)
      setTimeout(() => setSubmitFlash(false), 1500)
    } catch {
      // silent
    }
  }, [indexPath, editorCode])

  if (!entry) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text">Challenge not found</h2>
          <Link to="/" className="mt-4 inline-block text-primary hover:underline">Back to dashboard</Link>
        </div>
      </div>
    )
  }

  const readmeKey = Object.keys(readmeFiles).find(k => k.includes(`/${slug}/`))
  const readme = readmeKey ? readmeFiles[readmeKey] : '# No instructions available'
  const status = getStatus(entry.slug)
  const hints = entry.meta.hints ?? []
  const languages = entry.meta.languages ?? ['ts']

  const tabs: { key: RightTab; label: string }[] = [
    { key: 'editor', label: 'Code Editor' },
    { key: 'solution', label: 'Solution' },
  ]

  return (
    <div className="min-h-screen">
      <header className="border-b border-border bg-surface px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <Link to="/" className="text-sm text-text-muted hover:text-primary">&larr; Back to Dashboard</Link>
            <h1 className="mt-1 text-xl font-bold text-text">{entry.meta.title}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <DifficultyBadge difficulty={entry.meta.difficulty} />
              <LanguageToggle languages={languages} activeLang={activeLang} onChange={handleLangChange} />
              <CategoryBadge category={entry.meta.category} />
              <StatusBadge status={status} />
            </div>
          </div>
          <Timer initialMinutes={entry.meta.timeLimit ?? 30} />
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left: Instructions */}
          <div className="rounded-xl border border-border bg-surface-light p-6 overflow-auto max-h-[calc(100vh-200px)]">
            <div className="prose prose-invert max-w-none text-text prose-headings:text-text prose-p:text-text-muted prose-code:text-primary prose-strong:text-text prose-a:text-primary">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{readme}</ReactMarkdown>
            </div>
            {hints.length > 0 && (
              <div className="mt-6 border-t border-border pt-4">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-text-muted">Hints</h3>
                {hints.slice(0, hintsRevealed).map((hint, i) => (
                  <p key={i} className="mb-2 rounded bg-surface-lighter p-3 text-sm text-text-muted">{hint}</p>
                ))}
                {hintsRevealed < hints.length && (
                  <button
                    onClick={() => setHintsRevealed(h => h + 1)}
                    className="text-sm text-primary hover:underline"
                  >
                    Reveal hint {hintsRevealed + 1} of {hints.length}
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Right: Tabbed Panel */}
          <div className="space-y-4">
            <div className="flex gap-1 rounded-lg bg-surface-light p-1">
              {tabs.map(t => (
                <button
                  key={t.key}
                  onClick={() => setActiveTab(t.key)}
                  className={`flex-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                    activeTab === t.key
                      ? 'bg-primary text-white'
                      : 'text-text-muted hover:text-text hover:bg-surface-lighter'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="min-h-[400px]">
              {activeTab === 'editor' && (
                <div>
                  {editorLoading ? (
                    <div className="flex h-64 items-center justify-center rounded-lg bg-surface">
                      <p className="text-text-muted text-sm">Loading file...</p>
                    </div>
                  ) : (
                    <>
                      <CodeEditor
                        value={editorCode ?? ''}
                        onChange={setEditorCode}
                        filePath={indexPath}
                        onSubmit={handleSubmit}
                      />
                      {submitFlash && (
                        <p className="mt-2 text-xs text-easy font-medium">Submitted successfully!</p>
                      )}
                    </>
                  )}
                  <div className="mt-3 rounded-lg bg-surface p-3">
                    <p className="font-mono text-xs text-text-muted">
                      Run tests: <code className="text-primary">npm test -- {slug}</code>
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'solution' && (
                <div>
                  {!solutionRevealed ? (
                    <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-surface-light p-12 min-h-[300px] text-center">
                      {!solutionConfirmStep ? (
                        <>
                          <p className="text-text-muted mb-4 text-sm">Try solving the challenge on your own first!</p>
                          <button
                            onClick={() => setSolutionConfirmStep(true)}
                            className="rounded-lg bg-yellow-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-yellow-500 transition-colors"
                          >
                            Show Solution
                          </button>
                        </>
                      ) : (
                        <>
                          <p className="text-yellow-400 mb-4 text-sm font-medium">Are you sure? Viewing the solution before attempting may reduce learning.</p>
                          <div className="flex gap-3">
                            <button
                              onClick={() => setSolutionConfirmStep(false)}
                              className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-text-muted hover:bg-surface transition-colors"
                            >
                              Go Back
                            </button>
                            <button
                              onClick={() => { setSolutionRevealed(true); setSolutionConfirmStep(false) }}
                              className="rounded-lg bg-hard px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-500 transition-colors"
                            >
                              Yes, Reveal Solution
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-text-muted uppercase tracking-wider">Reference Solution</h4>
                      {solutionCode !== null ? (
                        <CodeEditor value={solutionCode} filePath={solutionPath} readOnly />
                      ) : (
                        <div className="flex h-32 items-center justify-center rounded-lg bg-surface">
                          <p className="text-text-muted text-sm">Loading solution...</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-3">
              {status !== 'in_progress' && (
                <button
                  onClick={() => updateStatus(entry.slug, 'in_progress')}
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
                >
                  Mark In Progress
                </button>
              )}
              {status !== 'completed' && (
                <button
                  onClick={() => updateStatus(entry.slug, 'completed')}
                  className="rounded-lg bg-easy/20 px-4 py-2 text-sm font-medium text-easy hover:bg-easy/30"
                >
                  Mark Complete
                </button>
              )}
              {status !== 'not_started' && (
                <button
                  onClick={() => updateStatus(entry.slug, 'not_started')}
                  className="rounded-lg bg-surface-lighter px-4 py-2 text-sm font-medium text-text-muted hover:bg-border"
                >
                  Reset Status
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
