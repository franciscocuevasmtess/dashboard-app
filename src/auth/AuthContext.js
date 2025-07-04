/*
import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
//import { api } from './api';
import api from './api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            setUser(decoded);
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            const { token } = await api.login(email, password);
            localStorage.setItem('token', token);
            setUser(jwtDecode(token));
            return true;
        } catch (error) {
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
*/