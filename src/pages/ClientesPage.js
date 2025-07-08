import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const ClientesPage = () => {
    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(true);
    const { auth } = useAuth();

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/clientes', {
                    headers: {
                        'Authorization': 'Basic ' + btoa(`${auth.username}:${auth.password}`)
                    }
                });
                const data = await response.json();
                setClientes(data);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchClientes();
    }, [auth]);

    if (loading) return <p>Cargando clientes...</p>;

    return (
        <div>
            <h2>Lista de Clientes</h2>
            <ul>
                {clientes.map(cliente => (
                    <li key={cliente.id}>
                        {cliente.name} - {cliente.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClientesPage;