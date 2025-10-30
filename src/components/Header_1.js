import React from 'react';

function Header_1() {
  return (
    <header style={styles.header}>
      <h1>Dashboard</h1>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
};

export default Header_1;