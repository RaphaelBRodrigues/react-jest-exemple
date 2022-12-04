import React from 'react';
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react';
import { Button } from '.';

const BUTTON_LABEL = 'Button Test';

// Factory para renderizar o componente
const makeSut = ({
  label = BUTTON_LABEL,
  callback = jest.fn()
}) => {
  return render(<Button
    label={label}
    callback={callback}
  />);
}

describe("<Button />", () => {
  it("Should renders a button", () => {
    // Renderiza o componente
    makeSut({});

    // Verifica se algum componente com o atributo data-testid="basic-button" foi renderizado
    expect(screen.getByTestId('basic-button')).toBeInTheDocument();
  })

  it("Should renders a button with a uppercase text inside", () => {
    // Renderiza o componente passando uma label como prop
    makeSut({
      label: "just a simple text"
    });

    // Verifica se algum componente com o atributo data-testid="basic-button" foi renderizado e seu conteúdo está em caixa alta
    expect(screen.getByTestId('basic-button'))
      .toHaveTextContent('just a simple text'.toUpperCase())
  })

  it("Should call the callback passed as prop", () => {
    // Cria uma função mock que será passada para o componente
    const callback = jest.fn();

    // Renderiza o componente com o mock criado
    makeSut({
      callback
    });

    const textRegex = new RegExp(BUTTON_LABEL, "i")

    // Simula o click do usuário em um elemento que dê match com o regex
    userEvent.click(screen.getByText(textRegex));

    // Verifica se o callback passado como prop para o botão foi invocado alguma vez
    expect(callback).toHaveBeenCalled();
  })
})