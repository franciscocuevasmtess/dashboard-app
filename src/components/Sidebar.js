import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bars3Icon, 
  XMarkIcon,
  ShoppingBagIcon, 
  UserIcon,
  HomeIcon,
  ChartBarIcon,
  CogIcon
} from '@heroicons/react/24/outline';

function Sidebar() {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón Hamburguesa */}
      <button 
        className="md:hidden fixed top-5 left-5 z-50 p-2 bg-gray-800 rounded-md text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>
      
      {/* Sidebar */}
      <aside className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 fixed md:static inset-y-0 left-0 w-64 bg-gray-100 p-5 z-40 
        transform transition-transform duration-300 ease-in-out shadow-lg md:shadow-none`}
      >
        <nav className="mt-10 md:mt-0">
          <ul className="space-y-4">
            {[
              { to: "/", icon: <HomeIcon className="h-5 w-5" />, text: "Inicio" },
              { to: "/clientes/lista", icon: <UserIcon className="h-5 w-5" />, text: "Clientes" },
              { to: "/productos", icon: <ShoppingBagIcon className="h-5 w-5" />, text: "Productos" },
              { to: "/reportes", icon: <ChartBarIcon className="h-5 w-5" />, text: "Reportes" },
              { to: "/configuracion", icon: <CogIcon className="h-5 w-5" />, text: "Configuración" },
            ].map((item) => (
              <li key={item.to}>
                <Link 
                  to={item.to} 
                  className="flex items-center gap-3 p-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Overlay para móvil */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Sidebar;