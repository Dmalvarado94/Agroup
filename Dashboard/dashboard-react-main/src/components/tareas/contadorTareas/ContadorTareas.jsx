import React from 'react';
import { TareasContext } from '../tareasContext/TareasContext';
import './ContadorTareas.scss'

const ContadorTareas = () => {
  const {totalTareas, completedTareas} = React.useContext(TareasContext);
  return (
    <div>
        <h2 className='contadorTareas'>Has completado {completedTareas} de {totalTareas} tareas</h2>
    </div>
  )
}

export default ContadorTareas