import { useState, useEffect } from 'react';
import apiClient from '../api/client';
import { useAuth } from '../context/AuthContext';

const ClientesList = () => {
    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { auth } = useAuth();

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await apiClient.get('/clientes');
                setClientes(response.data);
            } catch (err) {
                setError('Error al cargar clientes');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (auth) {
            fetchClientes();
        }
    }, [auth]);

    if (!auth) return <p>Debes iniciar sesión para ver los clientes</p>;
    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <ul>
            {clientes.map(cliente => (
                <li key={cliente.id}>{cliente.name} - {cliente.email}</li>
            ))}
        </ul>
    );
};

export default ClientesList;