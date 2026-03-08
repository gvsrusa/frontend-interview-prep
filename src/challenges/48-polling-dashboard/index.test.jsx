import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PollingDashboard from './index';

describe('PollingDashboard', () => {
  it('renders the heading', () => {
    render(<PollingDashboard />);
    expect(screen.getByText('Polling Dashboard')).toBeInTheDocument();
  });

  it('has Start and Stop buttons', () => {
    render(<PollingDashboard />);
    expect(screen.getByText('Start')).toBeInTheDocument();
    expect(screen.getByText('Stop')).toBeInTheDocument();
  });

  it('has an interval selector', () => {
    render(<PollingDashboard />);
    expect(screen.getByDisplayValue('3s')).toBeInTheDocument();
  });

  it('shows fetch count starting at 0', () => {
    render(<PollingDashboard />);
    expect(screen.getByText('Fetch count: 0')).toBeInTheDocument();
  });

  it('Stop button is disabled initially', () => {
    render(<PollingDashboard />);
    expect(screen.getByText('Stop')).toBeDisabled();
  });
});
