import React, { useState } from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LoginForm from './pages/LoginPage';
import ClientesList from './pages/ClientesList';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import Reportes from './pages/Reportes';
import Configuracion from './pages/Configuracion';
import ListaClientes from './pages/ListaClientes';
import Productos from './pages/Productos';
import NuevoCliente from './pages/NuevoCliente';
import EditarCliente from './pages/EditarCliente';
import LoginPage from './pages/LoginPage';
import ClientesPage from './pages/ClientesPage';

/* 
function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen bg-gray-100">
        {/* Header *
        <header className="bg-gray-800 text-white p-4 shadow-md flex items-center justify-between">
          <h1 className="text-xl font-bold ml-12 md:ml-0 transition-all duration-300">
            Dashboard Pro
          </h1>
        </header>
        
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar *
          <Sidebar />
          
          {/* Contenido principal *
          <main className="flex-1 overflow-auto p-4 md:p-6 bg-gray-50">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                      <Card titulo="Ventas Totales" valor="$5,000" icono="💰" />
                      <Card titulo="Usuarios Activos" valor="1,200" icono="👥" />
                      <Card titulo="Órdenes Nuevas" valor="50" icono="📦" />
                    </div>
                  </>
                }
              />
              <Route path="/clientes/lista" element={<ListaClientes />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/reportes" element={<Reportes />} />
              <Route path="/configuracion" element={<Configuracion />} />
              <Route path="/clientes/nuevo" element={<NuevoCliente />} />
              <Route path="/clientes/editar/:id" element={<EditarCliente />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
} 
*/

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/clientes" element={<ClientesPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}


export default App;