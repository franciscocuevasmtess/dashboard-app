/*
import axios from 'axios';

// Configuración base para axios
const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
});

export const login = async (email, password) => {
    try {
        const response = await api.post('/login', { email, password });
        return response.data; // { token: '...' }
    } catch (error) {
        throw new Error('Error al iniciar sesión');
    }
};


// Exporta otros métodos de API si los necesitas
export default {
    login,
};
*/