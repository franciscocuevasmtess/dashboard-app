// src/components/MenuMobile.js
//import { useState } from 'react';
//import { XIcon, MenuIcon } from '@heroicons/react/outline';
//import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Header_2 from './Header_2';
import Sidebar_4 from './Sidebar_4';
import Card_3 from './Card_3';
import Grafico from './Grafico';
import Inicio_3 from '../pages/Inicio_3';
import Reportes_3 from '../pages/Reportes_3';
import Configuracion_3 from '../pages/Configuracion_3';
import Clientes from '../pages/Clientes';
import Productos_1 from '../pages/Productos_1';

// Componente MenuMobile
function MenuMobile_2() {
    //const [abierto, setAbierto] = useState(false);

    return (
        <div className="md:hidden">
            {/* <button onClick={() => setAbierto(!abierto)} className="p-2">
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
            )} */}

            <button 
                onClick={() => setAbierto(!abierto)} 
                className="p-2 focus:outline-none"
            >
                {abierto ? (
                    <XIcon className="h-6 w-6 text-white" />
                ) : (
                    <MenuIcon className="h-6 w-6 text-white" />
                )}
            </button>

        </div>
    );
}

export default MenuMobile_2;