import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header_2 from './components/Header_2';
import Sidebar_3 from './components/Sidebar_3';
import Card_2 from './components/Card_2';
import Reportes_3 from './pages/Reportes_3';
import Configuracion_3 from './pages/Configuracion_3';

function App_3() {
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
                      <Card_2 titulo="Ventas Totales" valor="$5,000" />
                      <Card_2 titulo="Usuarios Activos" valor="1,200" />
                      <Card_2 titulo="Órdenes Nuevas" valor="50" />
                    </div>
                    {/* <div className="bg-white p-5 rounded-lg shadow-md">
                      <Grafico />
                    </div> */}
                  </>
                }
              />
              <Route path="/reportes" element={<Reportes_3 />} />
              <Route path="/configuracion" element={<Configuracion_3 />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App_3;