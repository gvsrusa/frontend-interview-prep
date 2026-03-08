import { useState, useRef } from "react";
export default function FileUpload() {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
  };
  const handleFileSelect = (e) => {
  };
  const simulateUpload = (fileId) => {
  };
  const cancelUpload = (fileId) => {
  };
  const formatSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };
  return <div>
      <h2>File Upload</h2>
      <div
    onDragOver={handleDragOver}
    onDrop={handleDrop}
    onClick={() => fileInputRef.current?.click()}
    style={{
      border: "2px dashed #ccc",
      padding: 40,
      textAlign: "center",
      cursor: "pointer",
      marginBottom: 16
    }}
  >
        <p>Drag & drop files here or click to select</p>
        <input
    ref={fileInputRef}
    type="file"
    multiple
    onChange={handleFileSelect}
    style={{ display: "none" }}
  />
      </div>
      <div>
        {files.map((file) => <div key={file.id} style={{ padding: 8, borderBottom: "1px solid #eee" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{file.name} ({formatSize(file.size)})</span>
              <span>{file.status}</span>
            </div>
            <div style={{ background: "#eee", height: 8, borderRadius: 4, marginTop: 4 }}>
              <div
    style={{
      width: `${file.progress}%`,
      height: "100%",
      background: file.status === "cancelled" ? "#f87171" : "#34d399",
      borderRadius: 4,
      transition: "width 0.1s"
    }}
  />
            </div>
            {file.status === "uploading" && <button onClick={() => cancelUpload(file.id)} style={{ marginTop: 4 }}>
                Cancel
              </button>}
          </div>)}
      </div>
    </div>;
}
