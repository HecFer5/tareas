import React, { useState } from 'react';
import TareaFoirmulario from "./TareaFormulario";
import '../hojas-de-estilo/ListaDeTareas.css';
import Tarea from './Tarea';

function ListaDeTareas() {
    const [tareas, setTareas]= useState([]);
const agregarTarea = tarea => {
    console.log("Tarea agregada");
    console.log(tarea);
}

   return (
    <>
    <TareaFoirmulario />
    <div className="tareas-lista-contenedor">
        {
            tareas.map((tarea) =>
            <tarea 
            texto={tarea.texto}
            completada={tarea.completada}
            />

            )
        }
    </div>
    
    </>
   )
}

export default ListaDeTareas;