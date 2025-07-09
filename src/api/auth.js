/* 
 * 🌐 5. auth.js – Llamada a la API de Autenticación.
 * 
 * ✅ ¿Qué hace este archivo?
 * Simula un proceso de autenticación usando autenticación Basic HTTP .
 * En lugar de hacer un POST a un endpoint de login, estás haciendo un GET a /api/clientes y mandando 
 * credenciales en el header Authorization.
 * Usar GET con credenciales en encabezados no es seguro ni estándar.
 * Deberías tener un endpoint dedicado tipo /api/login.
 * Pero para pruebas locales funciona.
*/

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