import React from 'react';
import axios from 'axios';
import api from './config';

const API_URL = 'http://localhost:8080/api/clientes'; // La URL del backend

export const obtenerClientes = async () => {
    try {
        const response = await api.get('/clientes');
        return response.data.map(cliente => ({
            id: cliente.id,
            nombre: cliente.name,
            email: cliente.email,
            empresa: cliente.empresa,
            puesto: cliente.puesto,
            estado: cliente.estado ? 'Activo' : 'Inactivo'
        }));
    } catch (error) {
        console.error('Error al obtener clientes:', error);
        throw error;
    }
};

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

export const deleteCliente = async (id) => {
    const response = await fetch(`http://localhost:8080/api/clientes/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    if (!response.ok) {
        throw new Error('Error al eliminar el cliente');
    }

    // Si tu backend no devuelve contenido en DELETE
    return response.status === 204 ? {} : await response.json();
};
