import React from 'react';
import { motion } from 'framer-motion';

function Card_3({ titulo, valor, icono, colorFondo = 'bg-white' }) {
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
}

export default Card_3;