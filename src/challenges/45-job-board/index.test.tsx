import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import JobBoard from './index';

describe('JobBoard', () => {
  it('renders the heading', () => {
    render(<JobBoard />);
    expect(screen.getByText('Job Board')).toBeInTheDocument();
  });

  it('shows pagination controls', () => {
    render(<JobBoard />);
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  it('disables Previous button on page 1', () => {
    render(<JobBoard />);
    expect(screen.getByText('Previous')).toBeDisabled();
  });

  it('renders without crashing', () => {
    const { container } = render(<JobBoard />);
    expect(container.firstChild).toBeTruthy();
  });
});
