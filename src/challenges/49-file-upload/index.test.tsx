import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FileUpload from './index';

describe('FileUpload', () => {
  it('renders the heading', () => {
    render(<FileUpload />);
    expect(screen.getByText('File Upload')).toBeInTheDocument();
  });

  it('shows the drop zone text', () => {
    render(<FileUpload />);
    expect(screen.getByText('Drag & drop files here or click to select')).toBeInTheDocument();
  });

  it('has a hidden file input', () => {
    const { container } = render(<FileUpload />);
    const input = container.querySelector('input[type="file"]');
    expect(input).toBeTruthy();
    expect(input?.style.display).toBe('none');
  });

  it('starts with no files listed', () => {
    const { container } = render(<FileUpload />);
    const fileItems = container.querySelectorAll('[style*="border-bottom"]');
    expect(fileItems.length).toBe(0);
  });
});
