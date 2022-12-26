import React from 'react';

import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';



const Categorias = () => {
    return (
        
           
           <div className="App">
    <div className='app-nav'> <Navbar /> </div>
    
      <div className='main-container'>
        <aside className='app-side'>
        <Sidebar />
        </aside>
        <main className='main' >
        
            
            
        </main>
        
           </div>
           </div>
    );


}


export default Categorias