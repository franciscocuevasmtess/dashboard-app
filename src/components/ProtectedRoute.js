import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {

    /*
     * 🛡️ 3. ProtectedRoute.js – Ruta Protegida.
     *
     * ✅ ¿Para qué sirve?
     * Evita que usuarios no autenticados puedan acceder a ciertas páginas como /clientes.
     * Si alguien intenta entrar sin estar logueado, es redirigido a /login.
    */

    const { auth } = useAuth();
    
    if (!auth) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;