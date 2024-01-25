import React, { useState } from "react";

const Solicitar = () => {
  const [isAdditionalFieldsEnabled, setIsAdditionalFieldsEnabled] = useState(false);

  const handleAgregarClick = () => {
    setIsAdditionalFieldsEnabled(true);
  };

  // Add your form submit handler here
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="anio_aprobacion">Año de Aprobación:</label>
      <input type="number" id="anio_aprobacion" name="anio_aprobacion" required />

      <label htmlFor="apellido1">Primer Apellido:</label>
      <input type="text" id="apellido1" name="apellido1" required />

      <label htmlFor="autorizacion_publicacion">Autorización de Publicación (PDF):</label>
      <input type="file" id="autorizacion_publicacion" name="autorizacion_publicacion" accept="application/pdf" required />

      <label htmlFor="campo_investigacion">Campo de Investigación:</label>
      <input type="text" id="campo_investigacion" name="campo_investigacion" required />

      <label htmlFor="celular1">Celular:</label>
      <input type="tel" id="celular1" name="celular1" required />

      <label htmlFor="correo1">Correo Electrónico:</label>
      <input type="email" id="correo1" name="correo1" required />

      <label htmlFor="declaracion_jurada">Declaración Jurada (PDF):</label>
      <input type="file" id="declaracion_jurada" name="declaracion_jurada" accept="application/pdf" required />

      <label htmlFor="dni1">DNI:</label>
      <input type="text" id="dni1" name="dni1" required />

      <label htmlFor="facultad">Facultad:</label>
      <input type="text" id="facultad" name="facultad" required />

      <label htmlFor="grado_academico">Grado Académico:</label>
      <input type="text" id="grado_academico" name="grado_academico" required />

      <label htmlFor="id_solicitud">ID Solicitud:</label>
      <input type="text" id="id_solicitud" name="id_solicitud" required />

      <label htmlFor="linea_investigacion">Línea de Investigación:</label>
      <input type="text" id="linea_investigacion" name="linea_investigacion" required />

      <label htmlFor="modalidad">Modalidad:</label>
      <input type="text" id="modalidad" name="modalidad" required />

      <label htmlFor="nombre1">Nombre:</label>
      <input type="text" id="nombre1" name="nombre1" required />

      <label htmlFor="nombre_asesor">Nombre del Asesor:</label>
      <input type="text" id="nombre_asesor" name="nombre_asesor" required />

      <label htmlFor="nombre_jurado1">Nombre Jurado 1:</label>
      <input type="text" id="nombre_jurado1" name="nombre_jurado1" required />

      <label htmlFor="nombre_jurado2">Nombre Jurado 2:</label>
      <input type="text" id="nombre_jurado2" name="nombre_jurado2" required />

      <label htmlFor="nombre_jurado3">Nombre Jurado 3:</label>
      <input type="text" id="nombre_jurado3" name="nombre_jurado3" required />

      <label htmlFor="palabras_clave">Palabras Clave:</label>
      <input type="text" id="palabras_clave" name="palabras_clave" required />

      <label htmlFor="programa_estudio">Programa de Estudio:</label>
      <select id="programa_estudio" name="programa_estudio" required>
        {/* Add your options here */}
      </select>

      <label htmlFor="resumen_tesis">Resumen de Tesis:</label>
      <textarea id="resumen_tesis" name="resumen_tesis" required></textarea>

      <label htmlFor="tesis_digital">Tesis Digital (PDF):</label>
      <input type="file" id="tesis_digital" name="tesis_digital" accept="application/pdf" required />

      <label htmlFor="titulo_tesis">Título de Tesis:</label>
      <input type="text" id="titulo_tesis" name="titulo_tesis" />
      
      {/* Add any additional fields here based on your requirements */}
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default Solicitar;
