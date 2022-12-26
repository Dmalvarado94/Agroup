import React,{useEffect, useState} from "react";


// ALMACENAMIENTO EN LOCALSTORAGE:

function useLocalStorage(itemName, initialValue) {
const [error, setError] = React.useState(false);
const [loading, setLoading] = React.useState(true);
const [item, setItem] = useState(initialValue);
  
useEffect(() => {
  setTimeout(() => {
    try {
       // traemos nuestras Tareas almacenadas:
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;


        
   if (!localStorageItem) {
    // Si el usuario es nuevo no existe un ítem en localStorage, por
    // lo tanto guardamos uno con un array vacío:
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  
  } else {
    // Si existen Tareas en el localStorage los regresamos como nuestras Tareas:
    parsedItem = JSON.parse(localStorageItem);
  
  }
  setItem(parsedItem);
  setLoading(false);

    } catch(error) {
      setError(error);
    }
  }, 1000)
});
  
 
const saveItem = (newItem) => {
  try {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  } catch(error) {
    setError(error);
  }
  


  


  
/*  // Guardamos nuestras Tareas del localStorage en nuestro estado:
    
// ESTADO INICIAL DE NUESTRAS TAREAS
const [tareas, setTareas] = useLocalStorage('TODOS_V1', []);

// Creamos la función en la que actualizaremos nuestro LocalStorage:
const saveTareas = (newTareas) => {
  
  //Convertimos a string nuestras Tareas:
  const stringifiedTareas = JSON.stringify(newTareas);

  //Lo guardamos en el localstorage
  localStorage.setItem('TODOS_V1', stringifiedTareas);
  // Actualizamos nuestro estado
  setTareas(newTareas);

}*/

}

    
  return {
    item,
    saveItem,
    loading,
    error,
  };
  

  };

  export { useLocalStorage };