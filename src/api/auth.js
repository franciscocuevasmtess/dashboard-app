export const login = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/clientes', {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + btoa(`${username}:${password}`)
        }
    });
    
    if (!response.ok) {
        throw new Error('Credenciales inválidas');
    }
    
    return { username, password };
};

export const logout = () => {
    // Limpiar cualquier credencial almacenada
    localStorage.removeItem('auth');
};