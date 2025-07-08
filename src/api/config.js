import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    // Configura las credenciales básicas de forma global
    auth: {
        username: 'admin', // Usuario definido en tu Spring Security
        password: '123'    // Contraseña definida
    }
});

export default api;
