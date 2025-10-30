import React from 'react';
import Header_1 from './components/Header_1';
import Sidebar_1 from './components/Sidebar_1';
import Card_1 from './components/Card_1';
import Grafico from './components/Grafico';
import './index_1.css';

function App_1() {
  return (
    <div style={styles.container}>
      <Header_1 />
      <div style={styles.main}>
        <Sidebar_1 />
        <div style={styles.content}>
          <div style={styles.cardContainer}>
            <Card_1 titulo="Ventas Totales" valor="$5,000" />
            <Card_1 titulo="Usuarios Activos" valor="1,200" />
            <Card_1 titulo="Órdenes Nuevas" valor="50" />
          </div>
          {/* <div style={styles.graficoContainer}>
            <Grafico />
          </div> */}
        </div>
      </div>
    </div>
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

export default App_1;