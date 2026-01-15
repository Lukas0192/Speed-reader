import React from 'react';

const ThemeSelector = ({ theme, setTheme }) => {
  return (
    <div className="theme-selector">
      <button
        className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
        onClick={() => setTheme('dark')}
        title="Dark Mode"
      >
        🌙 Dark
      </button>
      <button
        className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
        onClick={() => setTheme('light')}
        title="Light Mode"
      >
        ☀️ Light
      </button>
      <button
        className={`theme-btn ${theme === 'system' ? 'active' : ''}`}
        onClick={() => setTheme('system')}
        title="Follow System"
      >
        🖥️ System
      </button>

      <style>{`
        .theme-selector {
          display: flex;
          background: var(--surface-bg);
          padding: 0.25rem;
          border-radius: var(--radius-md);
          gap: 0.25rem;
          border: 1px solid var(--surface-border);
        }

        .theme-btn {
          background: transparent;
          color: var(--text-secondary);
          padding: 0.4rem 0.8rem;
          font-size: 0.8rem;
          border-radius: var(--radius-sm);
          border: 1px solid transparent;
        }

        .theme-btn:hover {
          color: var(--text-primary);
          background: var(--surface-hover);
        }

        .theme-btn.active {
          background: var(--card-bg);
          color: var(--text-primary);
          border-color: var(--surface-border);
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
};

export default ThemeSelector;
