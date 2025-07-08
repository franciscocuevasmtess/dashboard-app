import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api',
});

// Interceptor para añadir autenticación a cada petición
apiClient.interceptors.request.use(config => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    if (auth) {
        config.auth = {
            username: auth.username,
            password: auth.password
        };
    }
    return config;
}, error => {
    return Promise.reject(error);
});


apiClient.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            // Token expirado o no válido
            localStorage.removeItem('auth');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default apiClient;