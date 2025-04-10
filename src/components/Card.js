import React from 'react';
import { motion } from 'framer-motion';

/* function Card({ titulo, valor }) {
  
  // return (
  //   <div style={styles.card}>
  //     <h3>{titulo}</h3>
  //     <p>{valor}</p>
  //   </div>
  // );
  
  return (
    <div className="bg-white p-5 rounded-lg shadow-md m-3 flex-1">
      <h3 className="text-lg font-semibold">{titulo}</h3>
      <p className="text-gray-700">{valor}</p>
    </div>
  );
  
} */


/* function Card({ titulo, valor, icono, colorFondo = 'bg-white' }) {
  return (
    <div className={`${colorFondo} p-6 rounded-lg shadow-md flex items-center space-x-4`}>
      {icono && <div className="text-3xl">{icono}</div>}
      <div>
        <h3 className="text-lg font-semibold text-gray-700">{titulo}</h3>
        <p className="text-2xl font-bold text-gray-900">{valor}</p>
      </div>
    </div>
  );
} */

/* function Card({ titulo, valor, icono, colorFondo = 'bg-white' }) {
  return (
    <motion.div
      className={`${colorFondo} p-6 rounded-lg shadow-md flex items-center space-x-4`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icono && <div className="text-3xl">{icono}</div>}
      <div>
        <h3 className="text-lg font-semibold text-gray-700">{titulo}</h3>
        <p className="text-2xl font-bold text-gray-900">{valor}</p>
      </div>
    </motion.div>
  );
} */

  function Card({ titulo, valor, icono, color = 'bg-blue-100' }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className={`${color} p-4 rounded-lg shadow-sm hover:shadow-md transition-all`}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{titulo}</p>
            <h3 className="text-2xl font-bold mt-1 text-gray-800">{valor}</h3>
          </div>
          {icono && (
            <span className="bg-white bg-opacity-30 p-2 rounded-full text-xl">
              {icono}
            </span>
          )}
        </div>
        {/* Barra progreso simulada */}
        <div className="mt-4">
          <div className="h-1 bg-white bg-opacity-50 rounded-full">
            <div 
              className="h-full bg-white rounded-full" 
              style={{ width: '70%' }}
            ></div>
          </div>
        </div>
      </motion.div>
    );
  }
  

const styles = {
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    flex: '1',
  },
};

export default Card;
