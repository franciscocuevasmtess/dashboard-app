import React from 'react';

function Card_1({ titulo, valor }) {
  return (
    <div style={styles.card}>
      <h3>{titulo}</h3>
      <p>{valor}</p>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    flex: '1',
  },
};

export default Card_1;