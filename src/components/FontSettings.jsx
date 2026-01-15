import React from 'react';

const FontSettings = ({ fontSize, setFontSize, fontFamily, setFontFamily }) => {
    return (
        <div className="font-settings">
            <div className="setting-group">
                <label>Size</label>
                <input
                    type="range"
                    min="2"
                    max="8"
                    step="0.5"
                    value={parseFloat(fontSize)}
                    onChange={(e) => setFontSize(`${e.target.value}rem`)}
                    className="size-slider"
                />
            </div>

            <div className="setting-group">
                <label>Font</label>
                <div className="font-toggles">
                    <button
                        className={`font-btn ${fontFamily.includes('Inter') ? 'active' : ''}`}
                        onClick={() => setFontFamily("'Inter', system-ui, sans-serif")}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                        title="Sans-Serif"
                    >
                        Aa
                    </button>
                    <button
                        className={`font-btn ${fontFamily.includes('Merriweather') ? 'active' : ''}`}
                        onClick={() => setFontFamily("'Merriweather', serif")}
                        style={{ fontFamily: "'Merriweather', serif" }}
                        title="Serif"
                    >
                        Aa
                    </button>
                    <button
                        className={`font-btn ${fontFamily.includes('monospace') ? 'active' : ''}`}
                        onClick={() => setFontFamily("'Space Mono', monospace")}
                        style={{ fontFamily: "'Space Mono', monospace" }}
                        title="Monospace"
                    >
                        Aa
                    </button>
                </div>
            </div>

            <style>{`
        .font-settings {
          display: flex;
          gap: 1.5rem;
          background: var(--surface-bg);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--surface-border);
          align-items: center;
        }

        .setting-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .setting-group label {
          font-size: 0.8rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .size-slider {
          width: 100px;
          cursor: pointer;
          accent-color: var(--accent-color);
        }

        .font-toggles {
          display: flex;
          gap: 0.25rem;
          background: var(--input-bg);
          padding: 2px;
          border-radius: var(--radius-sm);
        }

        .font-btn {
          width: 32px;
          height: 32px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 6px;
          border: 1px solid transparent;
          cursor: pointer;
          background: transparent;
          color: var(--text-secondary);
          font-size: 1rem;
        }

        .font-btn:hover {
          color: var(--text-primary);
          background: var(--surface-hover);
        }

        .font-btn.active {
          background: var(--card-bg);
          color: var(--accent-color);
          border-color: var(--surface-border);
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }
      `}</style>
        </div>
    );
};

export default FontSettings;
