import React from 'react';

const ShortcutsBoard = () => {
  const shortcuts = [
    { key: 'Space', action: 'Play / Pause' },
    { key: '↑/↓', action: 'Speed ±25' },
    { key: '←/→', action: 'Prev / Next Word' },
    { key: 'N', action: 'Reset' },
  ];

  return (
    <div className="shortcuts-board">
      <h3>Keyboard Shortcuts</h3>
      <div className="shortcuts-grid">
        {shortcuts.map((s, index) => (
          <div key={index} className="shortcut-item">
            <kbd>{s.key}</kbd>
            <span>{s.action}</span>
          </div>
        ))}
      </div>
      <style>{`
        .shortcuts-board {
          margin-top: 1rem;
          padding: 1rem;
          background: var(--surface-bg);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-md);
          width: 100%;
          max-width: 350px; /* Reduced width for better centering appearance */
          margin: 1rem auto 0; /* Auto margin for self-centering */
        }

        .shortcuts-board h3 {
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
          text-align: center;
        }

        .shortcuts-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        .shortcut-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        kbd {
          background: var(--surface-hover);
          border: 1px solid var(--surface-border);
          border-radius: 4px;
          padding: 0.1rem 0.4rem;
          font-family: monospace;
          font-size: 0.75rem;
          color: var(--text-primary);
          box-shadow: 0 2px 0 var(--surface-border);
          min-width: 24px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default ShortcutsBoard;
