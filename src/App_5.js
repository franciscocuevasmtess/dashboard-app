import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Boton from './components/Boton';
import MenuMobile from './components/MenuMobile';
import Sidebar_4 from './components/Sidebar_4';
import Reportes_3 from './pages/Reportes_3';
import Card_3 from './components/Card_3';
import Configuracion_3 from './pages/Configuracion_3';
import Clientes from './pages/Clientes';
import Productos_1 from './pages/Productos_1';

function App_5() {
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <Router>
      <div className="flex flex-col h-screen">
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Mi Dashboard</h1>
          <MenuMobile />
        </header>
        
        <div className="flex flex-1 overflow-hidden">
          <Sidebar_4 />
          

          <main className="flex-1 overflow-auto p-4 bg-gray-50">
            {/* Rutas y contenido */}
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <div className="flex justify-between mb-5">
                      <Card_3
                        titulo="Ventas Totales"
                        valor="$5,000"
                        icono="💰"
                        colorFondo="bg-primary-100"
                      />
                      <Card_3
                        titulo="Usuarios Activos"
                        valor="1,200"
                        icono="👥"
                        colorFondo="bg-secondary-100"
                      />
                      <Card_3
                        titulo="Órdenes Nuevas"
                        valor="50"
                        icono="📦"
                        colorFondo="bg-danger-100"
                      />
                    </div>
                    {/* <div className="bg-white p-5 rounded-lg shadow-md">
                      <Grafico />
                    </div> */}
                    <div className="mt-5">
                      <Boton
                        texto="Abrir Modal"
                        tipo="primario"
                        onClick={() => setModalAbierto(true)}
                      />
                    </div>
                  </>
                }
              />
              <Route path="/reportes" element={<Reportes_3 />} />
              <Route path="/configuracion" element={<Configuracion_3 />} />
              <Route path="/clientes" element={<Clientes />} />
              <Route path="/productos" element={<Productos_1 />} />
              
              {/* HASTA AQUI LLEGUE
              https://chat.deepseek.com/share/hny34i748fx2t0e2el 
              Próximas mejoras sugeridas
              Autenticación: Agregar login con JWT
              Estado global: Implementar Redux o Context API
              Testing: Agregar pruebas con Jest
              Deploy: Subir a Vercel/Netlify */}

            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App_5;