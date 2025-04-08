import React from 'react';

function ContadorResultados({ axiosCount, fetchCount }) {
  const total = axiosCount + fetchCount;

  return (
    <div data-testid="contador-resultados" className="contador-resultados">
      <h3>Contador de Resultados</h3>
      <p>Axios: {axiosCount}</p>
      <p>Fetch: {fetchCount}</p>
      <p>Total: {total}</p>
    </div>
  );
};

const styles = {
  container: {
    background: '#f5f5f5',
    padding: '1rem',
    borderRadius: '8px',
    margin: '1rem 0',
    border: '1px solid #ccc'
  },
  title: {
    margin: 0,
    marginBottom: '0.5rem',
    color: '#333'
  }
};

export default ContadorResultados;
