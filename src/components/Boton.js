import React from 'react';

function Boton({ texto, onClick, tipo = 'primario' }) {
    const estilos = {
        primario: 'bg-blue-500 hover:bg-blue-600 text-white',
        secundario: 'bg-gray-500 hover:bg-gray-600 text-white',
        peligro: 'bg-red-500 hover:bg-red-600 text-white',
    };

    return (
        <button className={`px-4 py-2 rounded-lg transition-colors ${estilos[tipo]}`} onClick={onClick} >
            {texto}
        </button>
    )
}

export default Boton;