import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import Reportes from './pages/Reportes';
import Configuracion from './pages/Configuracion';
import Clientes from './pages/Clientes';
import Productos from './pages/Productos';
import Login from './pages/Login';
import { 
  Bars3Icon, 
  XMarkIcon,
  ShoppingBagIcon, 
  UserIcon,
  HomeIcon,
  ChartBarIcon,
  CogIcon
} from '@heroicons/react/24/outline';
import { ThemeProvider } from './context/ThemeContext';
import TablaClientes from './components/TablaClientes';
import NuevoCliente from './pages/NuevoCliente';
import EditarCliente from './pages/EditarCliente';


function App() {
  /* 
  const [sidebarAbierto, setSidebarAbierto] = useState(false);

  return (
    <Router>
      <div className="flex flex-col h-screen bg-gray-100">
        
        {/* Header con menú móvil *
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
          <h1 className="text-xl font-bold">Dashboard Pro</h1>
          <MenuMobile abierto={sidebarAbierto} setAbierto={setSidebarAbierto} />
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar - Visible en desktop, oculto en móvil *
          <div className={`${sidebarAbierto ? 'block' : 'hidden'} md:block fixed md:relative z-20 w-64 h-full bg-gray-100`} >
            <Sidebar />
          </div>

          {/* Overlay para móvil cuando el sidebar está abierto *
          {sidebarAbierto && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
              onClick={() => setSidebarAbierto(false)}
            ></div>
          )}

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
                    {/* <div className="bg-white p-4 md:p-6 rounded-lg shadow mb-6"><Grafico /></div> *
                  </>
                }
              />
              <Route path="/clientes" element={<Clientes />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/reportes" element={<Reportes />} />
              <Route path="/configuracion" element={<Configuracion />} />
              {/* <Route path="/login" element={<Login />} /> *
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
  */
  
  return (
    <Router>
      <div className="flex flex-col h-screen bg-gray-100">
        {/* Header simplificado */}
        {/* <header className="bg-gray-800 text-white p-4 shadow-md"> */}
        <header className="bg-gray-800 text-white p-4 shadow-md flex items-center justify-between">
          {/* <h1 className="text-xl font-bold"> */}
          <h1 className="text-xl font-bold ml-12 md:ml-0 transition-all duration-300">
            Dashboard Pro
          </h1>
        </header>
        
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar ahora se maneja solo */}
          <Sidebar />
          
          {/* Contenido principal */}
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
                    <TablaClientes />
                  </>
                }
              />
              <Route path="/clientes" element={<Clientes />} />
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

export default App;