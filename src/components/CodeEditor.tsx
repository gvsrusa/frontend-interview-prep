import { useMemo } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { keymap } from '@codemirror/view'

interface CodeEditorProps {
  value: string
  onChange?: (value: string) => void
  filePath?: string
  language?: string
  readOnly?: boolean
  onSubmit?: () => void
}

function getLangExtensions(ref: string) {
  const ext = ref.split('.').pop() ?? ''
  const isTs = ext === 'ts' || ext === 'tsx'
  const isJsx = ext === 'tsx' || ext === 'jsx'
  return [javascript({ jsx: isJsx, typescript: isTs })]
}

export default function CodeEditor({
  value,
  onChange,
  filePath,
  language,
  readOnly = false,
  onSubmit,
}: CodeEditorProps) {
  const langRef = filePath ?? language ?? 'tsx'

  const extensions = useMemo(() => {
    const exts = [...getLangExtensions(langRef)]
    if (onSubmit) {
      exts.push(
        keymap.of([
          {
            key: 'Mod-s',
            run: () => {
              onSubmit()
              return true
            },
          },
        ]),
      )
    }
    return exts
  }, [langRef, onSubmit])

  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div className="flex items-center justify-between bg-surface-lighter px-3 py-1.5">
        <span className="font-mono text-xs text-text-muted">{filePath ?? ''}</span>
        <div className="flex items-center gap-2">
          {readOnly && <span className="text-xs text-text-muted italic">read-only</span>}
          {onSubmit && (
            <button
              onClick={onSubmit}
              className="rounded bg-easy px-3 py-1 text-xs font-semibold text-white hover:bg-green-500 transition-colors"
            >
              Submit
            </button>
          )}
        </div>
      </div>
      <CodeMirror
        value={value}
        onChange={readOnly ? undefined : onChange}
        extensions={extensions}
        theme="dark"
        readOnly={readOnly}
        basicSetup={{
          lineNumbers: true,
          foldGutter: true,
          highlightActiveLine: !readOnly,
          bracketMatching: true,
          autocompletion: false,
        }}
        height="calc(100vh - 340px)"
        style={{ fontSize: '14px' }}
      />
    </div>
  )
}
