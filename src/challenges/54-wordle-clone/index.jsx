import { useState } from 'react';

const WORDS = ['BRAIN', 'CRANE', 'FLAME', 'GRAPE', 'HOUSE', 'LIGHT', 'PIANO', 'STONE', 'TRAIN', 'WORLD'];
const WORD_LENGTH = 5;
const MAX_GUESSES = 6;

function getRandomWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

// TODO: Implement this function
// Returns an array of 'correct' | 'present' | 'absent' for each letter
function evaluateGuess(guess, target) {
  // implement me
  return Array(WORD_LENGTH).fill('absent');
}

export default function WordleClone() {
  const [target] = useState(getRandomWord);
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing' | 'won' | 'lost'

  // TODO: Handle key input
  // - Letters A-Z: append to currentGuess (max 5 chars)
  // - Backspace: remove last character
  // - Enter: submit guess if it's 5 letters
  const handleKeyPress = (key) => {
    // implement me
  };

  // TODO: Submit guess
  // 1. Add guess to guesses array
  // 2. Check if guess matches target → won
  // 3. Check if max guesses reached → lost
  const submitGuess = () => {
    // implement me
  };

  const getLetterColor = (letter, index, guess) => {
    const result = evaluateGuess(guess, target);
    switch (result[index]) {
      case 'correct': return '#22c55e';
      case 'present': return '#eab308';
      default: return '#6b7280';
    }
  };

  return (
    <div>
      <h2>Wordle Clone</h2>
      {gameStatus === 'won' && <p style={{ color: 'green' }}>You Win! ({guesses.length}/{MAX_GUESSES})</p>}
      {gameStatus === 'lost' && <p style={{ color: 'red' }}>Game Over! The word was {target}</p>}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 16 }}>
        {Array.from({ length: MAX_GUESSES }, (_, rowIndex) => {
          const guess = guesses[rowIndex];
          const isCurrentRow = rowIndex === guesses.length && gameStatus === 'playing';
          const display = guess || (isCurrentRow ? currentGuess.padEnd(WORD_LENGTH) : '     ');

          return (
            <div key={rowIndex} style={{ display: 'flex', gap: 4 }}>
              {display.split('').map((letter, colIndex) => (
                <div
                  key={colIndex}
                  style={{
                    width: 50,
                    height: 50,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24,
                    fontWeight: 'bold',
                    border: '2px solid #d1d5db',
                    background: guess ? getLetterColor(letter, colIndex, guess) : 'transparent',
                    color: guess ? '#fff' : '#000',
                  }}
                >
                  {letter.trim()}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {gameStatus === 'playing' && (
        <div>
          <input
            value={currentGuess}
            onChange={(e) => setCurrentGuess(e.target.value.toUpperCase().slice(0, WORD_LENGTH))}
            onKeyDown={(e) => {
              if (e.key === 'Enter') submitGuess();
            }}
            placeholder="Type your guess..."
            maxLength={WORD_LENGTH}
            style={{ padding: 8, fontSize: 18, textTransform: 'uppercase' }}
          />
          <button onClick={submitGuess} style={{ marginLeft: 8 }}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
