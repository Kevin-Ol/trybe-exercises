import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  const { getByLabelText } = render(<App />);
  const inputEmail = getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});

test('Verificando se existe um botão de enviar', () => {
  const { getByTestId } = render(<App />);
  const btn = getByTestId('id-send');
  expect(btn).toBeInTheDocument();
  expect(btn.type).toBe('button');
  expect(btn).toHaveValue('Enviar');
});

test('Verificando se existe dois botões', () => {
  const { getAllByRole } = render(<App />);
  const btn = getAllByRole('button');
  expect(btn.length).toBe(2);
});

test('Verificando se o email aparece na tela apenas após clicar no botão', () => {
  const { getByTestId, getByLabelText } = render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();

  const btnSend = getByTestId('id-send');
  const inputEmail = getByLabelText('Email');
  fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
  fireEvent.click(btnSend);

  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
});

test('Verifica a validade do email após clicar no botão', () => {
  const { getByTestId, getByLabelText, getByText } = render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();

  const btnSend = getByTestId('id-send');
  const inputEmail = getByLabelText('Email');
  fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
  fireEvent.click(btnSend);

  const verifyEmail = getByText('Email Válido');
  expect(verifyEmail).toBeInTheDocument();
})

test('Verifica a invalidade do email após clicar no botão', () => {
  const { getByTestId, getByLabelText, getByText } = render(<App />);

  const EMAIL_USER = 'email';

  const textEmail = getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();

  const btnSend = getByTestId('id-send');
  const inputEmail = getByLabelText('Email');
  fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
  fireEvent.click(btnSend);

  const verifyEmail = getByText('Email Inválido');
  expect(verifyEmail).toBeInTheDocument();
})