import React, { useState } from 'react'
import { TareasContext } from '../tareasContext/TareasContext';
import './TareasForm.scss'

const TareasForm = () => {
    const [newTareaValue, setNewTareaValue] = useState("");

    const {
        addTarea,
        setOpenModal,
    } = React.useContext(TareasContext);
    
    
    const onChange = (event) => {
        setNewTareaValue(event.target.value);
    };

    const cancelar = () => {
        setOpenModal(false);
    };

    const añadir = (event) => {
        event.preventDefault();
        addTarea(newTareaValue);
        setOpenModal(false);
    };



return (
    <form action="" onSubmit={añadir}>
        <label htmlFor=""></label>
        <textarea
        value={newTareaValue}
        onChange={onChange}
        placeholder='cosechar uvas para el vino je' 
        name="" id="" cols="30" 
        rows="10"></textarea>
        <div className='TareaForm-buttonContainer'>
            <button className='TareaForm-button TareaForm-button--add ' onClick={añadir} >Añadir</button>
            <button className='TareaForm-button TareaForm-button--cancel' onClick={cancelar} >Cancelar</button>
        </div>
    </form>
  )
}

export default TareasForm