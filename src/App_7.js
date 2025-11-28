//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import ListadoDeClientes from './pages/ListadoDeClientes';


function App() {
  /*
  * 🧩 1. App.js – El núcleo de la aplicación.
  *
  * ✅ ¿Qué hace este archivo?
  * Es el componente principal de la aplicación.
  * Usa:
  * BrowserRouter: Permite usar navegación real con URLs (/login, /clientes, etc).
  * Routes y Route: Define las rutas disponibles.
  * Navigate: Para redirigir automáticamente desde '/' a '/login'.
  * AuthProvider: Un contexto global que permite manejar la sesión del usuario. 
  */
  
  return (
    <AuthProvider> {/* 🔐 Proveemos el contexto de autenticación */}
      <BrowserRouter> {/* 🌐 Habilita el enrutamiento con URLs reales */}
        <Routes> {/* 🗺️ Define todas las rutas de la app */}
          <Route path="/" element={<Navigate to="/login" />} /> {/* 🏠 Redirige la raíz a /login */}
          <Route path="/login" element={<LoginPage />} /> {/* 👤 Página de login */}
          {/* <Route path="/clientes" element={<ClientesPage />} /> */} {/* 👥 Página protegida */}
          <Route path="/clientes" element={<ListadoDeClientes />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;