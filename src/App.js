import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import Boton from './components/Boton';
import Modal from './components/Modal';
import Grafico from './components/Grafico';
import Inicio from './pages/Inicio';
import Reportes from './pages/Reportes';
import Configuracion from './pages/Configuracion';
import Clientes from './pages/Clientes';
import Productos from './pages/Productos';
import MenuMobile from './components/MenuMobile';
//import './App.css';

function App() {
  
  /* 
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.main}>
        <Sidebar />
        <div style={styles.content}>
          <div style={styles.cardContainer}>
            <Card titulo="Ventas Totales" valor="$5,000" />
            <Card titulo="Usuarios Activos" valor="1,200" />
            <Card titulo="Órdenes Nuevas" valor="50" />
          </div>
          <div style={styles.graficoContainer}>
            <Grafico />
          </div>
        </div>
      </div>
    </div>
  );
  */

  // return (
  //   <Router>
  //     <div style={styles.container}>
  //       <Header />
  //       <div style={styles.main}>
  //         <Sidebar />
  //         <div style={styles.content}>
  //           <Routes>
  //             {/* Ruta para la página de inicio */}
  //             <Route
  //               path="/"
  //               element={
  //                 <>
  //                   <div style={styles.cardContainer}>
  //                     <Card titulo="Ventas Totales" valor="$5,000" />
  //                     <Card titulo="Usuarios Activos" valor="1,200" />
  //                     <Card titulo="Órdenes Nuevas" valor="50" />
  //                   </div>
  //                   {/* <div style={styles.graficoContainer}>
  //                     <Grafico />
  //                   </div> */}
  //                 </>
  //               }
  //             />
  //             {/* Ruta para la página de reportes */}
  //             <Route path="/reportes" element={<Reportes />} />
  //             {/* Ruta para la página de configuración */}
  //             <Route path="/configuracion" element={<Configuracion />} />
  //           </Routes>
  //         </div>
  //       </div>
  //     </div>
  //   </Router>
  // );

  // return (
  //   <Router>
  //     <div className="flex flex-col h-screen">
  //       <Header />
  //       <div className="flex flex-1">
  //         <Sidebar />
  //         <div className="flex-1 p-5">
  //           <Routes>
  //             <Route
  //               path="/"
  //               element={
  //                 <>
  //                   <div className="flex justify-between mb-5">
  //                     <Card titulo="Ventas Totales" valor="$5,000" />
  //                     <Card titulo="Usuarios Activos" valor="1,200" />
  //                     <Card titulo="Órdenes Nuevas" valor="50" />
  //                   </div>
  //                   {/* <div className="bg-white p-5 rounded-lg shadow-md">
  //                     <Grafico />
  //                   </div> */}
  //                 </>
  //               }
  //             />
  //             <Route path="/reportes" element={<Reportes />} />
  //             <Route path="/configuracion" element={<Configuracion />} />
  //           </Routes>
  //         </div>
  //       </div>
  //     </div>
  //   </Router>
  // );


  // const [modalAbierto, setModalAbierto] = useState(false);

  // return (
  //   <Router>
  //     <div className="flex flex-col h-screen">
  //       <Header />
  //       <div className="flex flex-1">
  //         <Sidebar />
  //         <div className="flex-1 p-5">
  //           <Routes>
  //             <Route
  //               path="/"
  //               element={
  //                 <>
  //                   <div className="flex justify-between mb-5">
  //                     <Card
  //                       titulo="Ventas Totales"
  //                       valor="$5,000"
  //                       icono="💰"
  //                       colorFondo="bg-primary-100"
  //                     />
  //                     <Card
  //                       titulo="Usuarios Activos"
  //                       valor="1,200"
  //                       icono="👥"
  //                       colorFondo="bg-secondary-100"
  //                     />
  //                     <Card
  //                       titulo="Órdenes Nuevas"
  //                       valor="50"
  //                       icono="📦"
  //                       colorFondo="bg-danger-100"
  //                     />
  //                   </div>
  //                   {/* <div className="bg-white p-5 rounded-lg shadow-md">
  //                     <Grafico />
  //                   </div> */}
  //                   <div className="mt-5">
  //                     <Boton
  //                       texto="Abrir Modal"
  //                       tipo="primario"
  //                       onClick={() => setModalAbierto(true)}
  //                     />
  //                   </div>
  //                 </>
  //               }
  //             />
  //             <Route path="/reportes" element={<Reportes />} />
  //             <Route path="/configuracion" element={<Configuracion />} />
  //             <Route path="/clientes" element={<Clientes />} />
  //             <Route path="/productos" element={<Productos />} />
  //           </Routes>
  //         </div>
  //       </div>
  //     </div>

  //     <Modal isOpen={modalAbierto} onClose={() => setModalAbierto(false)}>
  //       <h2 className="text-xl font-bold mb-4">Este es un modal</h2>
  //       <p className="text-gray-700">¡Puedes agregar cualquier contenido aquí!</p>
  //     </Modal>
  //   </Router>
  // );


  const [sidebarAbierto, setSidebarAbierto] = useState(false);

  return (
    <Router>
      <div className="flex flex-col h-screen bg-gray-100">
        {/* Header con menú móvil */}
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
          <h1 className="text-xl font-bold">Dashboard Pro</h1>
          <MenuMobile 
            abierto={sidebarAbierto} 
            setAbierto={setSidebarAbierto} 
          />
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar - Visible en desktop, oculto en móvil */}
          <div className={`${sidebarAbierto ? 'block' : 'hidden'} md:block fixed md:relative z-20 w-64 h-full bg-gray-100`} >
            <Sidebar />
          </div>

          {/* Overlay para móvil cuando el sidebar está abierto */}
          {sidebarAbierto && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
              onClick={() => setSidebarAbierto(false)}
            ></div>
          )}

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
                    {/* <div className="bg-white p-4 md:p-6 rounded-lg shadow mb-6">
                      <Grafico />
                    </div> */}
                  </>
                }
              />
              <Route path="/clientes" element={<Clientes />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/reportes" element={<Reportes />} />
              <Route path="/configuracion" element={<Configuracion />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );

}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  main: {
    display: 'flex',
    flex: '1',
  },
  content: {
    flex: '1',
    padding: '20px',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  graficoContainer: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
};

export default App;