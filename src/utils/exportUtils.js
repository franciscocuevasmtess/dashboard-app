import React from 'react';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
//import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';

export const exportToExcel = (data, fileName = 'clientes') => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Clientes');
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
};

export const exportToPDF = (data, fileName = 'clientes') => {
    try {
        // Validación de datos
        if (!data || !Array.isArray(data) || data.length === 0) {
            throw new Error('No hay datos para exportar');
        }

        console.log('Datos recibidos para PDF:', {
            count: data.length,
            sample: data[0],
            allData: data
        });

        // Crear nuevo documento PDF
        const doc = new jsPDF();
    
        // Título
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(16);
        doc.text('Listado de Clientes', 105, 15, { align: 'center' });
    
        // Preparar datos para la tabla
        const tableData = data.map(item => [
            item.Nombre || 'N/A',
            item.Email || 'N/A',
            item.Empresa || 'N/A',
            item.Puesto || 'N/A',
            item.Estado || 'N/A'
        ]);

        // Crear tabla
        autoTable(doc, {
            head: [['Nombre', 'Email', 'Empresa', 'Puesto', 'Estado']],
            body: tableData,
            startY: 25,
            margin: { top: 20 },
            styles: {
                fontSize: 9,
                cellPadding: 3,
                valign: 'middle',
                halign: 'left',
                overflow: 'linebreak'
            },
            columnStyles: {
                0: { cellWidth: 'auto' },
                1: { cellWidth: 'auto' },
                2: { cellWidth: 'auto' },
                3: { cellWidth: 'auto' },
                4: { cellWidth: 'auto' }
            },
            didParseCell: (data) => {
                // Debugging: Verificar cada celda
                //console.log(`Celda [${data.row.index}, ${data.column.index}]:`, data.cell.raw);
            }
        });

        doc.save(`${fileName}.pdf`);
        console.log('PDF generado exitosamente');
    } catch (error) {
        console.error('Error al generar PDF:', error);
        alert(`Error al generar PDF: ${error.message}`);
    } 
    
};

export const exportToCSV = (data, fileName = 'clientes') => {
    const headers = ['Nombre', 'Email', 'Empresa', 'Puesto', 'Estado'];
    const csvRows = [];
    
    // Encabezados
    csvRows.push(headers.join(','));

    // Datos
    data.forEach(item => {
        const values = [
            `"${item.Nombre}"`,
            `"${item.Email}"`,
            `"${item.Empresa}"`,
            `"${item.Puesto}"`,
            `"${item.Estado}"`
        ];
        csvRows.push(values.join(','));
    });
    
    // Descargar
    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${fileName}.csv`;
    link.click();
};
