import React from 'react';
import FileUploader from './FileUploader';

const InputSection = ({ text, setText, isPlaying }) => {
    if (isPlaying) return null;

    return (
        <div className="input-section">
            <h3>Input Source</h3>
            <textarea
                className="text-input"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste your text here to start reading..."
            />
            <div className="file-upload-wrapper">
                <FileUploader onFileLoaded={setText} />
            </div>

            <style>{`
        .input-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
          background: var(--card-bg);
          padding: 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--surface-border);
        }

        .input-section h3 {
          font-size: 1rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .text-input {
          width: 100%;
          height: 200px; /* Slightly taller for side view */
          background: var(--input-bg);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-md);
          padding: 1rem;
          color: var(--text-primary);
          resize: vertical;
          font-size: 1rem;
          line-height: 1.6;
          box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.1);
          transition: all 0.2s ease;
        }
        
        .text-input:focus {
          background: var(--card-bg);
          border-color: var(--accent-color);
          box-shadow: 0 0 0 3px var(--accent-glow);
        }
      `}</style>
        </div>
    );
};

export default InputSection;
