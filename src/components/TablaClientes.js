import React from 'react';

const TablaClientes = () => {
    // Datos de ejemplo (reemplaza con tus datos reales)
    const clientes = [
        { id: 1, nombre: 'John Michael', email: 'john@example.com', puesto: 'Manager', estado: 'Activo' },
        { id: 2, nombre: 'Alexa Smith', email: 'alexa@example.com', puesto: 'Programador', estado: 'Inactivo' },
        { id: 3, nombre: 'Laurent Perrier', email: 'laurent@example.com', puesto: 'Ejecutivo', estado: 'Activo' },
        { id: 4, nombre: 'Michael Levi', email: 'michael@example.com', puesto: 'Diseñador', estado: 'Activo' },
        { id: 5, nombre: 'Richard Gran', email: 'richard@example.com', puesto: 'Manager', estado: 'Inactivo' },
    ];

    return (
        <div className="bg-white shadow rounded-lg overflow-hidden mt-6">
            <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Lista de Clientes</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Puesto</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {clientes.map((cliente) => (
                            <tr key={cliente.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                            <span className="text-indigo-600 font-medium">
                                                {cliente.nombre.charAt(0)}
                                            </span>
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">{cliente.nombre}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {cliente.email}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {cliente.puesto}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                        ${cliente.estado === 'Activo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {cliente.estado}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                                        Editar
                                    </button>
                                    <button className="text-red-600 hover:text-red-900">
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                    Mostrando <span className="font-medium">1</span> a <span className="font-medium">5</span> de <span className="font-medium">5</span> resultados
                </div>
                <div className="flex space-x-2">
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                        Anterior
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TablaClientes;