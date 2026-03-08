import { useState, useRef, useCallback } from 'react';

interface UploadFile {
  id: string;
  name: string;
  size: number;
  progress: number;
  status: 'pending' | 'uploading' | 'complete' | 'cancelled';
}

export default function FileUpload() {
  const [files, setFiles] = useState<UploadFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const intervalsRef = useRef<Record<string, ReturnType<typeof setInterval>>>({});

  const simulateUpload = useCallback((fileId: string) => {
    setFiles((prev) =>
      prev.map((f) => (f.id === fileId ? { ...f, status: 'uploading' as const } : f))
    );

    intervalsRef.current[fileId] = setInterval(() => {
      setFiles((prev) =>
        prev.map((f) => {
          if (f.id !== fileId || f.status !== 'uploading') return f;
          const next = Math.min(f.progress + Math.floor(Math.random() * 15) + 5, 100);
          if (next >= 100) {
            clearInterval(intervalsRef.current[fileId]);
            delete intervalsRef.current[fileId];
            return { ...f, progress: 100, status: 'complete' as const };
          }
          return { ...f, progress: next };
        })
      );
    }, 200);
  }, []);

  const addFiles = useCallback(
    (fileList: FileList) => {
      const newFiles: UploadFile[] = Array.from(fileList).map((f) => ({
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        name: f.name,
        size: f.size,
        progress: 0,
        status: 'pending' as const,
      }));
      setFiles((prev) => [...prev, ...newFiles]);
      newFiles.forEach((f) => simulateUpload(f.id));
    },
    [simulateUpload]
  );

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files.length) {
      addFiles(e.dataTransfer.files);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      addFiles(e.target.files);
      e.target.value = '';
    }
  };

  const cancelUpload = (fileId: string) => {
    if (intervalsRef.current[fileId]) {
      clearInterval(intervalsRef.current[fileId]);
      delete intervalsRef.current[fileId];
    }
    setFiles((prev) =>
      prev.map((f) => (f.id === fileId ? { ...f, status: 'cancelled' as const } : f))
    );
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div>
      <h2>File Upload</h2>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        style={{
          border: '2px dashed #ccc',
          padding: 40,
          textAlign: 'center',
          cursor: 'pointer',
          marginBottom: 16,
        }}
      >
        <p>Drag & drop files here or click to select</p>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />
      </div>
      <div>
        {files.map((file) => (
          <div key={file.id} style={{ padding: 8, borderBottom: '1px solid #eee' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>{file.name} ({formatSize(file.size)})</span>
              <span>{file.status}</span>
            </div>
            <div style={{ background: '#eee', height: 8, borderRadius: 4, marginTop: 4 }}>
              <div
                style={{
                  width: `${file.progress}%`,
                  height: '100%',
                  background: file.status === 'cancelled' ? '#f87171' : '#34d399',
                  borderRadius: 4,
                  transition: 'width 0.1s',
                }}
              />
            </div>
            {file.status === 'uploading' && (
              <button onClick={() => cancelUpload(file.id)} style={{ marginTop: 4 }}>
                Cancel
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
