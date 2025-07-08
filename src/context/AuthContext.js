import { createContext, useContext, useState } from 'react';
import { login, logout } from '../api/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => {
        // Recuperar credenciales del localStorage si existen
        const savedAuth = localStorage.getItem('auth');
        return savedAuth ? JSON.parse(savedAuth) : null;
    });

    const signIn = async (username, password) => {
        try {
            const userData = await login(username, password);
            setAuth(userData);
            localStorage.setItem('auth', JSON.stringify(userData));
            return true;
        } catch (error) {
            console.error('Login failed:', error);
            return false;
        }
    };

    const signOut = () => {
        logout();
        setAuth(null);
        localStorage.removeItem('auth');
    };

    return (
        <AuthContext.Provider value={{ auth, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);