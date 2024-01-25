// Revisar.js

import React, { useEffect } from "react";
import enviarCorreo from "./enviarCorreo"; // Ajusta la ruta según la estructura de tus archivos

const Revisar = () => {
  useEffect(() => {
    const enviarEmail = async () => {
      try {
        const mensaje = await enviarCorreo();
        console.log(mensaje);
      } catch (error) {
        console.error(error.message);
      }
    };

    enviarEmail();
  }, []);

  return <div>Revisar</div>;
};

export default Revisar;
