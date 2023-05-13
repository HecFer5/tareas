import React from 'react';
import './App.css';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png';
import Tarea from './componentes/Tarea';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='principal-aplicacion'>
      <div className='logo-contenedor-freeCodeCamp'>
        <img
          src={freeCodeCampLogo}
          className='fCC-logo' alt='logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
      
    </div>
  );
}

export default App;
