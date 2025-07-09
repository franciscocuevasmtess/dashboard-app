import { createContext, useContext, useState } from 'react';
import { login, logout } from '../api/auth';

const AuthContext = createContext(); // 📦 Creamos un contexto vacío

export const AuthProvider = ({ children }) => {
    
    /*
     * 🔒 2. AuthContext.js – Contexto de Autenticación 
     *
     * ✅ ¿Qué hace este archivo?
     * Proporciona un contexto global para gestionar la autenticación.
     * Almacena:
     * Si hay sesión iniciada (auth).
     * Funciones como signIn() y signOut().
     * Usa localStorage para persistir sesión entre recargas del navegador.
     * Ofrece un hook personalizado useAuth() que cualquier componente puede usar para acceder al 
     * estado de autenticación.
    */

    const [auth, setAuth] = useState(() => {
        // Recuperar credenciales del localStorage si existen
        const savedAuth = localStorage.getItem('auth');
        return savedAuth ? JSON.parse(savedAuth) : null; // 📁 Carga sesión guardada
    });

    const signIn = async (username, password) => {
        try {
            const userData = await login(username, password); // 🔑 Llama a la API de login
            setAuth(userData);
            localStorage.setItem('auth', JSON.stringify(userData)); // 💾 Guarda sesión
            return true;
        } catch (error) {
            console.error('Login failed:', error);
            return false;
        }
    };

    const signOut = () => {
        logout();; // 🚪 Llama a la función de cierre de sesión
        setAuth(null); // 🧹 Limpia estado local
        localStorage.removeItem('auth'); // 🗑️ Elimina sesión del almacenamiento
    };

    return (
        <AuthContext.Provider value={{ auth, signIn, signOut }}>
            {children} {/* 👶 Componentes hijos dentro del proveedor */}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext); // 🎣 Hook para acceder al contexto fácilmente