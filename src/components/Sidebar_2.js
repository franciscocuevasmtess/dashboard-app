import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar_2() {
  return (
    <aside style={styles.sidebar}>
      <ul style={styles.menu}>
        <li style={styles.menuItem}>
          <Link to="/" style={styles.link}>
            Inicio
          </Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/reportes" style={styles.link}>
            Reportes
          </Link>
        </li>
        <li style={styles.menuItem}>
          <Link to="/configuracion" style={styles.link}>
            Configuración
          </Link>
        </li>
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
  },
  link: {
    textDecoration: 'none',
    color: '#333',
  },
};

export default Sidebar_2;