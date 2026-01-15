import { useState, useEffect, useRef } from 'react';
import InputSection from './components/InputSection';
import ReaderDisplay from './components/ReaderDisplay';
import Controls from './components/Controls';
import ShortcutsBoard from './components/ShortcutsBoard';
import ThemeSelector from './components/ThemeSelector';
import HowToUse from './components/HowToUse';
import FontSettings from './components/FontSettings';
import ProgressBar from './components/ProgressBar';

function App() {
  const [text, setText] = useState("Welcome to Speed Reader. Paste your text here to begin!");
  const [wpm, setWpm] = useState(300);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [theme, setTheme] = useState('dark');
  const [fontSize, setFontSize] = useState('4rem');
  const [fontFamily, setFontFamily] = useState("'Inter', system-ui, sans-serif");

  const words = text.split(/\s+/).filter(word => word.length > 0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const root = document.body;
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) {
      root.classList.remove('light-mode');
    } else {
      root.classList.add('light-mode');
    }
  }, [theme]);

  useEffect(() => {
    if (isPlaying) {
      clearInterval(intervalRef.current);
      const msPerWord = 60000 / wpm;
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex >= words.length - 1) {
            setIsPlaying(false);
            return prevIndex;
          }
          return prevIndex + 1;
        });
      }, msPerWord);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, wpm, words.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setWpm(prev => Math.min(2000, prev + 25));
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setWpm(prev => Math.max(60, prev - 25));
      } else if (e.code === 'Space') {
        e.preventDefault();
        setIsPlaying(prev => !prev && words.length > 0 ? true : false);
      } else if (e.key === 'n') {
        e.preventDefault();
        handleReset();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentIndex(prev => Math.min(words.length - 1, prev + 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentIndex(prev => Math.max(0, prev - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [words.length]);

  const handlePlay = () => words.length > 0 && setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleReset = () => { setIsPlaying(false); setCurrentIndex(0); };

  return (
    <>
      <header className="main-header">
        <div className="header-content">
          <div className="header-top">
            <h1>Speed Reader</h1>
            <ThemeSelector theme={theme} setTheme={setTheme} />
          </div>
          <FontSettings fontSize={fontSize} setFontSize={setFontSize} fontFamily={fontFamily} setFontFamily={setFontFamily} />
        </div>
      </header>

      <main>
        <ReaderDisplay word={words[currentIndex]} isPlaying={isPlaying} fontSize={fontSize} fontFamily={fontFamily} />
        <ProgressBar currentIndex={currentIndex} totalWords={words.length} />
        <Controls text={text} setText={setText} wpm={wpm} setWpm={setWpm} isPlaying={isPlaying} onPlay={handlePlay} onPause={handlePause} onReset={handleReset} />
        <InputSection text={text} setText={setText} isPlaying={isPlaying} />
        <ShortcutsBoard />
        <HowToUse />
      </main>

      <style>{`
        .main-header {
          width: 100%;
          background: var(--surface-bg);
          border-bottom: 1px solid var(--surface-border);
          padding: 1.5rem 0;
          display: flex;
          justify-content: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          margin-bottom: 2rem;
        }
        .header-content {
          width: 100%;
          max-width: 900px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 0 2rem;
        }
        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        h1 {
          margin: 0;
          font-size: 2rem;
          background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent-color) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        main {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 2rem 4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
        }
        main > * {
          width: 100%;
        }
      `}</style>
    </>
  );
}

export default App;
