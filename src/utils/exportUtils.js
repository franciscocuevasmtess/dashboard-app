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
    
    //console.log('Datos a exportar:', JSON.stringify(data, null, 2));

    // Crear nuevo documento PDF
    //const doc = new jsPDF();
    
    // Título
    //doc.setFontSize(18);
    //doc.setTextColor(40, 40, 40);
    //doc.text('Listado de Clientes', 14, 16);
    


    /* // Tabla
    doc.autoTable({
        head: [['Nombre', 'Email', 'Empresa', 'Puesto', 'Estado']],
        body: data.map(item => [
            item.nombre,
            item.email,
            item.empresa,
            item.puesto,
            item.estado
        ]),
        startY: 20,
        styles: {
            cellPadding: 3,
            fontSize: 10,
            valign: 'middle',
            halign: 'left',
        },
        headStyles: {
            fillColor: [41, 128, 185],
            textColor: 255,
            fontStyle: 'bold'
        },
        alternateRowStyles: {
            fillColor: [245, 245, 245]
        }
    }); */
    
    /* // Configurar la tabla
    autoTable(doc, {
        head: [['Nombre', 'Email', 'Empresa', 'Puesto', 'Estado']],
        body: data.map(item => [
            // item.nombre,
            item.Nombre,
            item.Email,
            item.Empresa,
            item.Puesto,
            item.Estado
        ]),
        startY: 25, // Espacio después del título
        margin: { top: 20 },
        styles: {
            fontSize: 10,
            cellPadding: 4,
            valign: 'middle',
            halign: 'left',
        },
        headStyles: {
            fillColor: [41, 128, 185],
            textColor: 255,
            fontStyle: 'bold'
        },
        alternateRowStyles: {
            fillColor: [245, 245, 245]
        },
        didDrawPage: (data) => {
            // Footer
            doc.setFontSize(10);
            doc.setTextColor(150);
            const pageCount = doc.internal.getNumberOfPages();
            doc.text(`Página ${data.pageNumber} de ${pageCount}`, data.settings.margin.left, doc.internal.pageSize.height - 10);
        }
    }); */

    /* // Importación dinámica para evitar problemas de carga
    import('jspdf').then(({ jsPDF }) => {
        import('jspdf-autotable').then((autoTable) => {
            const doc = new jsPDF();
            
            // Título
            doc.text('Listado de Clientes', 14, 16);
            
            // Usar autoTable del plugin cargado
            autoTable.default(doc, {
                head: [['Nombre', 'Email', 'Empresa', 'Puesto', 'Estado']],
                body: data.map(item => [
                    item.nombre,
                    item.email,
                    item.empresa,
                    item.puesto,
                    item.estado
                ]),
                startY: 20
            });

            doc.save(`${fileName}.pdf`);
        });
    }).catch(error => {
        console.error('Error al cargar las librerías PDF:', error);
        alert('Error al generar el PDF. Por favor recarga la página.');
    }); */

    // Guardar el PDF
    //doc.save(`${fileName}.pdf`);

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

        //console.log('Datos formateados para tabla:', tableData);

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
