import { useState, useCallback } from 'react'

export type ChallengeStatus = 'not_started' | 'in_progress' | 'completed'

interface ProgressMap {
  [slug: string]: ChallengeStatus
}

const STORAGE_KEY = 'interview-prep-progress'

function loadProgress(): ProgressMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveProgress(progress: ProgressMap) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressMap>(loadProgress)

  const getStatus = useCallback(
    (slug: string): ChallengeStatus => progress[slug] ?? 'not_started',
    [progress]
  )

  const updateStatus = useCallback((slug: string, status: ChallengeStatus) => {
    setProgress(prev => {
      const next = { ...prev, [slug]: status }
      saveProgress(next)
      return next
    })
  }, [])

  const resetProgress = useCallback(() => {
    setProgress({})
    localStorage.removeItem(STORAGE_KEY)
  }, [])

  const exportProgress = useCallback(() => {
    return JSON.stringify(progress, null, 2)
  }, [progress])

  const importProgress = useCallback((json: string) => {
    try {
      const imported = JSON.parse(json) as ProgressMap
      setProgress(imported)
      saveProgress(imported)
    } catch {
      console.error('Invalid progress JSON')
    }
  }, [])

  const stats = {
    total: Object.keys(progress).length,
    completed: Object.values(progress).filter(s => s === 'completed').length,
    inProgress: Object.values(progress).filter(s => s === 'in_progress').length,
  }

  return { progress, getStatus, updateStatus, resetProgress, exportProgress, importProgress, stats }
}
