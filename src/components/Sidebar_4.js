import { Link } from 'react-router-dom';
import { UserIcon,ShoppingBagIcon } from '@heroicons/react/outline';

function Sidebar_4() {
  return (
    <aside className="w-64 bg-gray-100 p-5 hidden md:block">
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
        <Link>
        </Link>
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

export default Sidebar_4;