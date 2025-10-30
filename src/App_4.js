import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Boton from './components/Boton';
import Header_2 from './components/Header_2';
import Sidebar_3 from './components/Sidebar_3';
import Card_3 from './components/Card_3';
import Reportes_3 from './pages/Reportes_3';
import Configuracion_3 from './pages/Configuracion_3';
import Modal_1 from './components/Modal_1';

function App_4() {
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header_2 />
        <div className="flex flex-1">
          <Sidebar_3 />
          <div className="flex-1 p-5">
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
            </Routes>
          </div>
        </div>
      </div>

      <Modal_1 isOpen={modalAbierto} onClose={() => setModalAbierto(false)}>
        <h2 className="text-xl font-bold mb-4">Este es un modal</h2>
        <p className="text-gray-700">¡Puedes agregar cualquier contenido aquí!</p>
      </Modal_1>
    </Router>
  );
}

export default App_4;