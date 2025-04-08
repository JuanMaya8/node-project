import React from 'react';
import { render, screen } from '@testing-library/react';
import ContadorResultados from './ContadorResultados';

describe('ContadorResultados Component', () => {
  test('muestra correctamente los valores de axios, fetch y total', () => {
    render(<ContadorResultados axiosCount={5} fetchCount={7} />);

    const container = screen.getByTestId('contador-resultados');
    expect(container).toBeInTheDocument();

    expect(screen.getByText(/Axios:/)).toHaveTextContent('Axios: 5');
    expect(screen.getByText(/Fetch:/)).toHaveTextContent('Fetch: 7');
    expect(screen.getByText(/Total:/)).toHaveTextContent('Total: 12');
  });
});
