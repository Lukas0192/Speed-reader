import React from 'react';

const ProgressBar = ({ currentIndex, totalWords }) => {
  const progress = totalWords > 0 ? ((currentIndex + 1) / totalWords) * 100 : 0;

  return (
    <div className="progress-container">
      <div className="progress-info">
        <span>{totalWords > 0 ? Math.min(currentIndex + 1, totalWords) : 0} / {totalWords} words</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <style>{`
        .progress-container {
          width: 100%;
          max-width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .progress-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .progress-track {
          width: 100%;
          height: 6px;
          background: var(--surface-bg);
          border-radius: 999px;
          overflow: hidden;
          border: 1px solid var(--surface-border);
        }

        .progress-fill {
          height: 100%;
          background: var(--accent-color);
          border-radius: 999px;
          transition: width 0.1s linear; /* fast transition for smooth flow */
          box-shadow: 0 0 10px var(--accent-glow);
        }
      `}</style>
    </div>
  );
};

export default ProgressBar;
