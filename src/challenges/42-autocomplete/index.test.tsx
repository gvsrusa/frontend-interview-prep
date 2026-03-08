import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Autocomplete from './index';

describe('Autocomplete', () => {
  it('renders the heading and input', () => {
    render(<Autocomplete />);
    expect(screen.getByText('Autocomplete')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search frameworks...')).toBeInTheDocument();
  });

  it('accepts user input', () => {
    render(<Autocomplete />);
    const input = screen.getByPlaceholderText('Search frameworks...');
    fireEvent.change(input, { target: { value: 'react' } });
    expect(input.value).toBe('react');
  });

  it('starts with empty results', () => {
    render(<Autocomplete />);
    expect(screen.queryByRole('listbox')).toBeNull();
  });

  it('renders without crashing', () => {
    const { container } = render(<Autocomplete />);
    expect(container.firstChild).toBeTruthy();
  });
});
