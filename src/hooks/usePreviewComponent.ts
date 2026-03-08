import { useState, useEffect, useRef, type ComponentType } from 'react'
import { compileComponent } from '@/lib/preview-compiler'

interface PreviewState {
  Component: ComponentType | null
  error: string | null
  compiling: boolean
  version: number
}

export function usePreviewComponent(code: string | null, ext: string): PreviewState {
  const [state, setState] = useState<PreviewState>({
    Component: null,
    error: null,
    compiling: false,
    version: 0,
  })
  const timerRef = useRef<ReturnType<typeof setTimeout>>()
  const latestCodeRef = useRef(code)

  useEffect(() => {
    latestCodeRef.current = code

    if (code === null || code.trim() === '') {
      setState(prev => ({ Component: null, error: null, compiling: false, version: prev.version }))
      return
    }

    setState(prev => ({ ...prev, compiling: true }))

    if (timerRef.current) clearTimeout(timerRef.current)

    timerRef.current = setTimeout(async () => {
      const result = await compileComponent(code, ext)
      if (latestCodeRef.current !== code) return
      setState(prev => ({
        Component: result.component ?? null,
        error: result.error,
        compiling: false,
        version: prev.version + 1,
      }))
    }, 400)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [code, ext])

  return state
}
