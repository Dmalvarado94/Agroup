import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { TareaProvider } from '../../components/tareas/tareasContext/TareasContext'
import AppUI from '../../components/tareas/AppUI'
import './Tareas.scss'

const Tareas = () => {
  return (
    <div className="App">
    <div className='app-nav'> <Navbar /> </div>
    
      <div className='main-container'>
        <aside className='app-side'>
        <Sidebar />
        </aside>
        <main className='main' >
          <TareaProvider>
              <AppUI />
          </TareaProvider> 
            
        </main>
        
      </div>
    </div>
  )
  
}

export default Tareas