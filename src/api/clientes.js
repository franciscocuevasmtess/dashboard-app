import React from 'react';
import axios from 'axios';

/*export const obtenerClientes = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data.map(cliente => ({
        id: cliente.id,
        nombre: cliente.name,
        email: cliente.email,
        empresa: cliente.company.name
    }));
};*/

export const obtenerClientes = async () => {
    const response = await axios.get('http://localhost:8080/api/clientes');
    return response.data.map(cliente => ({
        id: cliente.id,
        nombre: cliente.name,
        email: cliente.email,
        empresa: cliente.empresa,
        puesto: cliente.puesto,
        estado: cliente.estado ? 'Activo' : 'Inactivo' // Conversión del estado
    }));
};


const API_URL = 'http://localhost:8080/api/clientes'; // La URL del backend
export const createCliente = async (clienteData) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(clienteData)
        });

        if (!response.ok) {
            throw new Error('Error al crear el cliente');
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};



export const getCliente = async (id) => {
    const response = await fetch(`http://localhost:8080/api/clientes/${id}`);
    if (!response.ok) {
        throw new Error('Error al obtener el cliente');
    }
    return await response.json();
};

export const updateCliente = async (id, clienteData) => {
    const response = await fetch(`http://localhost:8080/api/clientes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(clienteData),
    });
    if (!response.ok) {
        throw new Error('Error al actualizar el cliente');
    }
    return await response.json();
};