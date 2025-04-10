import React from 'react';
import ProductCard from './ProductCard';

function Productos() {
    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold mb-4">Productos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Cards de productos */}
                <ProductCard nombre="Laptop" precio="$999" />
                <ProductCard nombre="Teléfono" precio="$699" />
            </div>
        </div>
    );
}

// Componente hijo para productos
/*function ProductCard({ nombre, precio }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
            <h3 className="font-semibold">{nombre}</h3>
            <p className="text-primary">{precio}</p>
        </div>
    );
}*/

export default Productos;