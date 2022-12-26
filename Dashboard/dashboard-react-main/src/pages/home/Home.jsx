import React from 'react';
import CustomizeDayPicker from '../../components/calendarios/CustomizeDayPicker';
import AreaChart from '../../components/charts/AreaChart';

import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widgets from '../../components/widgets/Widgets';
import './Home.scss'

const Home = () => {
  return (
    <div className="App">
    <div className='app-nav'> <Navbar /> </div>
    
      <div className='main-container'>
        <aside className='app-side'>
        <Sidebar />
        </aside>
        <main className='main' >
          <Widgets />
            <div className='main-info'>
            <CustomizeDayPicker />
            <AreaChart />
            
            </div>
        </main>
        
      </div>
    </div>
  )
}

export default Home