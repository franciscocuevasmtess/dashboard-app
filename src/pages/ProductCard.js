import React from 'react'

function ProductCard({ nombre, precio }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
            <h3 className="font-semibold">{nombre}</h3>
            <p className="text-primary">{precio}</p>
        </div>
    );
}

export default ProductCard;