import React from 'react';

const HowToUse = () => {
    return (
        <div className="how-to-use">
            <h3>How to Use</h3>
            <ol>
                <li><strong>Paste Text</strong>: Copy your article or document and paste it into the text box.</li>
                <li><strong>Set Speed</strong>: Choose a preset (Normal, Fast, Skim) or type a custom WPM.</li>
                <li><strong>Play</strong>: Press <strong>Play</strong> or <strong>Spacebar</strong> to start reading.</li>
                <li><strong>Focus</strong>: Keep your eyes on the center guide. The words will flash at your chosen speed.</li>
            </ol>
            <style>{`
        .how-to-use {
          margin-top: 2rem;
          padding: 1.5rem;
          background: var(--card-bg);
          border-radius: var(--radius-md);
          width: 100%;
          max-width: 600px;
          border: 1px solid var(--surface-border);
        }

        .how-to-use h3 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .how-to-use ol {
          padding-left: 1.5rem;
          color: var(--text-secondary);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .how-to-use li {
          line-height: 1.6;
        }

        .how-to-use strong {
          color: var(--accent-color);
          font-weight: 600;
        }
      `}</style>
        </div>
    );
};

export default HowToUse;
