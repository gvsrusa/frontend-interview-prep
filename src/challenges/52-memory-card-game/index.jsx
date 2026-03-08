import { useState } from 'react';

const SYMBOLS = ['🍎', '🍊', '🍋', '🍇', '🍉', '🍓', '🫐', '🥝'];

function createCards() {
  const cards = SYMBOLS.flatMap((symbol, i) => [
    { id: i * 2, symbol, matched: false },
    { id: i * 2 + 1, symbol, matched: false },
  ]);
  // Shuffle
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

export default function MemoryCardGame() {
  const [cards, setCards] = useState(createCards);
  const [flippedIds, setFlippedIds] = useState([]);
  const [moves, setMoves] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const matchedCount = cards.filter((c) => c.matched).length / 2;
  const isGameOver = matchedCount === SYMBOLS.length;

  // TODO: Handle card click
  // 1. Ignore if disabled, already flipped, or already matched
  // 2. Add card id to flippedIds
  // 3. If two cards flipped, check for match
  // 4. If match, mark both as matched
  // 5. If no match, flip both back after a delay
  // 6. Increment moves counter
  const handleCardClick = (id) => {
    // implement me
  };

  const reset = () => {
    setCards(createCards());
    setFlippedIds([]);
    setMoves(0);
    setDisabled(false);
  };

  return (
    <div>
      <h2>Memory Card Game</h2>
      <p>Moves: {moves} | Pairs: {matchedCount}/{SYMBOLS.length}</p>
      {isGameOver && <p style={{ color: 'green', fontWeight: 'bold' }}>You Win!</p>}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 70px)', gap: 8 }}>
        {cards.map((card) => {
          const isFlipped = flippedIds.includes(card.id) || card.matched;
          return (
            <button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              style={{
                width: 70,
                height: 70,
                fontSize: 28,
                cursor: 'pointer',
                background: isFlipped ? '#fff' : '#4f46e5',
                color: isFlipped ? '#000' : '#4f46e5',
                border: '2px solid #4f46e5',
                borderRadius: 8,
              }}
            >
              {isFlipped ? card.symbol : '?'}
            </button>
          );
        })}
      </div>
      <button onClick={reset} style={{ marginTop: 12 }}>New Game</button>
    </div>
  );
}
