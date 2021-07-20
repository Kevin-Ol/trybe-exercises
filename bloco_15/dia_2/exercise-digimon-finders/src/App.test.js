import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('Teste da aplicação toda', () => {

  it('Testa resposta correta da api', async () => {
    render(<App />);

    const response = [
      {"name":"Angemon",
      "img":"https://digimon.shadowsmith.com/img/angemon.jpg",
      "level":"Champion"}
    ]

    global.fetch = jest.fn()
      .mockResolvedValue({json: () => Promise.resolve(response)})
    
    const linkElement = screen.getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('');

    userEvent.type(input, 'angemon');
    expect(input).toHaveValue('angemon');

    const url = 'https://digimon-api.vercel.app/api/digimon/name/angemon';

    const button = screen.getByRole('button', 'Search Digimon');
    userEvent.click(button);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(url);

    const name = await screen.findByTestId('digimonName');
    expect(name).toHaveTextContent(response[0].name);

    const level = await screen.findByTestId('digimonLevel');
    expect(level).toHaveTextContent(`level: ${response[0].level}`);

    const img = await screen.findByRole('img');
    expect(img).toHaveProperty('src', response[0].img);
  });

  it('Testa resposta errada da api', async () => {
    render(<App />);

    const response = 
      {"ErrorMsg":"Pikachu is not a Digimon in our database."}

    global.fetch = jest.fn()
      .mockResolvedValue({json: () => Promise.resolve(response)})
    
    const linkElement = screen.getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('');

    userEvent.type(input, 'pikachu');
    expect(input).toHaveValue('pikachu');

    const url = 'https://digimon-api.vercel.app/api/digimon/name/pikachu';

    const button = screen.getByRole('button', 'Search Digimon');
    userEvent.click(button);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(url);

    const error = await screen.findByText(response.ErrorMsg);
    expect(error).toBeInTheDocument();
  });

});