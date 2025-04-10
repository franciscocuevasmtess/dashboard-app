import React, { useState } from 'react';
//import { XIcon, MenuIcon } from '@heroicons/react/outline';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

function MenuMobile() {
    const [abierto, setAbierto] = useState(false);

    return (
        <div className="md:hidden">
            <button onClick={() => setAbierto(!abierto)} className="p-2">
                {abierto ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>

            {abierto && (
                <div className="absolute left-0 right-0 bg-white shadow-lg z-10 p-4">
                    <nav className="flex flex-col space-y-2">
                        <Link to="/" className="px-3 py-2 rounded hover:bg-gray-100">Inicio</Link>
                        <Link to="/clientes" className="px-3 py-2 rounded hover:bg-gray-100">Clientes</Link>
                        <Link to="/productos" className="px-3 py-2 rounded hover:bg-gray-100">Productos</Link>
                    </nav>
                </div>
            )}
        </div>
    );
}

export default MenuMobile;