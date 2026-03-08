import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import GitHubUserSearch from './index';

describe('GitHubUserSearch', () => {
  it('renders the heading', () => {
    render(<GitHubUserSearch />);
    expect(screen.getByText('GitHub User Search')).toBeInTheDocument();
  });

  it('has a search input and button', () => {
    render(<GitHubUserSearch />);
    expect(screen.getByPlaceholderText('Search GitHub users...')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('accepts user input', () => {
    render(<GitHubUserSearch />);
    const input = screen.getByPlaceholderText('Search GitHub users...');
    fireEvent.change(input, { target: { value: 'dan' } });
    expect(input.value).toBe('dan');
  });

  it('starts with no user cards', () => {
    render(<GitHubUserSearch />);
    expect(screen.queryByText('followers')).toBeNull();
  });
});
