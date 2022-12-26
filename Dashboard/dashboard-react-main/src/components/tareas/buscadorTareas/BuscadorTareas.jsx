import React, { useState } from 'react';
import { TareasContext } from '../tareasContext/TareasContext';
import './BuscadorTareas.scss';

const BuscadorTareas = () => {
const {searchValue, setSearchValue} = React.useContext(TareasContext);
 

const onSearchValueChange = (event) => {
  setSearchValue(event.target.value);
}


  return (
    
       <div>
         <input type="text"
        className='buscadorTareas'
        placeholder='tareeitas'
        value={searchValue}
        onChange={onSearchValueChange}
        />

       
       </div>
  )
}

export default BuscadorTareas