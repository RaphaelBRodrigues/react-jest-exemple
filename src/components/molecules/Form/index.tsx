/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import ApplicationConstants from '../../../constants/ApplicationConstants';
import { redirectToHome } from '../../../utils/redirectToHome';
import shouldRender from '../../../utils/shouldRender';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';


const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch(ApplicationConstants.TEST_API, {
        body: JSON.stringify({
          username,
          password
        })
      })

      if (response.ok) {
        alert("Cadastro realizado com sucesso!");
      } else {
        throw new Error("Failed to save")
      }
    } catch (err) {
      redirectToHome();
    }
  }

  return (
    <form
      data-testid="form"
      onSubmit={handleSubmit}>
      <Input
        onChange={(e) => setUsername(e.currentTarget.value)} placeholder='Username'
      />

      <Input
        onChange={(e) => setPassword(e.currentTarget.value)} placeholder='Password'
      />

      {shouldRender() && <Button label='Enviar' />}
    </form>
  );
};

export default Form;