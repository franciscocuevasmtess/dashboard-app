import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { obtenerClientes } from '../api/clientes';


// function Clientes() {
//     return (
//         <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="p-5"
//         >
//             <h2 className="text-2xl font-bold mb-4">Clientes</h2>
//             <div className="bg-white rounded-lg shadow p-4">
//                 {/* Tabla de clientes se agregará cuando integremos la API */}
//                 <p>Listado de clientes aparecerá aquí</p>
//             </div>
//         </motion.div>
//     );
// }

function Clientes() {
    const [clientes, setClientes] = useState([]);
    const [cargando, setCargando] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await obtenerClientes();
                setClientes(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setCargando(false);
            }
        };
        
        fetchData();
    }, []);
  
    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold mb-4">Clientes</h2>
        
            {cargando ? (
                <div className="flex justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg overflow-hidden">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-3 px-4 text-left">Nombre</th>
                                <th className="py-3 px-4 text-left">Email</th>
                                <th className="py-3 px-4 text-left">Empresa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map(cliente => (
                                <tr key={cliente.id} className="border-b hover:bg-gray-50">
                                    <td className="py-3 px-4">{cliente.nombre}</td>
                                    <td className="py-3 px-4">{cliente.email}</td>
                                    <td className="py-3 px-4">{cliente.empresa}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default Clientes;