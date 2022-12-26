import React from 'react';
import ReactCalendar from '../../components/calendarios/ReactCalendar';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

const Calendario = () => {
  return (
    <div className="App">
    <div className='app-nav'> <Navbar /> </div>
    
      <div className='main-container'>
        <aside className='app-side'>
        <Sidebar />
        </aside>
        <main className='main' >
            <ReactCalendar />
        </main>
        
      </div>
    </div>
  )
}

export default Calendario