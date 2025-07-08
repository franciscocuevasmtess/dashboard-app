import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    ArrowUturnLeftIcon,
    CheckCircleIcon,
    ExclamationCircleIcon, 
    XMarkIcon 
} from '@heroicons/react/24/outline';

const NuevoCliente = ({ onSubmit }) => {

    const navigate = useNavigate();

    const [cliente, setCliente] = useState({
        name: '',
        email: '',
        empresa: '',
        puesto: '',
        estado: true
    });
    
    const [errores, setErrores] = useState({});
    const [enviando, setEnviando] = useState(false);
    const [mensajeExito, setMensajeExito] = useState('');
    const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setCliente({
            ...cliente,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const validarFormulario = () => {
        const nuevosErrores = {};
        //const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!cliente.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es requerido';
        } else if (cliente.nombre.length < 3) {
            nuevosErrores.nombre = 'El nombre debe tener al menos 3 caracteres';
        }

        //if (!cliente.email.trim()) {
        //    nuevosErrores.email = 'El email es requerido';
        //} else if (!emailRegex.test(cliente.email)) {
        //    nuevosErrores.email = 'Email no válido';
        //}

        //if (!cliente.empresa.trim()) {
        //    nuevosErrores.empresa = 'La empresa es requerida';
        //}

        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setMostrarConfirmacion(false);
    
        if (!validarFormulario()) return;

        setEnviando(true);

        try {
            const response = await fetch('http://localhost:8080/api/clientes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: cliente.nombre,
                    email: cliente.email,
                    empresa: cliente.empresa,
                    puesto: cliente.puesto,
                    estado: cliente.estado
                }),
            });

            if (!response.ok) {
                throw new Error('Error en la respuesta del servidor');
            }

            setMensajeExito('Cliente creado exitosamente!');
            setTimeout(() => {
                navigate('/clientes');
            }, 1500);
        } catch (error) {
            console.error('Error:', error);
            setErrores({ general: 'Error al crear el cliente. Intente nuevamente.' });
        } finally {
            setEnviando(false);
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Nuevo Cliente</h1>
                <button
                    onClick={() => navigate('/clientes')}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                >
                    <ArrowUturnLeftIcon className="h-5 w-5" />
                    Volver al listado
                </button>
            </div>

            {mensajeExito && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5" />
                    {mensajeExito}
                </div>
            )}

            {errores.general && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg flex items-center gap-2">
                    <ExclamationCircleIcon className="h-5 w-5" />
                    {errores.general}
                </div>
            )}

            {mostrarConfirmacion && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold">Confirmar</h3>
                            <button onClick={() => setMostrarConfirmacion(false)} className="text-gray-500 hover:text-gray-700">
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        </div>
                        <p className="mb-6">¿Estás seguro que deseas guardar este cliente?</p>
                        <div className="flex justify-end gap-3">
                            <button 
                                onClick={() => setMostrarConfirmacion(false)}
                                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                            >
                                Cancelar
                            </button>
                            <button 
                                onClick={handleSubmit}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Campo Nombre */}
                    <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                            Nombre Completo *
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={cliente.nombre}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-lg ${errores.nombre ? 'border-red-500' : 'border-gray-300'}`}
                            disabled={enviando}
                        />
                            {errores.nombre && <p className="mt-1 text-sm text-red-600">{errores.nombre}</p>}
                    </div>

                    {/* Campo Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={cliente.email}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-lg ${errores.email ? 'border-red-500' : 'border-gray-300'}`}
                            disabled={enviando}
                        />
                            {errores.email && <p className="mt-1 text-sm text-red-600">{errores.email}</p>}
                    </div>

                    {/* Campo Empresa */}
                    <div>
                        <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-1">
                            Empresa
                        </label>
                        <input
                            type="text"
                            id="empresa"
                            name="empresa"
                            value={cliente.empresa}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-lg ${errores.empresa ? 'border-red-500' : 'border-gray-300'}`}
                            disabled={enviando}
                        />
                        {errores.empresa && <p className="mt-1 text-sm text-red-600">{errores.empresa}</p>}
                    </div>

                    {/* Campo Puesto */}
                    <div>
                        <label htmlFor="puesto" className="block text-sm font-medium text-gray-700 mb-1">
                            Puesto
                        </label>
                        <input
                            type="text"
                            id="puesto"
                            name="puesto"
                            value={cliente.puesto}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            disabled={enviando}
                        />
                    </div>

                    {/* Campo Estado */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="estado"
                            name="estado"
                            checked={cliente.estado}
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 rounded"
                            disabled={enviando}
                        />
                        <label htmlFor="estado" className="ml-2 block text-sm text-gray-700">
                            Cliente activo
                        </label>
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    <button 
                        type="button"
                            onClick={() => setMostrarConfirmacion(true)}
                            disabled={enviando}
                            className={`px-6 py-2 rounded-lg text-white font-medium ${enviando ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}
                    >
                        {enviando ? 'Guardando...' : 'Guardar Cliente'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NuevoCliente;