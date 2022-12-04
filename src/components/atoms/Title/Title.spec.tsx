import React from 'react';
import { render, screen } from '@testing-library/react';
import { Title } from '.';

describe("<Title />", () => {
  it("Should renders a heading with a title", () => {
    // Renderiza o componente que será testado
    render(<Title text='Título' />)

    // Busca um elemento com o texto "título" e verifica se o mesmo está na tela
    expect(screen.getByText(/título/i)).toBeInTheDocument()
  })
})