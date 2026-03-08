import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import OptimisticUpdates from './index';

describe('OptimisticUpdates', () => {
  it('renders the heading', () => {
    render(<OptimisticUpdates />);
    expect(screen.getByText('Optimistic Updates')).toBeInTheDocument();
  });

  it('renders all initial todos', () => {
    render(<OptimisticUpdates />);
    expect(screen.getByText('Buy groceries')).toBeInTheDocument();
    expect(screen.getByText('Walk the dog')).toBeInTheDocument();
    expect(screen.getByText('Read a book')).toBeInTheDocument();
    expect(screen.getByText('Write code')).toBeInTheDocument();
    expect(screen.getByText('Exercise')).toBeInTheDocument();
  });

  it('renders delete buttons for each todo', () => {
    render(<OptimisticUpdates />);
    const deleteButtons = screen.getAllByText('Delete');
    expect(deleteButtons).toHaveLength(5);
  });

  it('renders without crashing', () => {
    const { container } = render(<OptimisticUpdates />);
    expect(container.firstChild).toBeTruthy();
  });
});
