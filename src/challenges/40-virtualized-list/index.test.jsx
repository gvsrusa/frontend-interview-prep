import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import VirtualizedList from './index';

describe('VirtualizedList', () => {
  it('renders the heading', () => {
    render(<VirtualizedList />);
    expect(screen.getByText('Virtualized List')).toBeInTheDocument();
  });

  it('renders list items', () => {
    render(<VirtualizedList />);
    expect(screen.getByText(/Item #0/)).toBeInTheDocument();
  });

  it('has a scrollable container', () => {
    render(<VirtualizedList />);
    const container = screen.getByText(/Item #0/).closest('div[style]');
    expect(container).toBeTruthy();
  });

  it('mentions the total item count', () => {
    render(<VirtualizedList />);
    expect(screen.getByText(/10000/)).toBeInTheDocument();
  });
});
