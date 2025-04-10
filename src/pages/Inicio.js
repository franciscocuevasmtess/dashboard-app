import React from 'react';

function Inicio() {
    /* return (
        <div>
            <h2>Inicio</h2>
            <p>Bienvenido al dashboard. Aquí puedes ver un resumen de la información.</p>
        </div>
    ); */
    return (
        <div className="p-5">
            <h2 className="text-xl font-bold">Inicio</h2>
            <p className="text-gray-700">
                Bienvenido al dashboard. Aquí puedes ver un resumen de la información.
            </p>
        </div>
    );
    
}

export default Inicio;