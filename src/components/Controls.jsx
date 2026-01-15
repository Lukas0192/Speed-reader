import React from 'react';

const Controls = ({
  text,
  setText,
  wpm,
  setWpm,
  isPlaying,
  onPlay,
  onPause,
  onReset
}) => {

  const presets = [
    { label: 'Normal', value: 300 },
    { label: 'Fast', value: 500 },
    { label: 'Skim', value: 900 },
    { label: 'Super', value: 1800 },
  ];

  return (
    <div className="controls-container">
      {/* Speed Board */}
      <div className="speed-board">
        {presets.map((preset) => (
          <button
            key={preset.value}
            onClick={() => setWpm(preset.value)}
            className={`speed-card ${wpm === preset.value ? 'active' : ''}`}
          >
            <span className="speed-value">{preset.value}</span>
            <span className="speed-label">{preset.label}</span>
          </button>
        ))}
      </div>

      {/* Manual Controls */}
      <div className="control-bar">
        <div className="input-group">
          <label>Speed (WPM)</label>
          <input
            type="number"
            value={wpm}
            onChange={(e) => setWpm(Number(e.target.value))}
            min="60"
            max="2000"
            className="wpm-input"
          />
        </div>

        <div className="action-buttons">
          {!isPlaying ? (
            <button className="btn-primary" onClick={onPlay}>Play</button>
          ) : (
            <button className="btn-secondary" onClick={onPause}>Pause</button>
          )}
          <button className="btn-ghost" onClick={onReset}>Reset</button>
        </div>
      </div>

      {/* Text Input Removed - Moved to InputSection */}

      <style>{`
        .controls-container {
          width: 100%;
          max-width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .speed-board {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .speed-card {
          background: var(--surface-bg);
          border: 1px solid var(--surface-border);
          padding: 1rem;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          align-items: center;
          color: var(--text-secondary);
        }

        .speed-card:hover {
          background: var(--surface-hover);
        }

        .speed-card.active {
          background: rgba(59, 130, 246, 0.1); /* Blue tint */
          border-color: var(--accent-color);
          color: var(--accent-color);
        }

        .speed-value {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .speed-label {
          font-size: 0.875rem;
          opacity: 0.8;
        }

        .control-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          background: var(--card-bg);
          padding: 1rem;
          border-radius: var(--radius-md);
        }

        .input-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .wpm-input {
          background: var(--input-bg);
          color: var(--text-primary);
          padding: 0.5rem;
          border-radius: var(--radius-sm);
          width: 80px;
          text-align: center;
          font-weight: 600;
        }

        .action-buttons {
          display: flex;
          gap: 0.5rem;
        }

        .btn-primary, .btn-secondary, .btn-ghost {
          padding: 0.5rem 1.5rem;
          border-radius: var(--radius-sm);
          font-weight: 600;
        }

        .btn-primary {
          background: var(--accent-color);
          color: white;
          box-shadow: 0 0 15px var(--accent-glow);
        }
        
        .btn-primary:hover {
          background: #2563eb; /* Blue 600 */
        }

        .btn-secondary {
          background: var(--surface-bg);
          color: var(--text-primary);
          border: 1px solid var(--surface-border);
        }

        .btn-ghost {
          background: transparent;
          color: var(--text-secondary);
        }

        .btn-ghost:hover {
          color: var(--text-primary);
        }

        .input-area {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .text-input {
          width: 100%;
          height: 150px;
          background: var(--input-bg);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          color: var(--text-primary);
          resize: vertical;
          font-size: 1.1rem;
          line-height: 1.6;
          box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.1); /* softer shadow for light mode? kept neutral */
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

export default Controls;
