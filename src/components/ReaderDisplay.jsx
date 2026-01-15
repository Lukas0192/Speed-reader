import React from 'react';

const ReaderDisplay = ({ word, isPlaying, fontSize, fontFamily }) => {
  const displayWord = word || "Ready";

  // Logic to find the Optimal Recognition Point (ORP)
  // Usually slightly left of center. 
  // Formula: length 1 => index 0
  // length 2-5 => index 1
  // length 6-9 => index 2
  // length 10-13 => index 3
  // length > 13 => index 4
  const getPivotIndex = (len) => {
    if (len === 1) return 0;
    if (len >= 2 && len <= 5) return 1;
    if (len >= 6 && len <= 9) return 2;
    if (len >= 10 && len <= 13) return 3;
    return 4;
  };

  const pivotIndex = getPivotIndex(displayWord.length);
  const leftLoginPart = displayWord.slice(0, pivotIndex);
  const pivotChar = displayWord[pivotIndex];
  const rightPart = displayWord.slice(pivotIndex + 1);

  return (
    <div className="reader-display-container">
      <div
        className={`word-display ${isPlaying ? 'active' : ''}`}
        style={{ fontSize: fontSize, fontFamily: fontFamily }}
      >
        <span className="word-left">{leftLoginPart}</span>
        <span className="word-pivot">{pivotChar}</span>
        <span className="word-right">{rightPart}</span>
      </div>
      <div className="focus-guide-top"></div>
      <div className="focus-guide-bottom"></div>

      <style>{`
        .reader-display-container {
          background: var(--card-bg);
          width: 100%;
          max-width: 100%;
          height: 350px; /* Slight height increase for larger fonts */
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: var(--radius-lg);
          position: relative;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          border: 1px solid var(--surface-border);
          overflow: hidden;
        }

        .word-display {
          font-weight: 500; /* Regular weight often better for ORP reading than bold */
          color: var(--text-primary);
          z-index: 10;
          display: flex;
          align-items: baseline;
          line-height: 1;
          white-space: pre;
        }

        .word-left, .word-right, .word-pivot {
            display: inline-block;
        }

        /* 
           The Trick: We need the PIVOT character to be EXACTLY in the center of the container.
           Since flex centers the whole block, we can use a small trick or just relative positioning 
           if utilizing a monospace font, but for variable width it's harder.
           
           Better approach: 
           Use a grid or absolute alignment relative to the pivot.
           Or: use flex but set width of left/right to ensure pivot is center? No.
           
           Simple robust CSS method:
           Translate the word container so the pivot center aligns with container center.
           This is hard without JS calculations of width.
           
           Alternative: Standard RSVP apps often use a fixed font or just center the whole word. 
           BUT user requested "highlight ORP". Usually that implies alignment too.
           Let's stick to centering the *word* for now, but highlighting the pivot. 
           Perfect ORP alignment usually implies distinct left/right containers.
        */
       
        .word-left {
          text-align: right;
        }
        
        .word-pivot {
          color: #ef4444; /* Red-500 */
          font-weight: 700;
        }
        
        /* Attempt to simulate alignment by layout if possible, 
           but standard centering is often acceptable if pivot is highlighted. 
           Let's try a transform approach if we want to be fancy, but simple is better first.
           Let's add a specific class for the red char.
        */

        .focus-guide-top, .focus-guide-bottom {
          position: absolute;
          left: 50%; /* Guide is always dead center */
          transform: translateX(-50%);
          width: 2px;
          height: 15px;
          background-color: var(--accent-color);
          opacity: 0.3;
        }
        
        .focus-guide-top { top: 80px; }
        .focus-guide-bottom { bottom: 80px; }
      `}</style>
    </div>
  );
};

export default ReaderDisplay;
