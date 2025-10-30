import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header_1 from './components/Header_1';
import Sidebar_2 from './components/Sidebar_2';
import Card_1 from './components/Card_1';
import Reportes_2 from './pages/Reportes_2';
import Configuracion_2 from './pages/Configuracion_2';
import './index.css';


function App_2() {
  return (
    <Router>
      <div style={styles.container}>
        <Header_1 />
        <div style={styles.main}>
          <Sidebar_2 />
          <div style={styles.content}>
            <Routes>
              {/* Ruta para la página de inicio */}
              <Route
                path="/"
                element={
                  <>
                    <div style={styles.cardContainer}>
                      <Card_1 titulo="Ventas Totales" valor="$5,000" />
                      <Card_1 titulo="Usuarios Activos" valor="1,200" />
                      <Card_1 titulo="Órdenes Nuevas" valor="50" />
                    </div>
                    {/* <div style={styles.graficoContainer}>
                      <Grafico />
                    </div> */}
                  </>
                }
              />
              {/* Ruta para la página de reportes */}
              <Route path="/reportes" element={<Reportes_2 />} />
              {/* Ruta para la página de configuración */}
              <Route path="/configuracion" element={<Configuracion_2 />} />
            </Routes>
          </div>
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

export default App_2;