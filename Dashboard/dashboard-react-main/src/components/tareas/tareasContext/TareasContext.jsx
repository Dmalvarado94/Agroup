import React, { useState } from 'react'
import { useLocalStorage } from './useLocalStorage';

const TareasContext = React.createContext("");

function TareaProvider(props) {
    // Nos traemos todo el estado y las funciones de 
    //nuestra aplicación que queremos globales

    const {
      item: tareas,
      saveItem: saveTareas,


    } = useLocalStorage('TODOS_V1', []);
    //El ESTADO DE NUESTRAS BÚSQUEDAS:
const  [searchValue, setSearchValue] = useState("");

//ESTADO DE NUESTRO MODAL ;)
const [openModal, setOpenModal] = useState(false);


// CANTIDAD DE TAREAS COMPLETADAS:
const completedTareas = tareas.filter(tarea => !!tarea.completed).length;
//CANTIDAD TOTAL DE TAREAS:
const totalTareas = tareas.length;


// CREAR NUEVA VARIABLE EN DONDE SE GUARDA LAS COINCIDENCIAS DE BUSQUEDA:
let SearchedTareas = [];

//LÓGICA PARA FILTRAR:

if(!searchValue.length >= 1) {
  SearchedTareas = tareas;
} else {
  SearchedTareas = tareas.filter(tarea => {
    const tareaText = tarea.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return tareaText.includes(searchText);
  });
}


   //AÑADIR TAREAS
   const addTarea = (text) => {
    const newTareas = [...tareas];
    newTareas.push({
      completed: false,
      text,
    })
    saveTareas(newTareas);
  };



//COMPLETAR TAREAS
// creamos la funcion completeTarea, que recibirá el texto de nuestra Tarea, ubicamos la Tarea en nuestro arreglo, cambiamos el valor de la propiedad completed 
//de nuestras Tareas y muy importante actualizar nuestro estado, para que React para que React pueda re-renderizar nuestras Tareas con los nuevos datos
const completeTarea = (text) => {
  const tareaIndex = tareas.findIndex(tarea => tarea.text === text)
  const newTareas = [...tareas];
  newTareas[tareaIndex].completed = true;
  //Cada que el usuario interactue con nuestra app se guardarán las Tareas con nuestra función
  saveTareas(newTareas)
  //setTareas(newTareas);
}


//ELIMINANDO TAREAS
// podemos hacer algo parecido a la función de completar, pero ahora, en lugar de cambiar si está completada o no, 
//solamente la eliminaremos de nuestras Tareas con el método splice, 
// y también regresamos un nuevo arreglo con las Tareas actualizadas.
const deleteTarea = (text) => {
  const tareaIndex = tareas.findIndex(tarea => tarea.text === text)
  const newTareas = [...tareas];
  newTareas.splice(tareaIndex, 1);
   //Cada que el usuario interactue con nuestra app se guardarán las Tareas con nuestra función
  saveTareas(newTareas)
   //setTareas(newTareas);



}

return(
  <TareasContext.Provider value={{
    totalTareas,
    completedTareas,
    searchValue,
    setSearchValue,
    SearchedTareas,
    completeTarea,
    deleteTarea,
    openModal,
    setOpenModal,
    addTarea,
  
  }}>
    {props.children}
  </TareasContext.Provider>


)


  }


  export { TareasContext, TareaProvider };