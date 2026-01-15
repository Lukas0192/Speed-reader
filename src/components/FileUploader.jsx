import React, { useRef, useState } from 'react';

const FileUploader = ({ onFileLoaded }) => {
    const [isDragOver, setIsDragOver] = useState(false);
    const fileInputRef = useRef(null);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            processFile(files[0]);
        }
    };

    const handleFileSelect = (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            processFile(files[0]);
        }
    };

    const processFile = (file) => {
        if (file.type === 'text/plain') {
            const reader = new FileReader();
            reader.onload = (e) => {
                onFileLoaded(e.target.result);
            };
            reader.readAsText(file);
        } else {
            alert('Please upload a .txt file');
        }
    };

    return (
        <div
            className={`file-uploader ${isDragOver ? 'drag-active' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current.click()}
        >
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                accept=".txt"
                style={{ display: 'none' }}
            />
            <div className="upload-content">
                <span className="upload-icon">📄</span>
                <span className="upload-text">
                    Drag & Drop a <strong>.txt</strong> file here, or click to upload
                </span>
            </div>

            <style>{`
        .file-uploader {
          width: 100%;
          border: 2px dashed var(--surface-border);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          background: var(--surface-bg);
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          justify-content: center;
        }

        .file-uploader:hover {
          border-color: var(--accent-light, #60a5fa);
          background: var(--surface-hover);
        }

        .file-uploader.drag-active {
          border-color: var(--accent-color);
          background: rgba(59, 130, 246, 0.1);
        }

        .upload-content {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
          pointer-events: none; /* Let clicks pass to container */
        }

        .upload-icon {
          font-size: 1.5rem;
        }
        
        .upload-text strong {
            color: var(--text-primary);
        }
      `}</style>
        </div>
    );
};

export default FileUploader;
