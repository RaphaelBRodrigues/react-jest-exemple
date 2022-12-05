import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("<App />", () => {
  it('Should renders a test label', () => {
    render(<App />);

    expect(screen.getByText(/jest/i)).toBeInTheDocument();
  });
})
