import React from "react";
import '../hojas-de-estilo/Tarea.css'

function Tarea({ texto }) {
  return (

    <div className="tarea-contendor">
      <div className="tarea-texto">
        {texto}
      </div>
      <div className="tarea-icono">
        eliminar
      </div>

    </div>
  );
}

export default Tarea