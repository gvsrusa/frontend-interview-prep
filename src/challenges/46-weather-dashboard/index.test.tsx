import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import WeatherDashboard from './index';

describe('WeatherDashboard', () => {
  it('renders the heading', () => {
    render(<WeatherDashboard />);
    expect(screen.getByText('Weather Dashboard')).toBeInTheDocument();
  });

  it('has a search input and button', () => {
    render(<WeatherDashboard />);
    expect(screen.getByPlaceholderText('Enter city name...')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('accepts user input', () => {
    render(<WeatherDashboard />);
    const input = screen.getByPlaceholderText('Enter city name...');
    fireEvent.change(input, { target: { value: 'London' } });
    expect(input.value).toBe('London');
  });

  it('renders without crashing', () => {
    const { container } = render(<WeatherDashboard />);
    expect(container.firstChild).toBeTruthy();
  });
});
