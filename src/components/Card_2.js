import React from 'react';

function Card_2({ titulo, valor }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md m-3 flex-1">
      <h3 className="text-lg font-semibold">{titulo}</h3>
      <p className="text-gray-700">{valor}</p>
    </div>
  );
}

export default Card_2;