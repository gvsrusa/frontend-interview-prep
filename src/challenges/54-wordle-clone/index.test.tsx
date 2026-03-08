import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import WordleClone from './index';

describe('WordleClone', () => {
  it('renders the heading', () => {
    render(<WordleClone />);
    expect(screen.getByText('Wordle Clone')).toBeInTheDocument();
  });

  it('renders 6 rows of 5 cells each', () => {
    const { container } = render(<WordleClone />);
    const cells = container.querySelectorAll('div[style*="width: 50px"]');
    expect(cells.length).toBe(30);
  });

  it('has a text input and submit button', () => {
    render(<WordleClone />);
    expect(screen.getByPlaceholderText('Type your guess...')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('accepts uppercase input', () => {
    render(<WordleClone />);
    const input = screen.getByPlaceholderText('Type your guess...');
    fireEvent.change(input, { target: { value: 'hello' } });
    expect(input.value).toBe('HELLO');
  });

  it('limits input to 5 characters', () => {
    render(<WordleClone />);
    const input = screen.getByPlaceholderText('Type your guess...');
    fireEvent.change(input, { target: { value: 'HELLOWORLD' } });
    expect(input.value.length).toBeLessThanOrEqual(5);
  });
});
