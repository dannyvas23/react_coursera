import React from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const ExportPDF = () => {
  // Datos de ejemplo para la tabla
  const tableData = [
    { id: 1, nombre: 'Juan Pérez', edad: 30, ciudad: 'Madrid' },
    { id: 2, nombre: 'Ana García', edad: 25, ciudad: 'Barcelona' },
    { id: 3, nombre: 'Luis Rodríguez', edad: 35, ciudad: 'Valencia' },
    { id: 4, nombre: 'Marta López', edad: 28, ciudad: 'Sevilla' },
  ];

  // Función para generar el PDF
  const generatePDF = () => {
    const doc = new jsPDF();

    // Definimos las cabeceras de la tabla
    const columns = [
      { title: 'ID', dataKey: 'id' },
      { title: 'Nombre', dataKey: 'nombre' },
      { title: 'Edad', dataKey: 'edad' },
      { title: 'Ciudad', dataKey: 'ciudad' },
    ];

    // Función para crear estilos dinámicos
    const generateColumnStyles = () => {
      // Definir estilos base
      const baseStyles = {
        fontSize: 12,
        halign: 'center',
        fontStyle: 'normal',
      };

      // Creamos un objeto de estilos dinámicos
      const dynamicStyles = {};

      // Estilos personalizados para cada columna (podemos agregar más lógica aquí)
      tableData.forEach((row, index) => {
        if (!dynamicStyles[index]) {
          dynamicStyles[index] = { ...baseStyles };
        }

        // Ejemplo de cómo hacer dinámicos los estilos según los datos:
        if (index === 0) {
          // Para la columna ID (columna 0), aplicar un fondo azul y texto blanco
          dynamicStyles[0] = { ...dynamicStyles[0], fillColor: [0, 102, 204], textColor: [255, 255, 255], fontStyle: 'bold' };
        }
        if (index === 1) {
          // Para la columna Nombre (columna 1), aplicar un fondo amarillo y texto negro
          dynamicStyles[1] = { ...dynamicStyles[1], fillColor: [255, 204, 0], textColor: [0, 0, 0], halign: 'left' };
        }
        if (index === 2) {
          // Para la columna Edad (columna 2), aplicar un fondo azul claro y texto en cursiva
          dynamicStyles[2] = { ...dynamicStyles[2], fillColor: [204, 255, 255], textColor: [0, 0, 0], fontStyle: 'italic' };
        }
        if (index === 3) {
          // Para la columna Ciudad (columna 3), aplicar un fondo rojo claro y texto en negrita
          dynamicStyles[3] = { ...dynamicStyles[3], fillColor: [255, 204, 204], textColor: [0, 0, 0], fontStyle: 'bold' };
        }
      });

      return dynamicStyles;
    };

    // Generamos los estilos dinámicos para las columnas
    const columnStyles = generateColumnStyles();

    // Opciones generales de la tabla
    const tableOptions = {
      headStyles: {
        fillColor: [0, 102, 204], // Fondo de la cabecera
        textColor: [255, 255, 255], // Color del texto
        fontSize: 12,
        fontStyle: 'bold',
        halign: 'center', // Alineación horizontal de las cabeceras
      },
      bodyStyles: {
        fontSize: 10,
        halign: 'center', // Alineación horizontal del cuerpo
      },
      margin: { top: 20, bottom: 20, left: 20, right: 20 },
      styles: {
        cellPadding: 5,
        lineWidth: 0.1,
        lineColor: [0, 0, 0],
      },
      theme: 'striped', // Alternancia de colores en las filas
      startY: 40, // La tabla comienza a partir de 40mm desde la parte superior
      columnStyles, // Estilos dinámicos por columna
    };

    // Agregamos la tabla al PDF con las opciones de columnas personalizadas
    doc.autoTable({
      columns: columns,  // Definimos las columnas
      body: tableData,   // Los datos a mostrar en la tabla
      ...tableOptions,   // Aplicamos las opciones generales y de personalización
    });

    // Guardamos el archivo PDF
    doc.save('tabla_personalizada.pdf');
  };

  return (
    <div>
      <button onClick={generatePDF}>Generar PDF</button>
    </div>
  );
};

export default ExportPDF;
