/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from '@testing-library/react';
import { debug } from 'console';
import React from 'react';
import { Input } from '.';

const makeSut = ({
  disabled = false
}) => {
  return render(<Input disabled={disabled} />)
}

describe("<Input />", () => {
  it("Should renders a empty input", () => {
    makeSut({});

    const $element = screen.getByPlaceholderText("Username");

    expect($element).toHaveValue("");
  })

  it("Should renders a disabled input with a gray background", () => {
    const { debug } = makeSut({
      disabled: true
    });

    const $element = screen.getByPlaceholderText("Username");

    // Mostra o html da renderização no console para auxiliar na codificação do teste
    debug()

    // Verifica se o input possui uma chave disabled com o valor true
    expect($element).toMatchObject({
      disabled: true
    });

    // Verifica se o input possui um background-color: gray
    expect($element).toHaveStyle({
      backgroundColor: 'gray'
    })
  })

  it("Should renders a enabled input with a white background", () => {
    const { debug } = makeSut({
      disabled: false
    });

    const $element = screen.getByPlaceholderText("Username");

    // Mostra o html da renderização no console para auxiliar na codificação do teste
    debug()

    // Verifica se o input possui uma chave disabled com o valor true
    expect($element).toMatchObject({
      disabled: false
    });

    // Verifica se o input possui um background-color: gray
    expect($element).toHaveStyle({
      backgroundColor: 'white'
    })
  })
})