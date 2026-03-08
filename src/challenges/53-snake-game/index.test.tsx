import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SnakeGame from './index';

describe('SnakeGame', () => {
  it('renders the heading', () => {
    render(<SnakeGame />);
    expect(screen.getByText('Snake Game')).toBeInTheDocument();
  });

  it('shows initial score of 0', () => {
    render(<SnakeGame />);
    expect(screen.getByText('Score: 0')).toBeInTheDocument();
  });

  it('has a start button', () => {
    render(<SnakeGame />);
    expect(screen.getByText('Start')).toBeInTheDocument();
  });

  it('renders the game grid', () => {
    const { container } = render(<SnakeGame />);
    const cells = container.querySelectorAll('div[style*="width: 20px"]');
    expect(cells.length).toBe(GRID_SIZE_SQUARED());
  });
});

function GRID_SIZE_SQUARED() {
  return 20 * 20;
}
