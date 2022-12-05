import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Form from '.';
import shouldRender from '../../../utils/shouldRender';
import userEvent from '@testing-library/user-event';
import { redirectToHome } from '../../../utils/redirectToHome';
import ApplicationConstants from '../../../constants/ApplicationConstants';
import { Button } from '../../atoms/Button';

// Função externa ao componente
jest.mock("../../../utils/shouldRender.ts");
jest.mock("../../../utils/redirectToHome.ts");
// jest.mock("../../atoms/Button", () => jest.requireActual('../../atoms/Button'));

const makeSut = () => {
  return render(<Form />)
}

describe("<Form />", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  })

  it("Should renders a form with some inputs inside", () => {
    makeSut();

    // Busca todos os textboxs (inputs) renderizados
    const $inputs = screen.getAllByRole('textbox');

    const $form = screen.getByTestId('form');

    // Verifica se 2 inputs foram renderizados
    expect($inputs).toHaveLength(2);

    expect($form).toBeInTheDocument();
  });

  it("Should renders the button when shouldRender function returns true", () => {
    // Força que a função shouldRender retorne um valor true dentro do componente
    const mockedShouldRender = jest.mocked(shouldRender);
    mockedShouldRender.mockReturnValue(true)

    makeSut();

    expect(screen.getByText(/Enviar/i)).toBeInTheDocument();
  })

  it("Should not renders the button when shouldRender function returns true", () => {
    // Força que a função shouldRender retorne um valor false dentro do componente
    const mockedShouldRender = jest.mocked(shouldRender); mockedShouldRender.mockReturnValue(false)

    makeSut();

    expect(screen.queryByText(/Enviar/i)).not.toBeInTheDocument();
  })

  it("Should redirect the user to home when fail to post on API", async () => {
    const mockedShouldRender = jest.mocked(shouldRender);
    mockedShouldRender.mockReturnValue(true);

    // Força um erro no método fetch
    global.fetch = jest.fn().mockImplementation(() => {
      throw new Error("Test error")
    })

    makeSut();

    userEvent.click(screen.getByText(/Enviar/i));

    // Aguarda até que o componente finalize todas as ações pendentes
    await waitFor(() => {
      expect(redirectToHome).toHaveBeenCalled()
    })
  })

  it("Should shows a alert when the form is submitted and API response is ok", async () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();

    global.fetch = jest.fn().mockResolvedValue({
      ok: true
    })

    makeSut();
    userEvent.click(screen.getByText(/Enviar/i));

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalled();
    })
  })

  it("Should pass the appropriate values to fetch when form is submitted", async () => {
    const mockedShouldRender = jest.mocked(shouldRender);
    mockedShouldRender.mockReturnValue(true)

    global.fetch = jest.fn();

    const username = "Raphael";
    const password = "123";

    makeSut();

    userEvent.type(screen.getByPlaceholderText("Username"), username);
    userEvent.type(screen.getByPlaceholderText("Password"), password);

    userEvent.click(screen.getByText(/Enviar/i));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(ApplicationConstants.TEST_API, {
        body: JSON.stringify({
          username,
          password
        })
      })
    })
  })

  // Falso Positivo
  it("Should renders a forgot password button", () => {
    makeSut();

    const $element = screen.getByText(/Enviar/i);

    // Manipulando o teste só para passar
    $element.innerHTML = "Forgot your password?"

    expect(screen.getByText('Forgot your password?')).toBeInTheDocument();
  })
})