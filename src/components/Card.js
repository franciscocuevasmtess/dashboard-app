import React from 'react';
import { motion } from 'framer-motion';

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

export default Card;