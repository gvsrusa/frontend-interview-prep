import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MemoryCardGame from './index';

describe('MemoryCardGame', () => {
  it('renders the heading', () => {
    render(<MemoryCardGame />);
    expect(screen.getByText('Memory Card Game')).toBeInTheDocument();
  });

  it('renders 16 cards', () => {
    const { container } = render(<MemoryCardGame />);
    const cards = container.querySelectorAll('button');
    // 16 cards + new game button
    expect(cards.length).toBeGreaterThanOrEqual(16);
  });

  it('shows initial moves and pairs count', () => {
    render(<MemoryCardGame />);
    expect(screen.getByText(/Moves: 0/)).toBeInTheDocument();
    expect(screen.getByText(/Pairs: 0/)).toBeInTheDocument();
  });

  it('has a new game button', () => {
    render(<MemoryCardGame />);
    expect(screen.getByText('New Game')).toBeInTheDocument();
  });
});
