import React from 'react';
import axios from 'axios';

export const obtenerClientes = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data.map(cliente => ({
        id: cliente.id,
        nombre: cliente.name,
        email: cliente.email,
        empresa: cliente.company.name
    }));
};
