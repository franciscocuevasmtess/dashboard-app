import { ShoppingBagIcon, UserIcon } from '@heroicons/react/16/solid';
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  /*
  return (
    <aside style={styles.sidebar}>
      <ul style={styles.menu}>
        <li style={styles.menuItem}>Inicio</li>
        <li style={styles.menuItem}>Reportes</li>
        <li style={styles.menuItem}>Configuración</li>
      </ul>
    </aside>
  );
  */
  
  /* return (
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
  ); */

  return (
    <aside className="w-64 bg-gray-100 p-5">
      <ul className="list-none p-0">
        <li className="mb-3">
          <Link to="/" className="text-gray-700 hover:text-gray-900">
            Inicio
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/reportes" className="text-gray-700 hover:text-gray-900">
            Reportes
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/configuracion" className="text-gray-700 hover:text-gray-900">
            Configuración
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/clientes" className="flex items-center gap-2 text-gray-700 hover:text-primary">
            <UserIcon className="w-5 h-5" /> Clientes
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/productos" className="flex items-center gap-2 text-gray-700 hover:text-primary">
            <ShoppingBagIcon className="w-5 h-5" /> Productos
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
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
  },
};

export default Sidebar;
