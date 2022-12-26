import React from 'react'
import ContadorTareas from './contadorTareas/ContadorTareas';
import BuscadorTareas from './buscadorTareas/BuscadorTareas'
import BotonCrearTareas from './botonCrearTareas/BotonCrearTareas';
import ListasTareas from './listasTareas/ListasTareas';
import TareasItem from './tareasItem/TareasItem'
import { TareasContext, TareaProvider } from './tareasContext/TareasContext';
import './TareasComponent.scss'
import { Modal } from './modal/Modal';
import TareasForm from './tareasForm/TareasForm';



const AppUI = () => {
const {
  
    error,
    loading,
    SearchedTareas,
    completeTarea,
    deleteTarea,
    openModal,
    setOpenModal,
   
} = React.useContext(TareasContext);

  return (
    <div className='tareas'>
    

      <div className='tareas-container'>
        
          <div className='tareas-componente'>
            {/* Pasamos el estado a nuestro componente */}
        <ContadorTareas />
        <BuscadorTareas />

          <TareasContext.Consumer>

            {() => (
              <ListasTareas className='listasTareas' >
                  {error && <p>Desespérate, hubo un error...</p>}
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {(!loading && !SearchedTareas.length) && <p>¡Crea tu primera Tarea!</p>}
          {SearchedTareas.map(tarea => (
            <TareasItem 
            key={tarea.text}
            text={tarea.text}
            completed={tarea.completed}
            onComplete={() => completeTarea(tarea.text)}
            onDelete = {() => deleteTarea(tarea.text)}
            
            />
          ))}

        </ListasTareas>
        
              
            )}
            
           

          </TareasContext.Consumer>

        {openModal && (
          <Modal>
            <TareasForm></TareasForm>
          </Modal>
          
        )}


        <BotonCrearTareas 
        setOpenModal={setOpenModal}
        />
          </div>
      </div>

    </div>
  )
}

export default AppUI