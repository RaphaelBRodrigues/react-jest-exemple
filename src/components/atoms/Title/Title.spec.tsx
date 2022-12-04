import { render, screen } from '@testing-library/react';
import React from 'react';
import { Title } from '.';

describe("<Title />", () => {
  it("Should renders a heading with a title", () => {
    render(<Title text='Título' />)
    expect(screen.getByText(/título/i)).toBeInTheDocument()
  })
})