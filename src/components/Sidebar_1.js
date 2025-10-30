import React from 'react';

function Sidebar_1() {
  return (
    <aside style={styles.sidebar}>
      <ul style={styles.menu}>
        <li style={styles.menuItem}>Inicio</li>
        <li style={styles.menuItem}>Reportes</li>
        <li style={styles.menuItem}>Configuración</li>
      </ul>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: '200px',
    backgroundColor: '#f4f4f4',
    padding: '20px',
  },
  menu: {
    listStyle: 'none',
    padding: '0',
  },
  menuItem: {
    marginBottom: '10px',
    cursor: 'pointer',
  },
};

export default Sidebar_1;