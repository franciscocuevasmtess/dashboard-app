import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import {  PlusCircleIcon } from '@heroicons/react/24/outline';

const ClientesPage = () => {
    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(true);
    const { auth } = useAuth();

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/clientes', {
                    headers: {
                        'Authorization': 'Basic ' + btoa(`${auth.username}:${auth.password}`)
                    }
                });
                const data = await response.json();
                setClientes(data);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchClientes();
    }, [auth]);

    if (loading) return <p>Cargando clientes...</p>;

    return (
        <div className="p-4">
            {/* Input de búsqueda */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Buscar clientes..."
                    className="w-full md:w-1/3 p-2 border rounded-lg"
                    /* value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);  // Actualiza el término de búsqueda
                        setPaginaActual(1); // Reinicia la página a la 1 cuando se filtra
                    }} */
                />
            </div>

            {/* Botones de exportación */}
            {/* <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => exportToExcel(prepararDatosExportacion(), 'clientes')}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                    <TableCellsIcon className="h-5 w-5" />
                    Exportar Excel
                </button>
                <button
                    onClick={() => exportToPDF(prepararDatosExportacion(), 'clientes')}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                    <DocumentTextIcon className="h-5 w-5" />
                    Exportar PDF
                </button>
                <button
                    onClick={() => exportToCSV(prepararDatosExportacion(), 'clientes')}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <DocumentIcon className="h-5 w-5" />
                    Exportar CSV
                </button>
            </div> */}

            <div className="p-5">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold mb-4">Clientes</h2>
                    {/* Botón para crear nuevo cliente */}
                    <Link 
                        to="/clientes/nuevo"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        <PlusCircleIcon className="h-5 w-5" />
                        Nuevo Cliente
                    </Link>
                </div>

                {/* <ConfirmModal
                    isOpen={clienteAEliminar !== null}
                    onClose={() => setClienteAEliminar(null)}
                    onConfirm={confirmarEliminacion}
                    title="Confirmar eliminación"
                    message="¿Estás seguro que deseas eliminar este cliente? Esta acción no se puede deshacer."
                    confirmText={eliminando ? "Eliminando..." : "Sí, eliminar"}
                    cancelText="Cancelar"
                /> */}

                {/* {error && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 border border-red-300 rounded">
                        {error}
                    </div>
                )} */}

                {/* Indicador de carga mientras se obtienen datos */}
                {/* {cargando ? (
                    <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
                    </div>
                ) : (
                    <> */}
                        {/* Tabla de clientes */}
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white rounded-lg overflow-hidden">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th 
                                            className="py-3 px-4 text-left cursor-pointer hover:bg-gray-200"
                                            /* onClick={() => manejarOrden('nombre')} */
                                        >
                                            <div className="flex items-center">
                                                Nombre
                                                {/* <IndicadorOrden campo="nombre" /> */}
                                            </div>
                                        </th>
                                        <th 
                                            className="py-3 px-4 text-left cursor-pointer hover:bg-gray-200"
                                            /* onClick={() => manejarOrden('email')} */
                                        >
                                            <div className="flex items-center">
                                                Email
                                                {/* <IndicadorOrden campo="email" /> */}
                                            </div>
                                        </th>
                                        <th 
                                            className="py-3 px-4 text-left cursor-pointer hover:bg-gray-200"
                                            /* onClick={() => manejarOrden('empresa')} */
                                        >
                                            <div className="flex items-center">
                                                Empresa
                                                {/* <IndicadorOrden campo="empresa" /> */}
                                            </div>
                                        </th>
                                        <th 
                                            className="py-3 px-4 text-left cursor-pointer hover:bg-gray-200"
                                            /* onClick={() => manejarOrden('puesto')} */
                                        >
                                            <div className="flex items-center">
                                                Puesto
                                                {/* <IndicadorOrden campo="puesto" /> */}
                                            </div>
                                        </th>
                                        <th 
                                            className="py-3 px-4 text-left cursor-pointer hover:bg-gray-200"
                                            /* onClick={() => manejarOrden('estado')} */
                                        >
                                            <div className="flex items-center">
                                                Estado
                                                {/* <IndicadorOrden campo="estado" /> */}
                                            </div>
                                        </th>
                                        <th className="py-3 px-4 text-left cursor-pointer hover:bg-gray-200">
                                            <div className="flex items-center">
                                                Acciones
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {clientesPaginaActual.map(cliente => (
                                        // Cada fila tiene animación al aparecer usando Framer Motion
                                        <motion.tr 
                                            key={cliente.id} 
                                            className="border-b hover:bg-gray-50"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <td className="py-3 px-4">{cliente.nombre}</td>
                                            <td className="py-3 px-4">{cliente.email}</td>
                                            <td className="py-3 px-4">{cliente.empresa}</td>
                                            <td className="py-3 px-4">{cliente.puesto}</td>
                                            <td className="py-3 px-4">
                                                {/* Badge de estado con color según "Activo" o "Inactivo" *
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                    cliente.estado === 'Activo' 
                                                        ? 'bg-green-100 text-green-800' 
                                                        : 'bg-red-100 text-red-800'
                                                }`}>
                                                    {cliente.estado}
                                                </span>
                                            </td>
                                            <td className="py-3 px-4">
                                                <Link 
                                                    to={`/clientes/editar/${cliente.id}`}
                                                    className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded mr-2"
                                                >
                                                    Editar
                                                </Link>
                                                <button
                                                    onClick={() => handleEliminarClick(cliente.id)}
                                                    className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded"
                                                    title="Eliminar"
                                                    disabled={eliminando}
                                                >
                                                    <TrashIcon className="h-5 w-5" />
                                                </button>
                                            </td>
                                        </motion.tr>
                                    ))} */}
                                </tbody>
                            </table>
                        </div>

                        {/* Controles de paginación */}
                        {/* <div className="flex items-center justify-between mt-4">
                            {/* Info de resultados visibles *
                            <div className="text-sm text-gray-500">
                                Mostrando <span className="font-medium">{indexPrimerCliente + 1}</span> a{' '}
                                <span className="font-medium">
                                    {Math.min(indexUltimoCliente, filteredClientes.length)}
                                </span> de{' '}
                                <span className="font-medium">{filteredClientes.length}</span> resultados
                            </div>
                            
                            {/* Botones de paginación *
                            <div className="flex space-x-2">
                                {/* Botón anterior *
                                <button
                                    onClick={paginaAnterior}
                                    disabled={paginaActual === 1}
                                    className={`px-3 py-1 border rounded-md text-sm font-medium ${
                                        paginaActual === 1
                                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                            : 'bg-white text-gray-700 hover:bg-gray-50'
                                    }`}
                                >
                                    Anterior
                                </button>
                                
                                {/* Botones de número de página *
                                <div className="hidden sm:flex space-x-1">
                                    {Array.from({ length: Math.min(5, totalPaginas) }, (_, i) => {
                                        let pagina;
                                        // Lógica para mostrar páginas correctamente si son muchas
                                        if (totalPaginas <= 5) {
                                            pagina = i + 1;
                                        } else if (paginaActual <= 3) {
                                            pagina = i + 1;
                                        } else if (paginaActual >= totalPaginas - 2) {
                                            pagina = totalPaginas - 4 + i;
                                        } else {
                                            pagina = paginaActual - 2 + i;
                                        }
                                        
                                        return (
                                            <button
                                                key={pagina}
                                                onClick={() => paginar(pagina)}
                                                className={`px-3 py-1 border rounded-md text-sm font-medium ${
                                                    pagina === paginaActual
                                                        ? 'bg-blue-500 text-white border-blue-500'
                                                        : 'bg-white text-gray-700 hover:bg-gray-50'
                                                }`}
                                            >
                                                {pagina}
                                            </button>
                                        );
                                    })}

                                    {/* Puntos suspensivos y botón para última página *
                                    {totalPaginas > 5 && paginaActual < totalPaginas - 2 && (
                                        <span className="px-3 py-1">...</span>
                                    )}
                                    
                                    {totalPaginas > 5 && paginaActual < totalPaginas - 2 && (
                                        <button
                                            onClick={() => paginar(totalPaginas)}
                                            className={`px-3 py-1 border rounded-md text-sm font-medium ${
                                                paginaActual === totalPaginas
                                                    ? 'bg-blue-500 text-white border-blue-500'
                                                    : 'bg-white text-gray-700 hover:bg-gray-50'
                                            }`}
                                        >
                                            {totalPaginas}
                                        </button>
                                    )}
                                </div>
                                
                                {/* Botón siguiente *
                                <button
                                    onClick={paginaSiguiente}
                                    disabled={paginaActual === totalPaginas}
                                    className={`px-3 py-1 border rounded-md text-sm font-medium ${
                                        paginaActual === totalPaginas
                                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                            : 'bg-white text-gray-700 hover:bg-gray-50'
                                    }`}
                                >
                                    Siguiente
                                </button>
                            </div>
                        </div> */}

                    {/* </>
                )} */}
                
                <h2>Lista de Clientes2</h2>
                <ul>
                    {clientes.map(cliente => (
                        <li key={cliente.id}>
                            {cliente.name} - {cliente.email}
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    );
};

export default ClientesPage;