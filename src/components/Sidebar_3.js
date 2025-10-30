import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar_3() {
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
      </ul>
    </aside>
  );
}

export default Sidebar_3;